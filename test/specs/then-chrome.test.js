/**
 * @author acvetkov@yandex-team.ru
 * @overview
 */

import _ from 'lodash';
import chromeApi from '../src/index';
import config from '../../src/config';

describe('chromeApi', function () {
    _.forEach(config, (data, namespace) => {
        describe(`${namespace}`, function () {
            assertAsyncMethods(namespace, data.async);
        });
    });
});

function assertAsyncMethods(namespace, methods) {
    _.forEach(methods, method => {

        describe(`${method}`, function () {

            var result = {
                a: 2,
                b: 3
            };

            before(function () {
                this.chromeMethod = _.get(chrome, `${namespace}.${method}`);
                this.chromeApiMethod = _.get(chromeApi, `${namespace}.${method}`);
                this.chromeMethod.yields(result);
            });

            beforeEach(function () {
                chrome.reset();
                chrome.runtime.lastError = undefined;
            });

            it('should be defined', function () {
                assert.isFunction(this.chromeApiMethod);
            });

            it(`should call chrome.${namespace}.${method} with passed args`, function () {
                var args = {
                    a: 1,
                    b: 2
                };
                return this.chromeApiMethod(args)
                    .then(() => {
                        assert.calledOnce(this.chromeMethod.withArgs(args));
                    }).catch((e) => {
                        assert.fail(e);
                    });
            });
        });
    });
}