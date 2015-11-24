/**
 * @author acvetkov@yandex-team.ru
 * @overview
 */

'use strict';

import {get} from './object';

/**
 * Create getters for async methods
 * @param {Object} obj
 * @param {String} namespace
 * @param {Array<String>} asyncMethods
 * @param {Function} Promise
 * @returns {Object}
 */
export function wrapAsyncMethods(obj, namespace, asyncMethods = [], Promise) {
    return asyncMethods.reduce((result, method) => {
        return appendAsyncMethod(obj, namespace, method, Promise);
    }, obj);
}

/**
 * Wrap sync methods to promise
 * @param {Object} obj
 * @param {String} namespace
 * @param {Array<String>} syncMethods
 * @param {Function} Promise
 * @returns {*}
 */
export function wrapSyncMethods(obj, namespace, syncMethods = [], Promise) {
    return syncMethods.reduce((result, method) => {
        return appendSyncMethod(obj, namespace, method, Promise);
    }, obj);
}

/**
 * Append async method to data
 * @param {Object} obj
 * @param {String} namespace
 * @param {String} method
 * @param {Function} Promise
 * @returns {Object}
 */
function appendAsyncMethod(obj, namespace, method, Promise) {
    var data = get(obj, namespace);
    Object.defineProperty(data, method, {
        get: function () {
            return (...args) => {
                return new Promise((resolve, reject) => {
                    var chromeNamespace = get(chrome, namespace);
                    args.push((...results) => {
                        if (chrome.runtime.lastError) {
                            return reject(chrome.runtime.lastError);
                        }
                        return Function.prototype.apply.call(resolve, this, results);
                    });
                    Function.prototype.apply.call(chromeNamespace[method], chromeNamespace, args);
                });
            }
        }
    });
    return obj;
}

/**
 * Append sync method
 * @param {Object} obj
 * @param {String} namespace
 * @param {String} method
 * @param {Function} Promise
 * @returns {Object}
 */
function appendSyncMethod(obj, namespace, method, Promise) {
    var data = get(obj, namespace);
    Object.defineProperty(data, method, {
        get: function () {
            return (...args) => {
                return new Promise((resolve, reject) => {
                    var chromeNamespace = get(chrome, namespace);
                    try {
                        return resolve(Function.prototype.apply.call(chromeNamespace[method], chromeNamespace, args));
                    } catch (e) {
                        return reject(e);
                    }
                });
            };
        }
    });
    return obj;
}