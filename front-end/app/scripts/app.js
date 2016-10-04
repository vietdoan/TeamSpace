'use strict';

angular.module('teamSpaceApp', ['ui.router','ngResource'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

    // route for the home page
      .state('app', {
      url: '/',
      views: {
        'sidebar': {
          templateUrl: 'views/sidebar.html',
        },
        'content': {
          templateUrl: 'views/content.html'
        }
      }

    })

    $urlRouterProvider.otherwise('/');
  });
