import ng from 'angular';

import errorComponent from './error.component.js';

export default ng.module('app.components.err', [])
 .component('err', errorComponent)
 .name;