(function() {
    'use strict';
    angular
        .module('peanut', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider) {
            
            //maybe don't need this:
            $urlRouterProvider.otherwise('/');

            //def need these:
            $stateProvider
            .state('home', {
                    url: '/',
                    templateUrl: '/partials/home.html',
                    controller: 'mainController',
                    controllerAs: 'controller'
            })
            .state('detail', {
                url: '/home/picid',
                templateUrl: '/partials/detail.html',
                controller: 'detailController',
                controllerAs: 'controller'
            })
            .state('addEdit', {
                url: '/addEdit',
                templateUrl: '/partials/addEdit.html',
                controller: 'addEditController',
                controllerAs: 'controller'
            });

        });
})();
