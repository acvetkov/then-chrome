import create from './api';

const Thenable = getNativePromise();

/**
 * Get native promise constructor
 * @returns {*}
 */
function getNativePromise() {
    if (typeof window !== 'undefined' && window.Promise) {
        return window.Promise;
    }
    if (typeof global !== 'undefined' && global.Promise) {
        return global.Promise;
    }
}

if (!Thenable) {
    throw new TypeError('Native promise does not support in your environment. Use /out/api function directly');
}

/**
 * @type {ThenChrome}
 */
export default create(Thenable);
