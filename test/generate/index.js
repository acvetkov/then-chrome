import _ from 'lodash';
import config from '../../src/config';

/**
 * Generate specs to test ThenChrome instance
 * @param {ThenChrome} thenChrome
 */
export default function generateSpecs(thenChrome) {
    _.forEach(config, (data, namespace) => {
        describe(`${namespace}`, () => {
            generateAsyncSpecs(thenChrome, namespace, data.async);
            generateSyncSpecs(thenChrome, namespace, data.sync);
        });
    });
}

/**
 * Generate async methods suite
 * @param {ThenChrome} thenChrome
 * @param {String} namespace
 * @param {Array<String>} asyncMethods
 */
function generateAsyncSpecs(thenChrome, namespace, asyncMethods = []) {
    _.forEach(asyncMethods, method => {
        generateAsyncMethodSpecs(thenChrome, namespace, method);
    });
}

/**
 * Generate specs for async method
 * @param {ThenChrome} thenChrome
 * @param {String} namespace
 * @param {String} method
 */
function generateAsyncMethodSpecs(thenChrome, namespace, method) {
    describe(`${method}`, () => {

        const chromeMethod = _.get(chrome, `${namespace}.${method}`);
        const thenChromeMethod = _.get(thenChrome, `${namespace}.${method}`);

        const result = {
            a: 2,
            b: 3
        };

        before(() => {
            chrome.alarms.get.yields(result);
            chromeMethod.yields(result);
        });

        after(() => {
            chromeMethod.resetBehavior();
        });

        beforeEach(() => {
            chromeMethod.resetHistory();
            chrome.runtime.lastError = undefined;
        });

        it('should be defined', () => {
            assert.isFunction(thenChromeMethod);
        });

        it(`should call chrome.${namespace}.${method} with passed args`, function () {
            const args = {
                a: 1,
                b: 2
            };
            return thenChromeMethod(args)
                .then(() => {
                    assert.calledOnce(chromeMethod.withArgs(args));
                }).catch((e) => {
                    assert.fail(e);
                });
        });

        it(`should call chrome.${namespace}.${method} with passed spread args`, function () {
            return thenChromeMethod(1, 2, 3)
                .then(() => {
                    assert.calledOnce(chromeMethod.withArgs(1, 2, 3));
                }).catch((e) => {
                    assert.fail(e);
                });
        });

        it('should return expected value', function () {
            var args = {
                name: '1'
            };
            return assert.eventually.deepEqual(thenChromeMethod(args), result);
        });

        it('should be rejected', function () {
            var args = {
                name: '2'
            };
            chrome.runtime.lastError = 'error';
            return assert.isRejected(thenChromeMethod(args));
        });
    });
}

/**
 * Generate async methods suite
 * @param {ThenChrome} thenChrome
 * @param {String} namespace
 * @param {Array<String>} syncMethods
 */
function generateSyncSpecs(thenChrome, namespace, syncMethods = []) {
    _.forEach(syncMethods, method => {
        generateSyncMethodSpecs(thenChrome, namespace, method);
    });
}

/**
 * Generate specs for sync method
 * @param {ThenChrome} thenChrome
 * @param {String} namespace
 * @param {String} method
 */
function generateSyncMethodSpecs(thenChrome, namespace, method) {
    describe(`${method}`, () => {

        const chromeMethod = _.get(chrome, `${namespace}.${method}`);
        const thenChromeMethod = _.get(thenChrome, `${namespace}.${method}`);

        var result = {
            a: 2,
            b: 3
        };

        before(() => {
            chromeMethod.returns(result);
        });

        beforeEach(() => {
            chromeMethod.resetHistory();
        });

        after(function () {
            chromeMethod.resetBehavior();
        });

        it('should be defined', () => {
            assert.isFunction(thenChromeMethod);
        });

        it(`should call chrome.${namespace}.${method} with passed args`, () => {
            var args = {
                a: 1,
                b: 2
            };
            return thenChromeMethod(args)
                .then(() => {
                    assert.calledOnce(chromeMethod.withArgs(args));
                }).catch((e) => {
                    assert.fail(e);
                });
        });

        it('should return expected value', () => {
            var args = {
                name: '1'
            };
            return assert.eventually.deepEqual(thenChromeMethod(args), result);
        });

        it('should be rejected', () => {
            var args = {
                name: '2'
            };
            chromeMethod.throws(new Error('error'));
            return assert.isRejected(thenChromeMethod(args));
        });
    });
}
