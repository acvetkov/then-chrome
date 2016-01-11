/**
 * Get nested object by path
 * @param {Object} object
 * @param {String} path
 * @param {String} [delimiter]
 * @returns {Object|Null}
 */
export function get(object, path, delimiter = '.') {
    var keys = path.split(delimiter);
    var data = object;

    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (!data[key]) {
            return null;
        }
        data = data[key];
    }
    return data;
}

/**
 * Create nested object by path
 * @param {Object} obj
 * @param {String} path
 * @param {String} [delimiter]
 * @returns {*}
 */
export function set(obj, path, delimiter = '.') {
    return createNestedObject(obj, path.split(delimiter));
}

/**
 * Create nested objects
 * @param {Object} obj
 * @param {Array<String>} keys
 * @returns {*}
 */
function createNestedObject(obj, keys) {
    if (keys.length) {
        var nested = obj[keys[0]] = typeof obj[keys[0]] === 'undefined' ? {} : obj[keys[0]];
        createNestedObject(nested, keys.slice(1, keys.length));
    }
    return obj;
}
