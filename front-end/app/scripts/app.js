'use strict';
angular.module('TeamSpaceApp', ['ui.router', 'ngResource', 'ngDialog'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

    // route for the home page
      .state('app', {
      url: '/',
      views: {
        'sidebar': {
          templateUrl: 'views/sidebar.html',
          controller: 'SidebarController'
        },
        'content': {
          templateUrl: 'views/content.html',
          controller: 'ContentController'
        }
      }

    });
    $urlRouterProvider.otherwise('/');
  });
