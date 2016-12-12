import ng from 'angular';

import News from './news';
import Item from './item';

export default ng.module('app.components', [Item, News])
.name;
