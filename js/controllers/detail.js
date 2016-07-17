(function() {
    'use strict';
    
    angular
    .module('peanut')
    .controller('detailController', function(API,$stateParams) {
       var vm = this;

       var singlePic = API.getSinglePic($stateParams.picid);

       singlePic.then(function(results){
       	vm. = results.data;
       })
       });
})();