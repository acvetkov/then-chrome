/**
 * @author acvetkov@yandex-team.ru
 * @overview Promise based chrome api
 */

var wrapMethods = require('./wrapMethods');

/**
 * chrome.alarms
 * @see https://developer.chrome.com/extensions/alarms
 * @type {Object|*}
 */
exports.alarms = wrapMethods('alarms', ['get', 'getAll', 'clear', 'clearAll']);

/**
 * chrome.cookies
 * @see https://developer.chrome.com/extensions/cookies
 * @type {Object|*}
 */
exports.cookies = wrapMethods('cookies', ['get', 'getAll', 'set', 'remove', 'getAllCookieStores']);

/**
 * chrome.bookmarks
 * @see https://developer.chrome.com/extensions/bookmarks
 * @type {Object|*}
 */
exports.bookmarks = wrapMethods('bookmarks', [
    'get',
    'getChildren',
    'getRecent',
    'getTree',
    'getSubTree',
    'search',
    'create',
    'move',
    'update',
    'remove',
    'removeTree'
]);

/**
 * chrome.browserAction
 * @see https://developer.chrome.com/extensions/browserAction
 * @type {Object|*}
 */
exports.browserAction = wrapMethods(
    'browserAction',
    ['getTitle', 'setIcon', 'getPopup', 'getBadgeText', 'getBadgeBackgroundColor'],
    ['setTitle', 'setPopup', 'setBadgeText', 'setBadgeBackgroundColor', 'enable', 'disable']
);

/**
 * chrome.contextMenus
 * @see https://developer.chrome.com/extensions/contextMenus
 * @type {Object|*}
 */
exports.contextMenus = wrapMethods('contextMenus', ['create', 'update', 'remove', 'removeAll']);

/**
 * chrome.history
 * @see https://developer.chrome.com/extensions/history
 * @type {Object|*}
 */
exports.history = wrapMethods('history', ['search', 'getVisits', 'addUrl', 'deleteUrl', 'deleteRange', 'deleteAll']);

/**
 * chrome.i18n
 * @see https://developer.chrome.com/extensions/i18n
 * @type {Object|*}
 */
exports.i18n = wrapMethods('i18n', ['getAcceptLanguages'], ['getMessage', 'getUILanguage']);

/**
 * chrome.management
 * @see https://developer.chrome.com/extensions/management
 * @type {Object|*}
 */
exports.management = wrapMethods('management', [
    'getAll',
    'get',
    'getSelf',
    'getPermissionWarningsById',
    'getPermissionWarningsByManifest',
    'setEnabled',
    'uninstall',
    'uninstallSelf'
]);

/**
 * chrome.notifications
 * @see https://developer.chrome.com/extensions/notifications
 * @type {Object|*}
 */
exports.notifications = wrapMethods('notifications', [
    'create',
    'update',
    'clear',
    'getAll',
    'getPermissionLevel'
]);

/**
 * chrome.pageAction
 * @see https://developer.chrome.com/extensions/pageAction
 * @type {Object|*}
 */
exports.pageAction = wrapMethods(
    'pageAction',
    ['getTitle', 'setIcon', 'getPopup'],
    ['show', 'hide', 'setTitle', 'setPopup']
);

/**
 * chrome.permissions
 * @see https://developer.chrome.com/extensions/permissions
 * @type {Object|*}
 */
exports.permissions = wrapMethods(
    'permissions',
    ['getAll', 'contains', 'request', 'remove']
);

/**
 * chrome.runtime
 * @see https://developer.chrome.com/extensions/runtime
 * @type {Object|*}
 */
exports.runtime = wrapMethods(
    'runtime',
    [
        'getBackgroundPage',
        'openOptionsPage',
        'setUninstallURL',
        'requestUpdateCheck',
        'getPlatformInfo',
        'getPackageDirectoryEntry'
    ],
    ['getManifest', 'getURL', 'reload', 'restart', 'connect']
);

/**
 * chrome.tabs
 * @see https://developer.chrome.com/extensions/tabs
 * @type {Object|*}
 */
exports.tabs = wrapMethods(
    'tabs',
    [
        'get',
        'getCurrent',
        'getSelected',
        'getAllInWindow',
        'create',
        'duplicate',
        'query',
        'highlight',
        'update',
        'move',
        'reload',
        'remove',
        'detectLanguage',
        'captureVisibleTab',
        'executeScript',
        'insertCSS',
        'setZoom',
        'getZoom',
        'setZoomSettings',
        'getZoomSettings'
    ],
    ['connect']
);

/**
 * chrome.topSites
 * @see https://developer.chrome.com/extensions/topSites
 * @type {Object|*}
 */
exports.topSites = wrapMethods('topSites', ['get']);

/**
 * chrome.webNavigation
 * @see https://developer.chrome.com/extensions/webNavigation
 * @type {Object|*}
 */
exports.webNavigation = wrapMethods('webNavigation', ['getFrame', 'getAllFrames']);

/**
 * chrome.windows
 * @see https://developer.chrome.com/extensions/windows
 * @type {Object|*}
 */
exports.windows = wrapMethods(
    'windows',
    ['get', 'getCurrent', 'getLastFocused', 'getAll', 'create', 'update', 'remove']
);
