import {get} from './object';

/**
 * chrome api object
 * @see https://developer.chrome.com/extensions/api_index
 */
const chromeApi = getChromeApi();

/**
 * Create getters for async methods
 * @param {Object} obj
 * @param {String} namespace
 * @param {Array<String>} asyncMethods
 * @param {Function} Thenable
 * @returns {Object}
 */
export function wrapAsyncMethods(obj, namespace, asyncMethods = [], Thenable) {
    return asyncMethods.reduce((result, method) => {
        return appendAsyncMethod(obj, namespace, method, Thenable);
    }, obj);
}

/**
 * Wrap sync methods to promise
 * @param {Object} obj
 * @param {String} namespace
 * @param {Array<String>} syncMethods
 * @param {Function} Thenable
 * @returns {*}
 */
export function wrapSyncMethods(obj, namespace, syncMethods = [], Thenable) {
    return syncMethods.reduce((result, method) => {
        return appendSyncMethod(obj, namespace, method, Thenable);
    }, obj);
}

/**
 * Get chrome api object
 * @returns {chrome}
 */
function getChromeApi() {
    if (typeof window !== 'undefined' && window.chrome) {
        return window.chrome;
    }
    if (typeof global !== 'undefined' && global.chrome) {
        return global.chrome;
    }
}

/**
 * Append async method to data
 * @param {Object} obj
 * @param {String} namespace
 * @param {String} method
 * @param {Function} Thenable
 * @returns {Object}
 */
function appendAsyncMethod(obj, namespace, method, Thenable) {
    var data = get(obj, namespace);
    Object.defineProperty(data, method, {
        get: function () {
            return wrapAsyncMethod(Thenable, namespace, method);
        }
    });
    return obj;
}

/**
 * Wrap sync method
 * @param {Function} Thenable
 * @param {String} namespace
 * @param {String} method
 * @returns {Function}
 */
function wrapAsyncMethod(Thenable, namespace, method) {
    return (...args) => {
        return new Thenable((resolve, reject) => {
            var chromeNamespace = get(chromeApi, namespace);
            args.push(getResolver(resolve, reject, this));
            apply(chromeNamespace[method], chromeNamespace, args);
        });
    };
}

/**
 *
 * @param {Function} resolve
 * @param {Function} reject
 * @param {*} context
 * @returns {Function}
 */
function getResolver(resolve, reject, context) {
    return (...args) => {
        if (chromeApi.runtime.lastError) {
            return reject(chromeApi.runtime.lastError);
        }
        return apply(resolve, context, args);
    };
}

/**
 * Append sync method
 * @param {Object} obj
 * @param {String} namespace
 * @param {String} method
 * @param {Function} PromiseConstructor
 * @returns {Object}
 */
function appendSyncMethod(obj, namespace, method, PromiseConstructor) {
    const data = get(obj, namespace);
    Object.defineProperty(data, method, {
        get: function () {
            return wrapSyncMethod(PromiseConstructor, namespace, method);
        }
    });
    return obj;
}

/**
 * Wrap sync method
 * @param {Function} Thenable
 * @param {String} namespace
 * @param {String} method
 * @returns {Function}
 */
function wrapSyncMethod(Thenable, namespace, method) {
    return (...args) => {
        return new Thenable((resolve, reject) => {
            const chromeNamespace = get(chromeApi, namespace);
            try {
                return resolve(apply(chromeNamespace[method], chromeNamespace, args));
            } catch (e) {
                return reject(e);
            }
        });
    };
}

/**
 * For IE compatibility we can't use method.apply.
 *
 * Function apply
 * @param {Function} method
 * @param {*} context
 * @param {Array} args
 * @returns {*}
 */
function apply(method, context, args) {
    return Function.prototype.apply.call(method, context, args);
}
