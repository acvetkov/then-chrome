/**
 * @author acvetkov@yandex-team.ru
 * @overview
 */

'use strict';

var chromise = require('../../src');
var assert = require('chai').assert;

/**
 * Generate specs for testing chrome methods
 * @param {String} namespace
 * @param {Array} asyncMethods
 * @param {Array} [syncMethods]
 */
exports.get = (namespace, asyncMethods, syncMethods = []) => {
    describe(`chromise.${namespace}`, () => {
        callAsyncSpecs(namespace, asyncMethods);
        callSyncSpecs(namespace, syncMethods);
    });
};

/**
 * Call specs for async methods
 * @param {String} namespace
 * @param {Array} asyncMethods
 */
function callAsyncSpecs(namespace, asyncMethods) {
    asyncMethods.forEach(method => {
        callAsyncSpec(namespace, method);
    });
}

/**
 * Call specs for sync methods
 * @param {String} namespace
 * @param {} syncMethods
 */
function callSyncSpecs(namespace, syncMethods) {
    syncMethods.forEach(method => {
        callSyncSpec(namespace, method);
    });
}

/**
 * Suite for async method testing
 * @param {String} namespace
 * @param {String} method
 */
function callAsyncSpec(namespace, method) {
    describe(`chromise.${namespace}.${method}`, () => {
        checkDefined(namespace, method);
        asyncSpecs(namespace, method);
    });
}

/**
 * Suite for sync method testing
 * @param {String} namespace
 * @param {String} method
 */
function callSyncSpec(namespace, method) {
    describe(`chromise.${namespace}.${method}`, () => {
        checkDefined(namespace, method);
        syncSpecs(namespace, method);
    });
}

/**
 * Check method exists
 * @param {String} namespace
 * @param {String} method
 */
function checkDefined(namespace, method) {
    it('should be defined', function () {
        assert.isFunction(chromise[namespace][method]);
    });
}

function asyncSpecs(namespace, method) {

    var result = {
        a: 2,
        b: 3
    };

    before(function () {
        chrome[namespace][method].yields(result);
    });

    beforeEach(function () {
        chrome.reset();
        delete chrome.runtime.lastError;
    });

    it(`should call chrome.${namespace}.${method} with passed args`, function () {
        var args = {
            a: 1,
            b: 2
        };
        return chromise[namespace][method](args)
            .then(() => {
                assert.calledOnce(chrome[namespace][method].withArgs(args));
            }).catch((e) => {
                assert.fail(e);
            });
    });

    it('should return expected value', function () {
        var args = {
            name: '1'
        };
        return assert.eventually.deepEqual(chromise[namespace][method](args), result);
    });

    it('should be rejected', function () {
        var args = {
            name: '2'
        };
        chrome.runtime.lastError = 'error';
        return assert.isRejected(chromise[namespace][method](args));
    });
}

/**
 * Спеки для синхронного метода
 * @param {String} namespace
 * @param {String} method
 */
function syncSpecs(namespace, method) {
    var result = {
        a: 2,
        b: 3
    };

    before(function () {
        chrome[namespace][method].returns(result);
    });

    beforeEach(function () {
        chrome.reset();
        delete chrome.runtime.lastError;
    });

    it(`should call chrome.${namespace}.${method} with passed args`, function () {
        var args = {
            a: 1,
            b: 2
        };
        return chromise[namespace][method](args)
            .then(() => {
                assert.calledOnce(chrome[namespace][method].withArgs(args));
            }).catch((e) => {
                assert.fail(e);
            });
    });

    it('should return expected value', function () {
        var args = {
            name: '1'
        };
        return assert.eventually.deepEqual(chromise[namespace][method](args), result);
    });

    it('should be rejected', function () {
        var args = {
            name: '2'
        };
        chrome[namespace][method].throws('error');
        return assert.isRejected(chromise[namespace][method](args));
    });
}
