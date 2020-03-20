/**
* Main MacGyver loader
*/
import MacGyver from './macgyver.vue';
window.macgyver = MacGyver;

import('./services/emit');
import('./services/setPath');
import('./services/watchAll');

// Import all MacGyver components
// NOTE: These are defined as dynamic imports as we need window.macgyver to be a accessible

import('./components/mgAlert');
import('./components/mgButton');
import('./components/mgCheckBox');
import('./components/mgChoiceButtons');
import('./components/mgChoiceCheckbox');
import('./components/mgChoiceDropdown');
import('./components/mgChoiceList');
import('./components/mgChoicePopup'); // FIXME: Needs $prompt
import('./components/mgChoiceRadio');
import('./components/mgChoiceTags');
import('./components/mgChoiceTree');
import('./components/mgCode');
import('./components/mgColor');
import('./components/mgComponent');
import('./components/mgContainer');
import('./components/mgDate');
import('./components/mgEmail');
import('./components/mgError');
import('./components/mgFormEditor');
import('./components/mgForm');
//... import('./components/mgGridDashboard');
import('./components/mgGrid');
import('./components/mgHeading');
import('./components/mgHtml');
import('./components/mgIcon'); // Not in showcase
import('./components/mgInfoBlock'); // Not in showcase
//... import('./components/mgInfoChart');
import('./components/mgLabel');
import('./components/mgList');
import('./components/mgNumber');
import('./components/mgPermissions');
import('./components/mgPlaceholder');
import('./components/mgQuery');
import('./components/mgRestQuery'); // FIXME: Needs $prompt
import('./components/mgSeperator');
import('./components/mgTable');
import('./components/mgTextArea');
import('./components/mgText');
import('./components/mgTime');
import('./components/mgToggle');
import('./components/mgUrl');
import('./components/mgWysiwyg');
