/**
 * @author acvetkov@yandex-team.ru
 * @overview
 */

'use strict';

require('../helpers/specs').get('management', [
    'getAll',
    'get',
    'getPermissionWarningsById',
    'getPermissionWarningsByManifest',
    'setEnabled',
    'uninstall',
    'uninstallSelf'
]);
