## then-chrome

[![Build Status](https://travis-ci.org/acvetkov/then-chrome.svg?branch=master)](https://travis-ci.org/acvetkov/then-chrome)
[![npm version](https://badge.fury.io/js/then-chrome.svg)](https://www.npmjs.com/package/then-chrome)

Promise-based [chrome api](https://developer.chrome.com/extensions/api_index#stable_apis).

### usage

```js
var chromeApi = require('then-chrome');

// get tabs list
chromeApi.tabs.query({currentWindow: true})
   .then(console.log); // tabs list

// get all cookies by name   
chromeApi.cookies.getAll({name: 'cookieName'})
   .then(console.log); // cookie list
   
// detect language by tab
chromeApi.tabs.detectLanguage(10)
   .then(console.log); // en
   .catch(console.warn); // catch chrome.runtime.lastError value
```

Sycn methods are wrapped too

```js
var chromeApi = require('then-chrome');

chromeApi.i18n.getMessage('title')
   then(console.log); // 'extension title'
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
2. [chrome.cookies](https://developer.chrome.com/extensions/cookies)
3. [chrome.bookmarks](https://developer.chrome.com/extensions/bookmarks)
4. [chrome.browserAction](https://developer.chrome.com/extensions/browserAction)
5. [chrome.contextMenus](https://developer.chrome.com/extensions/contextMenus)
6. [chrome.history](https://developer.chrome.com/extensions/history)
7. [chrome.i18n](https://developer.chrome.com/extensions/i18n)
8. [chrome.management](https://developer.chrome.com/extensions/management)
9. [chrome.notifications](https://developer.chrome.com/extensions/notifications)
10. [chrome.pageAction](https://developer.chrome.com/extensions/pageAction)
11. [chrome.permissions](https://developer.chrome.com/extensions/permissions)
12. [chrome.runtime](https://developer.chrome.com/extensions/runtime)
13. [chrome.tabs](https://developer.chrome.com/extensions/tabs)
14. [chrome.topSites](https://developer.chrome.com/extensions/topSites)
15. [chrome.webNavigation](https://developer.chrome.com/extensions/webNavigation)
16. [chrome.windows](https://developer.chrome.com/extensions/windows)

