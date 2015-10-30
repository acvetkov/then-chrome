/**
 * @author acvetkov@yandex-team.ru
 * @overview
 */

var chai = require('chai');

global.chrome = require('sinon-chrome');
global.assert = chai.assert;
global.sinon = require('sinon');
global.sinon.assert.expose(global.assert, {prefix: ''});

var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
