export default {
    alarms: {
        async: [
            'get',
            'getAll',
            'clear',
            'clearAll'
        ],
        sync: [
            'create'
        ]
    },
    bookmarks: {
        async: [
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
        ]
    },
    browserAction: {
        async: [
            'getTitle',
            'setIcon',
            'getPopup',
            'getBadgeText',
            'getBadgeBackgroundColor'
        ],
        sync: [
            'setTitle',
            'setPopup',
            'setBadgeText',
            'setBadgeBackgroundColor',
            'enable',
            'disable'
        ]
    },
    browsingData: {
        async: [
            'settings',
            'remove',
            'removeAppcache',
            'removeCache',
            'removeCookies',
            'removeDownloads',
            'removeFileSystems',
            'removeFormData',
            'removeHistory',
            'removeIndexedDB',
            'removeLocalStorage',
            'removePluginData',
            'removePasswords',
            'removeWebSQL'
        ]
    },
    commands: {
        async: [
            'getAll'
        ]
    },
    contextMenus: {
        async: [
            'create',
            'update',
            'remove',
            'removeAll'
        ]
    },
    cookies: {
        async: [
            'get',
            'getAll',
            'set',
            'remove',
            'getAllCookieStores'
        ]
    },
    debugger: {
        async: [
            'attach',
            'detach',
            'sendCommand',
            'getTargets'
        ]
    },
    desktopCapture: {
        async: [
            'chooseDesktopMedia'
        ],
        sync: ['cancelChooseDesktopMedia']
    },
    'devtools.inspectedWindow': {
        async: [
            'eval',
            'getResources'
        ],
        sync: ['reload']
    },
    'devtools.network': {
        async: [
            'getHAR'
        ]
    },
    'devtools.panels': {
        async: [
            'create',
            'setOpenResourceHandler',
            'openResource'
        ]
    },
    dial: {
        async: [
            'discoverNow',
            'fetchDeviceDescription'
        ]
    },
    downloads: {
        async: [
            'download',
            'search',
            'pause',
            'resume',
            'cancel',
            'getFileIcon',
            'erase',
            'removeFile',
            'acceptDanger'
        ],
        sync: [
            'open',
            'show',
            'showDefaultFolder',
            'drag',
            'setShelfEnabled'
        ]
    },
    extension: {
        async: [
            'isAllowedIncognitoAccess',
            'isAllowedFileSchemeAccess'
        ],
        sync: [
            'getURL',
            'getViews',
            'getBackgroundPage',
            'getExtensionTabs',
            'setUpdateUrlData'
        ]
    },
    fontSettings: {
        async: [
            'clearFont',
            'getFont',
            'setFont',
            'getFontList',
            'clearDefaultFontSize',
            'getDefaultFontSize',
            'setDefaultFontSize',
            'clearDefaultFixedFontSize',
            'getDefaultFixedFontSize',
            'setDefaultFixedFontSize',
            'clearMinimumFontSize',
            'getMinimumFontSize',
            'setMinimumFontSize'
        ]
    },
    gcm: {
        async: [
            'register',
            'unregister',
            'send'
        ]
    },
    history: {
        async: [
            'search',
            'getVisits',
            'addUrl',
            'deleteUrl',
            'deleteRange',
            'deleteAll'
        ]
    },
    i18n: {
        async: [
            'getAcceptLanguages',
            'detectLanguage'
        ],
        sync: [
            'getMessage',
            'getUILanguage'
        ]
    },
    identity: {
        async: [
            'getAccounts',
            'getAuthToken',
            'getProfileUserInfo',
            'removeCachedAuthToken',
            'launchWebAuthFlow'
        ],
        sync: [
            'getRedirectURL'
        ]
    },
    idle: {
        async: [
            'queryState'
        ],
        sync: [
            'setDetectionInterval'
        ]
    },
    instanceID: {
        async: [
            'getID',
            'getCreationTime',
            'getToken',
            'deleteToken',
            'deleteID'
        ]
    },
    management: {
        async: [
            'getAll',
            'get',
            'getSelf',
            'getPermissionWarningsById',
            'getPermissionWarningsByManifest',
            'setEnabled',
            'uninstall',
            'uninstallSelf',
            'launchApp',
            'createAppShortcut',
            'setLaunchType',
            'generateAppForLink'
        ]
    },
    notifications: {
        async: [
            'create',
            'update',
            'clear',
            'getAll',
            'getPermissionLevel'
        ]
    },
    omnibox: {
        sync: ['setDefaultSuggestion']
    },
    pageAction: {
        async: [
            'getTitle',
            'setIcon',
            'getPopup'
        ],
        sync: [
            'show',
            'hide',
            'setTitle',
            'setPopup'
        ]
    },
    pageCapture: {
        async: [
            'saveAsMHTML'
        ]
    },
    permissions: {
        async: [
            'getAll',
            'contains',
            'request',
            'remove'
        ]
    },
    'privacy.network.networkPredictionEnabled': {
        async: [
            'get',
            'set',
            'clear'
        ]
    },
    'privacy.services.alternateErrorPagesEnabled': {
        async: [
            'get',
            'set',
            'clear'
        ]
    },
    'privacy.services.autofillEnabled': {
        async: [
            'get',
            'set',
            'clear'
        ]
    },
    'privacy.services.passwordSavingEnabled': {
        async: [
            'get',
            'set',
            'clear'
        ]
    },
    'privacy.services.safeBrowsingEnabled': {
        async: [
            'get',
            'set',
            'clear'
        ]
    },
    'privacy.services.searchSuggestEnabled': {
        async: [
            'get',
            'set',
            'clear'
        ]
    },
    'privacy.services.spellingServiceEnabled': {
        async: [
            'get',
            'set',
            'clear'
        ]
    },
    'privacy.services.translationServiceEnabled': {
        async: [
            'get',
            'set',
            'clear'
        ]
    },
    'privacy.websites.hyperlinkAuditingEnabled': {
        async: [
            'get',
            'set',
            'clear'
        ]
    },
    'privacy.websites.referrersEnabled': {
        async: [
            'get',
            'set',
            'clear'
        ]
    },
    'privacy.websites.thirdPartyCookiesAllowed': {
        async: [
            'get',
            'set',
            'clear'
        ]
    },
    'proxy.settings': {
        async: [
            'get',
            'set',
            'clear'
        ]
    },
    runtime: {
        async: [
            'getBackgroundPage',
            'openOptionsPage',
            'setUninstallURL',
            'requestUpdateCheck',
            'sendMessage',
            'sendNativeMessage',
            'getPlatformInfo',
            'getPackageDirectoryEntry'
        ],
        sync: [
            'getManifest',
            'getURL',
            'reload',
            'restart',
            'connect',
            'connectNative'
        ]
    },
    sessions: {
        async: [
            'getRecentlyClosed',
            'getDevices',
            'restore'
        ]
    },
    'storage.local': {
        async: [
            'clear',
            'get',
            'set',
            'remove',
            'getBytesInUse'
        ]
    },
    'storage.managed': {
        async: [
            'clear',
            'get',
            'set',
            'remove',
            'getBytesInUse'
        ]
    },
    'storage.sync': {
        async: [
            'clear',
            'get',
            'set',
            'remove',
            'getBytesInUse'
        ]
    },
    'system.cpu': {
        async: [
            'getInfo'
        ]
    },
    'system.memory': {
        async: [
            'getInfo'
        ]
    },
    'system.storage': {
        async: [
            'getInfo',
            'ejectDevice',
            'getAvailableCapacity'
        ]
    },
    tabCapture: {
        async: [
            'capture',
            'getCapturedTabs'
        ]
    },
    tabs: {
        async: [
            'get',
            'getCurrent',
            'sendRequest',
            'sendMessage',
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
        sync: [
            'connect'
        ]
    },
    topSites: {
        async: [
            'get'
        ]
    },
    tts: {
        async: [
            'speak',
            'isSpeaking',
            'getVoices'
        ],
        sync: [
            'stop',
            'pause',
            'resume'
        ]
    },
    webNavigation: {
        async: [
            'getFrame',
            'getAllFrames'
        ]
    },
    webRequest: {
        async: [
            'handlerBehaviorChanged'
        ]
    },
    windows: {
        async: [
            'get',
            'getCurrent',
            'getLastFocused',
            'getAll',
            'create',
            'update',
            'remove'
        ]
    }
};
