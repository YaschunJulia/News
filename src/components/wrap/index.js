import ng from 'angular';

import wrapComponent from './wrap.component.js';

export default ng.module('wrap.components.wrap', [])
 .component('wrap', wrapComponent)
 .name;