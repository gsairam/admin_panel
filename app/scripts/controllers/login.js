'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('LoginCtrl', function($scope, $location) {

    console.log('ok');

    $scope.submit = function() {

      $location.path('/dashboard');

      return false;
    };

  });
