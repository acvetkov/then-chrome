/**
 * @author acvetkov@yandex-team.ru
 * @overview
 */

'use strict';

require('../helpers/specs').get('browserAction',
    ['getTitle', 'setIcon', 'getPopup', 'getBadgeText', 'getBadgeBackgroundColor'],
    ['setTitle', 'setPopup', 'setBadgeText', 'setBadgeBackgroundColor', 'enable', 'disable']
);
