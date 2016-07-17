(function() {
    'use strict';
    
    angular
    .module('peanut')
    .controller('mainController', function(API) {
       var vm = this;

       var pixData = API.getPix();

       pixData.then(function(results){
       		console.log(results);
       		var pix = results.data.images;
       		vm.pix = pix;
       });

       });
})();