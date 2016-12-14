import ng from 'angular';

import errorComponent from './error.component.js';

export default ng.module('app.components.error', [])
 .component('error', errorComponent)
 .name;