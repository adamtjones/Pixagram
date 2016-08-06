(function() {
    'use strict';

    angular
        .module('peanut')
        .controller('detailController', function(API, $stateParams) {
            var vm = this;

            var singlePic = API.getSinglePic($stateParams.picid);

            singlePic.then(function(results) {
                vm.pic = results.data;
            })

            vm.postLikes = function(image) {
                var like = API.postLikes(image._id);

                like.then(function(response) {
                    console.log(response);
                    image.likes++;
                    image.show = true;
                    $timeout(function() {
                        image.show = false;
                    }, 400);
                });

            }

        });
})();