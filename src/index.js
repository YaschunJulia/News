import ng from 'angular';
import ngRouter from 'angular-ui-router';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'sweetalert/dist/sweetalert.min.js';
import 'sweetalert/dist/sweetalert.css';

import './assets/css/style.css';
import ngComponents from './components';
// import NewsService from './news_service.js';

ng.module('app', [ngRouter, ngComponents])
.config(($locationProvider, $stateProvider) => {
  'ngInject';

  const states = [
    {
      name: 'wrap',
      url: '/',
      component: 'wrap',
    },
    {
      name: 'wrap.news',
      url: 'news',
      component: 'news',
    },
    {
      name: 'wrap.item', 
      url: 'news/{itemId}', 
      component: 'item',
      params: {
        itemId: null,
        title: null,
      },
    },
    {
      name: 'error',
      url: '/error',
      component: 'error',
    },
  ];
  states.forEach(state => $stateProvider.state(state));
   $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
});
