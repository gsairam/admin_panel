'use strict';

/**
 * @ngdoc overview
 * @name yapp
 * @description
 * # yapp
 *
 * Main module of the application.
 */
angular
  .module('yapp', ['ui.router',
    'ngAnimate','ngMaterial',
    'backand'])
  .config(function($stateProvider, $urlRouterProvider, BackandProvider) {

    BackandProvider.setAppName('freshwordl');
    BackandProvider.setSignUpToken('8fdf0d5d-7a3a-4f59-9fdb-adbdfb15001a');
    BackandProvider.setAnonymousToken('18049397-098a-4dc5-b258-c923f2e8ae34');

    $urlRouterProvider.when('/dashboard', '/dashboard/overview');
    $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('base', {
        abstract: true,
        url: '',
        templateUrl: 'views/base.html'
      })
        .state('login', {
          url: '/login',
          parent: 'base',
          templateUrl: 'views/login.html',
          controller: 'LoginCtrl'
        })
        .state('dashboard', {
          url: '/dashboard',
          parent: 'base',
          templateUrl: 'views/dashboard.html',
          controller: 'DashboardCtrl'
        })
        .state('users', {
            url: '/users',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/users.html',
            controller: 'DashboardCtrl'
          })
          .state('addUser', {
              url: '/addUser',
              parent: 'dashboard',
              templateUrl: 'views/dashboard/addUser.html',
              controller: 'DashboardCtrl'
            })
          .state('categories', {
            url: '/categories',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/categories.html',
            controller: 'DashboardCtrl'
          })
          .state('items', {
            url: '/items',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/items.html',
            controller: 'DashboardCtrl'
          })
          .state('edititem', {
            url: '/EditItems',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/editItem.html',
            controller: 'DashboardCtrl'
          })
          .state('addItem', {
              url: '/addItem',
              parent: 'dashboard',
              templateUrl: 'views/dashboard/addItem.html',
              controller: 'DashboardCtrl'
            })
          .state('offers', {
            url: '/offers',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/offers.html',
            controller: 'DashboardCtrl'
          })
          .state('addOffer', {
              url: '/addOffer',
              parent: 'dashboard',
              templateUrl: 'views/dashboard/addOffer.html',
              controller: 'DashboardCtrl'
            })
          .state('orders', {
            url: '/orders',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/orders.html',
            controller: 'DashboardCtrl'
          })
          .state('overview', {
            url: '/overview',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/overview.html',
            controller: 'DashboardCtrl'
          })
          .state('reports', {
            url: '/reports',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/reports.html'
          });
  });
