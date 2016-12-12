import ng from 'angular';

import newsComponent from './news_component.js';
import NewsService from '../news_service.js';

export default ng.module('app.components.news', [])
 .component('news', newsComponent)
 .service('NewsService', NewsService)
 .name;
