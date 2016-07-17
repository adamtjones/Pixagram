(function() {
    'use strict';
    angular
        .module('peanut')
        .factory('API', function($http) {

            /*copied from in class example*/
            var postPix = function(data) {
                var gettingData = $http({
                    method: 'POST',
                    data: data,
                    headers: {
                        'X_CSRF_TOKEN': 'adam',
                    },
                    url: "http://instagramcloneclass.herokuapp.com/image/post",
                });

                return gettingData;
            }
            
            /*below changed from getBlogs*/
            var getPix  = function(){

                /*okay to have the following var gettingData same as above*/
                var gettingData = $http({
                  method: 'GET',
                  headers: {
                    'X_CSRF_TOKEN':'adam',
                  },
                  url: "http://instagramcloneclass.herokuapp.com/images"
                });

                return gettingData;
            }

            var getSinglePic = function(id){

                /*okay to have the following var gettingData same as above*/
                var gettingData = $http({
                    method: 'GET',
                    headers: {
                        'X_CSRF_TOKEN':'adam',
                    },
                    url: "http://instagramcloneclass.herokuapp.com/images/"+id
                });

                return gettingData;
            }
            return {
                postPix,
                getPix,
                getSinglePic,
            }
        })
})();