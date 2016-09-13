angular.module('yapp')
.service('ItemService', function ($http,$filter, Backand) {
  var self = this,
  baseUrl = '/1/objects/',
  userUrl = 'user/',
  storeUrl = 'stores/',
  itemUrl = 'items/',
  offerUrl = 'offers/';
  var savedItems = [];

  function getUrl() {
    return Backand.getApiUrl() + baseUrl + userUrl;
  }

  function getStoreUrl() {
    return Backand.getApiUrl() + baseUrl + storeUrl;
  }

  function getItemUrl() {
    return Backand.getApiUrl() + baseUrl + itemUrl;
  }

  function getOfferUrl() {
    return Backand.getApiUrl() + baseUrl + offerUrl;
  }


  addUser = function (data) {
    return $http.post(getUrl(), data);
  };

  var selected_items = [];
  selectedItem = function (id) {
       var index = selected_items.indexOf(id);
       if (index > -1)
           selected_items.splice(index, 1);
       else
           selected_items.push(id);

     };

  deleteSelectedItems = function()
   {
    for(var i=0;i<selected_items.length;i++)
      {
        $http({
                      method: 'PUT',
                      url: getItemUrl(),
                      headers: {
                          'Content-Type': 'application/json',
                          'Accept': 'application/json'
                      },
                      data : {deleted_at: new Date().toString()},
                      params : {id: selected_items[i]}

              });
      }
   };

   saveItems = function(items)
   {
     savedItems = items;
   };

   findItem = function(item_id)
   {
     return $filter('filter')(savedItems, {id:item_id});
   };

   return {
       addItem: addItem,
       findItem : findItem,
       saveItems : saveItems,
       selectedItem : selectedItem,
       deleteSelectedItems :deleteSelectedItems
     };

});
