angular.module('yapp')
.service('UserService', function ($http, Backand) {
  var self = this,
  baseUrl = '/1/objects/',
  userUrl = 'user/',
  storeUrl = 'stores/',
  itemUrl = 'items/',
  offerUrl = 'offers/';

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
  }

  addItem = function (data) {
    return $http.post(getItemUrl(), data);
  }

var selected_users = [];
selectedUser = function (id) {
     var index = selected_users.indexOf(id);
     if (index > -1)
         selected_users.splice(index, 1);
     else
         selected_users.push(id);

   };

deleteSelected = function()
 {
  for(var i=0;i<selected_users.length;i++)
    {
      $http({
                    method: 'PUT',
                    url: getUrl(),
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    data : {deleted_at: new Date().toString()},
                    params : {id: selected_users[i]}

            });
    }
 };
 return {
     addItem : addItem,
     addUser : addUser,
     selectedUser : selectedUser,
     deleteSelected :deleteSelected
   };


  addStore = function (data) {
    return $http.post(getStoreUrl(), data);
  };



  addOffer = function (data) {
    return $http.post(getOfferUrl(), data);
  };

  return {
    addStore: addStore,
    addOffer: addOffer
  };
});
