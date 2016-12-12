import ng from 'angular';

import itemComponent from './item_component.js';
import NewsService from '../news_service.js';

export default ng.module('app.components.item', [])
 .component('item', itemComponent)
 .service('NewsService', NewsService)
 .name;
