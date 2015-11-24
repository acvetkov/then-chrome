/**
 * @author acvetkov@yandex-team.ru
 * @overview
 */

import _ from 'lodash';
import chromeApi from '../src/index';
import config from '../src/config';

describe('then-chrome', function () {

    describe('alarms', function () {

        describe('create', function () {

            var result = {
                a: 2,
                b: 3
            };

            before(function () {
                chrome.alarms.create.returns(result);
            });

            beforeEach(function () {
                chrome.reset();
            });

            after(function () {
                chrome.alarms.create.resetBehavior();
            });

            it('should be defined', function () {
                assert.isFunction(chromeApi.alarms.create);
            });

            it(`should call chrome.alarms.create with passed args`, function () {
                var args = {
                    a: 1,
                    b: 2
                };
                return chromeApi.alarms.create(args)
                    .then(() => {
                        assert.calledOnce(chrome.alarms.create.withArgs(args));
                    }).catch((e) => {
                        assert.fail(e);
                    });
            });

            it('should return expected value', function () {
                var args = {
                    name: '1'
                };
                return assert.eventually.deepEqual(chromeApi.alarms.create(args), result);
            });

            it('should be rejected', function () {
                var args = {
                    name: '2'
                };
                chrome.alarms.create.throws('error');
                return assert.isRejected(chromeApi.alarms.create(args));
            });


        });

        describe('get', function () {

            var result = {
                a: 2,
                b: 3
            };

            before(function () {
                chrome.alarms.get.yields(result);
            });

            beforeEach(function () {
                chrome.reset();
                chrome.runtime.lastError = undefined;
            });

            after(function () {
                chrome.alarms.get.resetBehavior();
            });

            it('should be defined', function () {
                assert.isFunction(chromeApi.alarms.get);
            });


            it(`should call chrome.alarms.get with passed args`, function () {
                var args = {
                    a: 1,
                    b: 2
                };
                return chromeApi.alarms.get(args)
                    .then(() => {
                        assert.calledOnce(chrome.alarms.get.withArgs(args));
                    }).catch((e) => {
                        assert.fail(e);
                    });
            });

            it(`should call chrome.alarms.get with passed spread args`, function () {
                return chromeApi.alarms.get(1, 2, 3)
                    .then(() => {
                        assert.calledOnce(chrome.alarms.get.withArgs(1, 2, 3));
                    }).catch((e) => {
                        assert.fail(e);
                    });
            });

            it('should return expected value', function () {
                var args = {
                    name: '1'
                };
                return assert.eventually.deepEqual(chromeApi.alarms.get(args), result);
            });

            it('should be rejected', function () {
                var args = {
                    name: '2'
                };
                chrome.runtime.lastError = 'error';
                return assert.isRejected(chromeApi.alarms.get(args));
            });
        });
    });
});