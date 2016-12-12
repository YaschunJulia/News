import ng from 'angular';
import ngRoute from 'angular-ui-router';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'sweetalert/dist/sweetalert.min.js';
import 'sweetalert/dist/sweetalert.css';

import './assets/css/style.css';
import ngComponents from './components';
// import NewsService from './news_service.js';

ng.module('app', [ngRoute, ngComponents])
.config(($locationProvider, $stateProvider) => {
  'ngInject';
  $locationProvider.html5Mode(true);
  const states = [
    {
      name: 'news',
      url: '/',
      component: 'news',
    },
    {
      name: 'item', 
      url: 'news/{itemId}', 
      component: 'item',
      params: {
        itemId: null,
        title: null,
      },
    }
  ];
  states.forEach(state => $stateProvider.state(state));
});
