import ng from 'angular';

import News from './news';
import Item from './item';
import Wrap from './wrap';
import Err from './error';

export default ng.module('wrap.components', [Item, News, Wrap, Err])
.name;
