(function() {
    'use strict';
    angular
        .module('peanut')
        .controller('addEditController', function(API, $location) {
            var vm = this;
            //var form = vm.controller.form;

            vm.submit = function() {
                var postPix /* changed from postBlog*/ = API.postPix(vm.form);

                postPix.then(function(response) {
                        console.log(response);
                        //$location.path('home/' + response.data.id._id);
                        //$scope.$apply();
                    }
                )
            }

            vm.clearPost = function(){
                vm.controller.form.title = null;
                vm.controller.form.description = null;
                vm.controller.form.url = null;
            }
        });
})();