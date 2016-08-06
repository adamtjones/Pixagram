(function() {
    'use strict';

    angular
        .module('peanut')
        .controller('mainController', function(API) {
            var vm = this;

            var pixData = API.getPix();

            pixData.then(function(results) {
                console.log(results);
                var pix = results.data.images;
                vm.pix = pix;
            });

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