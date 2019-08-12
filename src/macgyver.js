/**
* Main MacGyver loader
*/
import MacGyver from './macgyver.vue';
window.macgyver = MacGyver;

// Import all MacGyver components
// NOTE: These are defined as dynamic imports as we need window.macgyver to be a accessible

import('./components/mgAlert');

/*
import('./components/mgButton');
import('./components/mgCheckBox');
import('./components/mgChoiceButtons');
import('./components/mgChoiceCheckbox');
import('./components/mgChoiceDropdown');
import('./components/mgChoicePopup');
import('./components/mgChoiceRadio');
import('./components/mgChoiceTags');
import('./components/mgCodeEditor');
*/
import('./components/mgComponent');
import('./components/mgContainer');
/*
import('./components/mgDate');
import('./components/mgEmail');
import('./components/mgError');
import('./components/mgFormEditor');
*/
import('./components/mgForm');
/*
import('./components/mgGridDashboard');
import('./components/mgGrid');
import('./components/mgHeading');
import('./components/mgHtml');
import('./components/mgIcon');
import('./components/mgInfoBlock');
import('./components/mgInfoChart');
import('./components/mgLabel');
import('./components/mgList');
import('./components/mgNumber');
import('./components/mgPermissions');
import('./components/mgPlaceholder');
import('./components/mgRestQuery');
import('./components/mgSeperator');
import('./components/mgTable');
import('./components/mgTextArea');
*/
import('./components/mgText');
/*
import('./components/mgTime');
import('./components/mgToggle');
import('./components/mgUrl');
*/
