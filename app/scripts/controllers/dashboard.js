  'use strict';

angular.module('yapp')
  .controller('DashboardCtrl', function($scope, $state, $http, Backand, UserService,ItemService) {

    $scope.cards = [
                    {imageId: 'images/flat-avatar.png'},
                    {imageId: 'images/flat-avatar.png'}
                    ];

  $scope.$state = $state;
  var baseUrl = '/1/objects/';
  $scope.selected_users=[];
  var itemUrl = 'items/';

  function getUrl(objectName) {
    return Backand.getApiUrl() + baseUrl + objectName;
  }

  function getItemUrl() {
    return Backand.getApiUrl() + baseUrl + itemUrl;
  }

  function getData (url) {
    return $http.get(getUrl(url));
  }

  function getUsers () {
    getData('user/').then(function (result) {
      $scope.users = result.data.data;
    });
  }
  $scope.showPrompt = function() {
    $state.go('addUser');
  };

  $scope.selected = function (id) {
     UserService.selectedUser(id);
   };

   $scope.selected_item = function (id) {
      ItemService.selectedItem(id);
    };

   $scope.selected_item_edit=function(id)
   {
     $scope.item_edit_id=id;
   };

   $scope.editItem=function()
   {
     $state.go('edititem');
     $scope.edit_items = ItemService.findItem($scope.item_edit_id);
   };

    $scope.showdeletedItems=function()
    {
       ItemService.deleteSelectedItems();
       getItems();
    };

  $scope.showdeletednumbers=function()
  {
    UserService.deleteSelected();
    getUsers();
  };

  $scope.add_Item = function() {
    $state.go('addItem');
  };

  $scope.add_offer = function() {
    $state.go('addOffer');
  };

  $scope.addUser = function() {
    UserService.addUser($scope.object)
    .then(function(){
      $state.go('users');
      getUsers();
    });
  };


  $scope.addItem = function(){
    UserService.addItem($scope.item)
    .then(function(){
      $state.go('items');
      getItems();
    });
  };

  $scope.addOffer = function(){
    UserService.addOffer($scope.offer)
    .then(function(){
      $state.go('offers');
      getOffers();
    });
  };

  function getCategories () {
    getData('category/').then(function (result) {
      $scope.categories = result.data.data;
    });
  }

  function getItems() {
    getData('items/').then(function (result) {
      $scope.items = result.data.data;
      ItemService.saveItems($scope.items);
    });
  }

  function getOffers() {
    getData('offers/').then(function (result) {
      $scope.offers = result.data.data;
    });
  }

  function getOrders() {
    getData('orders/').then(function (result) {
      $scope.orders = result.data.data;
    });
  }
  getItems();
  getUsers();
  getCategories();
  getOffers();
  getOrders();
});
