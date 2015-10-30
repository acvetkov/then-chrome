/**
 * @author acvetkov@yandex-team.ru
 * @overview Wrap helper
 */

'use strict';

var Q = require('q');

/**
 * Wrap all methods from namespace
 * @param {String} namespace
 * @param {Array} asyncMethods
 * @param {Array} [syncMethods]
 * @returns {Object}
 */
module.exports = function (namespace, asyncMethods, syncMethods = []) {
    var asyncObject = asyncMethods.reduce((result, method) => {
        if (exists(namespace, method)) {
            result[method] = wrapAsync(namespace, method);
        }
        return result;
    }, {});

    var syncObject = syncMethods.reduce((result, method) => {
        if (exists(namespace, method)) {
            result[method] = wrapSync(namespace, method);
        }
        return result;
    }, {});

    return merge(asyncObject, syncObject);
};

/**
 * Check method exists
 * @param {String} namespace
 * @param {String} method
 * @returns {Boolean}
 */
function exists(namespace, method) {
    return Boolean(chrome[namespace]) && Boolean(chrome[namespace][method]);
}

/**
 * Wrap async method
 * @param {String} namespace
 * @param {String} method
 * @returns {Function}
 */
function wrapAsync(namespace, method) {
    return (...args) => {
        var defer = Q.defer();
        args.push(getResolver(defer));
        Function.prototype.apply.call(chrome[namespace][method], chrome[namespace], args);
        return defer.promise;
    };
}

/**
 * @param {deferred} defer
 * @returns {Function}
 */
function getResolver(defer) {
    return (...args) => {
        if (chrome.runtime.lastError) {
            return defer.reject(chrome.runtime.lastError);
        }
        return Function.prototype.apply.call(defer.resolve, defer, args);
    };
}

/**
 * Wrap sync method
 * @param {String} namespace
 * @param {String} method
 * @returns {Function}
 */
function wrapSync(namespace, method) {
    return (...args) => {
        try {
            return Q.resolve(Function.prototype.apply.call(chrome[namespace][method], chrome[namespace], args));
        } catch (e) {
            return Q.reject(e);
        }
    };
}

/**
 * Merge objects
 * @param {Object} asyncObj
 * @param {Object} syncObj
 * @returns {Object}
 */
function merge(asyncObj, syncObj) {
    return Object.keys(syncObj).reduce((result, key) => {
        result[key] = syncObj[key];
        return result;
    }, asyncObj);
}
