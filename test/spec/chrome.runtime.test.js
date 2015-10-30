/**
 * @author acvetkov@yandex-team.ru
 * @overview
 */

'use strict';

require('../helpers/specs').get('runtime',
    ['getBackgroundPage', 'requestUpdateCheck', 'getPlatformInfo', 'getPackageDirectoryEntry'],
    ['getManifest', 'reload', 'restart', 'connect']
);
