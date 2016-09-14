'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */

 var adminUrl = 'users/',
 baseUrl = '/1/objects/';


angular.module('yapp')
  .controller('LoginCtrl', function($scope,$http,$location,Backand,UserService) {

    function getAdminUrl() {
      return Backand.getApiUrl() + baseUrl + adminUrl;
    };

    $scope.submit = function() {
      $http.get(getAdminUrl())
      .then(function(result){
         $scope.loginData = result.data.data;
         console.log($scope.loginData);
         if($scope.loginData[0].username==$scope.logdata.user && $scope.loginData[0].password==$scope.logdata.password)
          {
            $location.path('/dashboard');
            return false;
          }
          else {
            $scope.message="Incorrect username or password";
          }
      });


    };

  });
