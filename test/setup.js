import chai from 'chai';
import chrome from 'sinon-chrome';
import sinon from 'sinon';
import chaiAsPromised from 'chai-as-promised';

global.chrome = chrome;
global.assert = chai.assert;
global.sinon = sinon;
global.sinon.assert.expose(global.assert, {prefix: ''});
chai.use(chaiAsPromised);
