/**
 * @author acvetkov@yandex-team.ru
 * @overview
 */

'use strict';

require('../helpers/specs').get('tabs',
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
        'insertCSS'
    ],
    ['connect']
);
