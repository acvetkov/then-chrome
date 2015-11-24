/**
 * @author acvetkov@yandex-team.ru
 * @overview
 */

'use strict';

import chromeApi from './api';

let PromiseConstructor;

if (typeof window !== 'undefined') {
    PromiseConstructor = window.Promise;
}

if (!PromiseConstructor && typeof global !== 'undefined') {
    PromiseConstructor = global.Promise;
}

if (!PromiseConstructor) {
    throw new Error('Promise constructor not found. Use api function directly');
}

export default chromeApi(PromiseConstructor);
