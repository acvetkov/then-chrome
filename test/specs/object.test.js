import {get, set} from '../../src/object';

describe('object', function () {

    describe('set', function () {

        it('should correct set on empty object', () => {
            assert.deepEqual(set({}, 'a'), {
                a: {}
            });

            assert.deepEqual(set({}, 'a.b.c'), {
                a: {
                    b: {
                        c: {}
                    }
                }
            });
        });

        it('should correct set on non-empty object', () => {
            const data = {
                a: {},
                b: {
                    c: {}
                }
            };
            assert.deepEqual(set(data, 'a.b'), {
                a: {
                    b: {}
                },
                b: {
                    c: {}
                }
            });

            assert.deepEqual(set(data, 'b.d'), {
                a: {
                    b: {}
                },
                b: {
                    c: {},
                    d: {}
                }
            });

            assert.deepEqual(set(data, 'a.d.e'), {
                a: {
                    b: {},
                    d: {
                        e: {}
                    }
                },
                b: {
                    c: {},
                    d: {}
                }
            });
        });
    });

    describe('get', () => {

        it('should get correct object', () => {
            const data = {
                a: {
                    b: {},
                    d: {
                        e: {}
                    }
                },
                b: {
                    c: {},
                    d: {}
                }
            };
            assert.deepEqual(get(data, 'a.d.e'), {});
            assert.deepEqual(get(data, 'b.c'), {});
            assert.deepEqual(get(data, 'b.d'), {});
            assert.isNull(get(data, '1.2.3'));
        });
    });
});
