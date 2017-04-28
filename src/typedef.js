/**
 * @typedef Function ChromeThenable
 * @returns {Promise}
 */

/**
 * @typedef Object ThenChrome
 *
 * @property {ChromeThenable} alarms.get
 * @property {ChromeThenable} alarms.getAll
 * @property {ChromeThenable} alarms.clear
 * @property {ChromeThenable} alarms.clearAll
 * @property {ChromeThenable} alarms.create
 *
 * @property {ChromeThenable} bookmarks.get
 * @property {ChromeThenable} bookmarks.getChildren
 * @property {ChromeThenable} bookmarks.getRecent
 * @property {ChromeThenable} bookmarks.getTree
 * @property {ChromeThenable} bookmarks.getSubTree
 * @property {ChromeThenable} bookmarks.search
 * @property {ChromeThenable} bookmarks.create
 * @property {ChromeThenable} bookmarks.move
 * @property {ChromeThenable} bookmarks.update
 * @property {ChromeThenable} bookmarks.remove
 * @property {ChromeThenable} bookmarks.removeTree
 *
 * @property {ChromeThenable} browserAction.getTitle
 * @property {ChromeThenable} browserAction.setIcon
 * @property {ChromeThenable} browserAction.getPopup
 * @property {ChromeThenable} browserAction.getBadgeText
 * @property {ChromeThenable} browserAction.getBadgeBackgroundColor
 * @property {ChromeThenable} browserAction.setTitle
 * @property {ChromeThenable} browserAction.setPopup
 * @property {ChromeThenable} browserAction.setBadgeText
 * @property {ChromeThenable} browserAction.setBadgeBackgroundColor
 * @property {ChromeThenable} browserAction.enable
 * @property {ChromeThenable} browserAction.disable
 *
 * @property {ChromeThenable} browsingData.settings
 * @property {ChromeThenable} browsingData.remove
 * @property {ChromeThenable} browsingData.removeAppcache
 * @property {ChromeThenable} browsingData.removeCache
 * @property {ChromeThenable} browsingData.removeCookies
 * @property {ChromeThenable} browsingData.removeDownloads
 * @property {ChromeThenable} browsingData.removeFileSystems
 * @property {ChromeThenable} browsingData.removeFormData
 * @property {ChromeThenable} browsingData.removeHistory
 * @property {ChromeThenable} browsingData.removeIndexedDB
 * @property {ChromeThenable} browsingData.removeLocalStorage
 * @property {ChromeThenable} browsingData.removePluginData
 * @property {ChromeThenable} browsingData.removePasswords
 * @property {ChromeThenable} browsingData.removeWebSQL
 *
 * @property {ChromeThenable} commands.getAll
 *
 * @property {ChromeThenable} contextMenus.create
 * @property {ChromeThenable} contextMenus.update
 * @property {ChromeThenable} contextMenus.remove
 * @property {ChromeThenable} contextMenus.removeAll
 *
 * @property {ChromeThenable} cookies.get
 * @property {ChromeThenable} cookies.getAll
 * @property {ChromeThenable} cookies.set
 * @property {ChromeThenable} cookies.remove
 * @property {ChromeThenable} cookies.getAllCookieStores
 *
 * @property {ChromeThenable} debugger.attach
 * @property {ChromeThenable} debugger.detach
 * @property {ChromeThenable} debugger.sendCommand
 * @property {ChromeThenable} debugger.getTargets
 *
 * @property {ChromeThenable} desktopCapture.chooseDesktopMedia
 * @property {ChromeThenable} desktopCapture.cancelChooseDesktopMedia
 *
 * @property {ChromeThenable} devtools.inspectedWindow.eval
 * @property {ChromeThenable} devtools.inspectedWindow.getResources
 * @property {ChromeThenable} devtools.inspectedWindow.reload
 *
 * @property {ChromeThenable} devtools.network.getHAR
 *
 * @property {ChromeThenable} devtools.panels.create
 * @property {ChromeThenable} devtools.panels.setOpenResourceHandler
 * @property {ChromeThenable} devtools.panels.openResource
 *
 * @property {ChromeThenable} dial.discoverNow
 * @property {ChromeThenable} dial.fetchDeviceDescription
 *
 * @property {ChromeThenable} downloads.download
 * @property {ChromeThenable} downloads.search
 * @property {ChromeThenable} downloads.pause
 * @property {ChromeThenable} downloads.resume
 * @property {ChromeThenable} downloads.cancel
 * @property {ChromeThenable} downloads.getFileIcon
 * @property {ChromeThenable} downloads.erase
 * @property {ChromeThenable} downloads.removeFile
 * @property {ChromeThenable} downloads.acceptDanger
 * @property {ChromeThenable} downloads.open
 * @property {ChromeThenable} downloads.show
 * @property {ChromeThenable} downloads.showDefaultFolder
 * @property {ChromeThenable} downloads.drag
 * @property {ChromeThenable} downloads.setShelfEnabled
 *
 * @property {ChromeThenable} extension.isAllowedIncognitoAccess
 * @property {ChromeThenable} extension.isAllowedFileSchemeAccess
 * @property {ChromeThenable} extension.getURL
 * @property {ChromeThenable} extension.getViews
 * @property {ChromeThenable} extension.getBackgroundPage
 * @property {ChromeThenable} extension.getExtensionTabs
 * @property {ChromeThenable} extension.setUpdateUrlData
 *
 * @property {ChromeThenable} fontSettings.clearFont
 * @property {ChromeThenable} fontSettings.getFont
 * @property {ChromeThenable} fontSettings.setFont
 * @property {ChromeThenable} fontSettings.getFontList
 * @property {ChromeThenable} fontSettings.clearDefaultFontSize
 * @property {ChromeThenable} fontSettings.getDefaultFontSize
 * @property {ChromeThenable} fontSettings.setDefaultFontSize
 * @property {ChromeThenable} fontSettings.clearDefaultFixedFontSize
 * @property {ChromeThenable} fontSettings.getDefaultFixedFontSize
 * @property {ChromeThenable} fontSettings.setDefaultFixedFontSize
 * @property {ChromeThenable} fontSettings.clearMinimumFontSize
 * @property {ChromeThenable} fontSettings.getMinimumFontSize
 * @property {ChromeThenable} fontSettings.setMinimumFontSize
 *
 * @property {ChromeThenable} gcm.register
 * @property {ChromeThenable} gcm.unregister
 * @property {ChromeThenable} gcm.send
 *
 * @property {ChromeThenable} history.search
 * @property {ChromeThenable} history.getVisits
 * @property {ChromeThenable} history.addUrl
 * @property {ChromeThenable} history.deleteUrl
 * @property {ChromeThenable} history.deleteRange
 * @property {ChromeThenable} history.deleteAll
 *
 * @property {ChromeThenable} i18n.getAcceptLanguages
 * @property {ChromeThenable} i18n.detectLanguage
 * @property {ChromeThenable} i18n.getMessage
 * @property {ChromeThenable} i18n.getUILanguage
 *
 * @property {ChromeThenable} identity.getAccounts
 * @property {ChromeThenable} identity.getAuthToken
 * @property {ChromeThenable} identity.getProfileUserInfo
 * @property {ChromeThenable} identity.removeCachedAuthToken
 * @property {ChromeThenable} identity.launchWebAuthFlow
 * @property {ChromeThenable} identity.getRedirectURL
 *
 * @property {ChromeThenable} idle.queryState
 * @property {ChromeThenable} idle.setDetectionInterval
 *
 * @property {ChromeThenable} instanceID.getID
 * @property {ChromeThenable} instanceID.getCreationTime
 * @property {ChromeThenable} instanceID.getToken
 * @property {ChromeThenable} instanceID.deleteToken
 * @property {ChromeThenable} instanceID.deleteID
 *
 * @property {ChromeThenable} management.getAll
 * @property {ChromeThenable} management.get
 * @property {ChromeThenable} management.getSelf
 * @property {ChromeThenable} management.getPermissionWarningsById
 * @property {ChromeThenable} management.getPermissionWarningsByManifest
 * @property {ChromeThenable} management.setEnabled
 * @property {ChromeThenable} management.uninstall
 * @property {ChromeThenable} management.uninstallSelf
 * @property {ChromeThenable} management.launchApp
 * @property {ChromeThenable} management.createAppShortcut
 * @property {ChromeThenable} management.setLaunchType
 * @property {ChromeThenable} management.generateAppForLink
 *
 * @property {ChromeThenable} notifications.create
 * @property {ChromeThenable} notifications.update
 * @property {ChromeThenable} notifications.clear
 * @property {ChromeThenable} notifications.getAll
 * @property {ChromeThenable} notifications.getPermissionLevel
 *
 * @property {ChromeThenable} omnibox.setDefaultSuggestion
 *
 * @property {ChromeThenable} pageAction.getTitle
 * @property {ChromeThenable} pageAction.setIcon
 * @property {ChromeThenable} pageAction.getPopup
 * @property {ChromeThenable} pageAction.show
 * @property {ChromeThenable} pageAction.hide
 * @property {ChromeThenable} pageAction.setTitle
 * @property {ChromeThenable} pageAction.setPopup
 *
 * @property {ChromeThenable} pageCapture.saveAsMHTML
 *
 * @property {ChromeThenable} permissions.getAll
 * @property {ChromeThenable} permissions.contains
 * @property {ChromeThenable} permissions.request
 * @property {ChromeThenable} permissions.remove
 *
 * @property {ChromeThenable} privacy.network.networkPredictionEnabled.get
 * @property {ChromeThenable} privacy.network.networkPredictionEnabled.set
 * @property {ChromeThenable} privacy.network.networkPredictionEnabled.clear
 *
 * @property {ChromeThenable} privacy.services.alternateErrorPagesEnabled.get
 * @property {ChromeThenable} privacy.services.alternateErrorPagesEnabled.set
 * @property {ChromeThenable} privacy.services.alternateErrorPagesEnabled.clear
 *
 * @property {ChromeThenable} privacy.services.autofillEnabled.get
 * @property {ChromeThenable} privacy.services.autofillEnabled.set
 * @property {ChromeThenable} privacy.services.autofillEnabled.clear
 *
 * @property {ChromeThenable} privacy.services.passwordSavingEnabled.get
 * @property {ChromeThenable} privacy.services.passwordSavingEnabled.set
 * @property {ChromeThenable} privacy.services.passwordSavingEnabled.clear
 *
 * @property {ChromeThenable} privacy.services.safeBrowsingEnabled.get
 * @property {ChromeThenable} privacy.services.safeBrowsingEnabled.set
 * @property {ChromeThenable} privacy.services.safeBrowsingEnabled.clear
 *
 * @property {ChromeThenable} privacy.services.searchSuggestEnabled.get
 * @property {ChromeThenable} privacy.services.searchSuggestEnabled.set
 * @property {ChromeThenable} privacy.services.searchSuggestEnabled.clear
 *
 * @property {ChromeThenable} privacy.services.spellingServiceEnabled.get
 * @property {ChromeThenable} privacy.services.spellingServiceEnabled.set
 * @property {ChromeThenable} privacy.services.spellingServiceEnabled.clear
 *
 * @property {ChromeThenable} privacy.services.translationServiceEnabled.get
 * @property {ChromeThenable} privacy.services.translationServiceEnabled.set
 * @property {ChromeThenable} privacy.services.translationServiceEnabled.clear
 *
 * @property {ChromeThenable} privacy.websites.hyperlinkAuditingEnabled.get
 * @property {ChromeThenable} privacy.websites.hyperlinkAuditingEnabled.set
 * @property {ChromeThenable} privacy.websites.hyperlinkAuditingEnabled.clear
 *
 * @property {ChromeThenable} privacy.websites.referrersEnabled.get
 * @property {ChromeThenable} privacy.websites.referrersEnabled.set
 * @property {ChromeThenable} privacy.websites.referrersEnabled.clear
 *
 * @property {ChromeThenable} privacy.websites.thirdPartyCookiesAllowed.get
 * @property {ChromeThenable} privacy.websites.thirdPartyCookiesAllowed.set
 * @property {ChromeThenable} privacy.websites.thirdPartyCookiesAllowed.clear
 *
 * @property {ChromeThenable} proxy.settings.get
 * @property {ChromeThenable} proxy.settings.set
 * @property {ChromeThenable} proxy.settings.clear
 *
 * @property {ChromeThenable} runtime.getBackgroundPage
 * @property {ChromeThenable} runtime.openOptionsPage
 * @property {ChromeThenable} runtime.setUninstallURL
 * @property {ChromeThenable} runtime.requestUpdateCheck
 * @property {ChromeThenable} runtime.sendMessage
 * @property {ChromeThenable} runtime.sendNativeMessage
 * @property {ChromeThenable} runtime.getPlatformInfo
 * @property {ChromeThenable} runtime.getPackageDirectoryEntry
 * @property {ChromeThenable} runtime.getManifest
 * @property {ChromeThenable} runtime.getURL
 * @property {ChromeThenable} runtime.reload
 * @property {ChromeThenable} runtime.restart
 * @property {ChromeThenable} runtime.connect
 * @property {ChromeThenable} runtime.connectNative
 *
 * @property {ChromeThenable} sessions.getRecentlyClosed
 * @property {ChromeThenable} sessions.getDevices
 * @property {ChromeThenable} sessions.restore
 *
 * @property {ChromeThenable} storage.local.clear
 * @property {ChromeThenable} storage.local.get
 * @property {ChromeThenable} storage.local.set
 * @property {ChromeThenable} storage.local.remove
 * @property {ChromeThenable} storage.local.getBytesInUse
 *
 * @property {ChromeThenable} storage.managed.clear
 * @property {ChromeThenable} storage.managed.get
 * @property {ChromeThenable} storage.managed.set
 * @property {ChromeThenable} storage.managed.remove
 * @property {ChromeThenable} storage.managed.getBytesInUse
 *
 * @property {ChromeThenable} storage.sync.clear
 * @property {ChromeThenable} storage.sync.get
 * @property {ChromeThenable} storage.sync.set
 * @property {ChromeThenable} storage.sync.remove
 * @property {ChromeThenable} storage.sync.getBytesInUse
 *
 * @property {ChromeThenable} system.cpu.getInfo
 *
 * @property {ChromeThenable} system.memory.getInfo
 *
 * @property {ChromeThenable} system.storage.getInfo
 * @property {ChromeThenable} system.storage.ejectDevice
 * @property {ChromeThenable} system.storage.getAvailableCapacity
 *
 * @property {ChromeThenable} tabCapture.capture
 * @property {ChromeThenable} tabCapture.getCapturedTabs
 *
 * @property {ChromeThenable} tabs.get
 * @property {ChromeThenable} tabs.getCurrent
 * @property {ChromeThenable} tabs.sendRequest
 * @property {ChromeThenable} tabs.sendMessage
 * @property {ChromeThenable} tabs.getSelected
 * @property {ChromeThenable} tabs.getAllInWindow
 * @property {ChromeThenable} tabs.create
 * @property {ChromeThenable} tabs.duplicate
 * @property {ChromeThenable} tabs.query
 * @property {ChromeThenable} tabs.highlight
 * @property {ChromeThenable} tabs.update
 * @property {ChromeThenable} tabs.move
 * @property {ChromeThenable} tabs.reload
 * @property {ChromeThenable} tabs.remove
 * @property {ChromeThenable} tabs.detectLanguage
 * @property {ChromeThenable} tabs.captureVisibleTab
 * @property {ChromeThenable} tabs.executeScript
 * @property {ChromeThenable} tabs.insertCSS
 * @property {ChromeThenable} tabs.setZoom
 * @property {ChromeThenable} tabs.getZoom
 * @property {ChromeThenable} tabs.setZoomSettings
 * @property {ChromeThenable} tabs.getZoomSettings
 * @property {ChromeThenable} tabs.connect
 *
 * @property {ChromeThenable} topSites.get
 *
 * @property {ChromeThenable} tts.speak
 * @property {ChromeThenable} tts.isSpeaking
 * @property {ChromeThenable} tts.getVoices
 * @property {ChromeThenable} tts.stop
 * @property {ChromeThenable} tts.pause
 * @property {ChromeThenable} tts.resume
 *
 * @property {ChromeThenable} webNavigation.getFrame
 * @property {ChromeThenable} webNavigation.getAllFrames
 *
 * @property {ChromeThenable} webRequest.handlerBehaviorChanged
 *
 * @property {ChromeThenable} windows.get
 * @property {ChromeThenable} windows.getCurrent
 * @property {ChromeThenable} windows.getLastFocused
 * @property {ChromeThenable} windows.getAll
 * @property {ChromeThenable} windows.create
 * @property {ChromeThenable} windows.update
 * @property {ChromeThenable} windows.remove
 */
