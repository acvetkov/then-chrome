## then-chrome

[![Build Status](https://travis-ci.org/acvetkov/then-chrome.svg?branch=master)](https://travis-ci.org/acvetkov/then-chrome)
[![Coverage Status](https://coveralls.io/repos/acvetkov/then-chrome/badge.svg?branch=coverage&service=github)](https://coveralls.io/github/acvetkov/then-chrome?branch=coverage)
[![npm version](https://badge.fury.io/js/then-chrome.svg)](https://www.npmjs.com/package/then-chrome)

Promise-based [chrome api](https://developer.chrome.com/extensions/api_index#stable_apis).

### usage

```js
var thenChrome = require('then-chrome');

// get tabs list
thenChrome.tabs.query({currentWindow: true})
   .then(console.log); // tabs list

// get all cookies by name   
thenChrome.cookies.getAll({name: 'cookieName'})
   .then(console.log); // cookie list
   
// detect language by tab
thenChrome.tabs.detectLanguage(10)
   .then(console.log); // en
   .catch(console.warn); // catch chrome.runtime.lastError value
```

Sync methods are wrapped too

```js
var thenChrome = require('then-chrome');

thenChrome.i18n.getMessage('title')
   .then(console.log); // 'extension title'
```

There is native Promise inside then-chrome by default, but you can use every Thenable lib, compatible with [Promises/A+](https://promisesaplus.com/) standart.

```js
var Q = require('q');
var BlueBird = require('bluebird');
var create = require('then-chrome/out/api');

var thenChromeQ = create(Q.Promise); // then-chrome with Q promise inside
var thenChromeBB = create(BlueBird); // then-chrome with bluebird promise inside

```

### install

```bash
npm install then-chrome
```

or

```bash
git clone https://github.com/acvetkov/then-chrome.git
cd then-chrome
npm install
```

### build

```bash
npm run build
```

### test

```bash
npm test
```

## Supported methods

1. [chrome.alarms](https://developer.chrome.com/extensions/alarms)
2. [chrome.bookmarks](https://developer.chrome.com/extensions/bookmarks)
3. [chrome.browserAction](https://developer.chrome.com/extensions/browserAction)
4. [chrome.browsingData](https://developer.chrome.com/extensions/browsingData)
5. [chrome.commands](https://developer.chrome.com/extensions/commands)
6. [chrome.contextMenus](https://developer.chrome.com/extensions/contextMenus)
7. [chrome.cookies](https://developer.chrome.com/extensions/cookies)
8. [chrome.debugger](https://developer.chrome.com/extensions/debugger)
9. [chrome.desktopCapture](https://developer.chrome.com/extensions/desktopCapture)
10. [chrome.devtools.inspectedWindow](https://developer.chrome.com/extensions/devtools_inspectedWindow)
11. [chrome.devtools.network](https://developer.chrome.com/extensions/devtools_network)
12. [chrome.devtools.panels](https://developer.chrome.com/extensions/devtools_panels)
13. [chrome.dial](https://chromium.googlesource.com/chromium/src.git/+/master/chrome/common/extensions/api/dial.idl) (undocumented API for communication with DIAL-capable devices)
13. [chrome.downloads](https://developer.chrome.com/extensions/downloads)
14. [chrome.extension](https://developer.chrome.com/extensions/extension)
15. [chrome.fontSettings](https://developer.chrome.com/extensions/fontSettings)
16. [chrome.gcm](https://developer.chrome.com/extensions/gcm)
17. [chrome.history](https://developer.chrome.com/extensions/history)
18. [chrome.i18n](https://developer.chrome.com/extensions/i18n)
19. [chrome.identity](https://developer.chrome.com/extensions/identity)
20. [chrome.idle](https://developer.chrome.com/extensions/idle)
21. [chrome.instanceID](https://developer.chrome.com/extensions/instanceID)
22. [chrome.management](https://developer.chrome.com/extensions/management)
23. [chrome.notifications](https://developer.chrome.com/extensions/notifications)
24. [chrome.omnibox](https://developer.chrome.com/extensions/omnibox)
25. [chrome.pageAction](https://developer.chrome.com/extensions/pageAction)
26. [chrome.pageCapture](https://developer.chrome.com/extensions/pageCapture)
27. [chrome.permissions](https://developer.chrome.com/extensions/permissions)
28. [chrome.privacy](https://developer.chrome.com/extensions/privacy)
28. [chrome.proxy](https://developer.chrome.com/extensions/proxy)
29. [chrome.runtime](https://developer.chrome.com/extensions/runtime)
30. [chrome.sessions](https://developer.chrome.com/extensions/sessions)
31. [chrome.storage](https://developer.chrome.com/extensions/storage)
32. [chrome.system.cpu](https://developer.chrome.com/extensions/system_cpu)
33. [chrome.system.memory](https://developer.chrome.com/extensions/system_memory)
34. [chrome.system.storage](https://developer.chrome.com/extensions/system_storage)
35. [chrome.tabCapture](https://developer.chrome.com/extensions/tabCapture)
36. [chrome.tabs](https://developer.chrome.com/extensions/tabs)
37. [chrome.topSites](https://developer.chrome.com/extensions/topSites)
38. [chrome.tts](https://developer.chrome.com/extensions/tts)
39. [chrome.webNavigation](https://developer.chrome.com/extensions/webNavigation)
40. [chrome.webRequest](https://developer.chrome.com/extensions/webRequest)
41. [chrome.windows](https://developer.chrome.com/extensions/windows)

## Useful resources
[Awesome Browser Extensions And Apps](https://github.com/vitalets/awesome-browser-extensions-and-apps) - a curated list of awesome resources for building browser extensions and apps.
