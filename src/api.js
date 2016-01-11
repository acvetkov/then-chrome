import config from './config';
import {wrapAsyncMethods, wrapSyncMethods} from './wrapper';
import {get, set} from './object';

/**
 * @param {Function} Thenable
 * @returns {ThenChrome}
 */
export default function create(Thenable) {
    return Object.keys(config).reduce((result, namespace) => {
        createNamespace(result, namespace);
        return wrapMethods(result, namespace, config[namespace], Thenable);
    }, {});
}

/**
 * Create namespace
 * @param {Object} obj
 * @param {String} namespace
 * @returns {*}
 */
function createNamespace(obj, namespace) {
    var chromeNamespace = get(obj, namespace);
    if (!chromeNamespace) {
        set(obj, namespace);
    }
    return obj;
}

/**
 * @param {Object} obj
 * @param {String} namespace
 * @param {Object} data
 * @param {Array<String>} data.async
 * @param {Array<String>} data.sync
 * @param {Function} Promise constructor
 * @returns {Object}
 */
function wrapMethods(obj, namespace, data, Promise) {
    wrapAsyncMethods(obj, namespace, data.async, Promise);
    wrapSyncMethods(obj, namespace, data.sync, Promise);
    return obj;
}
