import ng from 'angular';
import ngRouter from 'angular-ui-router';

import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/css/style.css';
import ngComponents from './components';

ng.module('app', [ngRouter, ngComponents])
.config(($locationProvider, $stateProvider, $urlRouterProvider) => {
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
      },
    },
    {
      name: 'err',
      url: '/error',
      component: 'err',
       params: {
        status: null,
      },
    },
  ];
  states.forEach(state => $stateProvider.state(state));

  $urlRouterProvider.otherwise("/error");

   $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
});
