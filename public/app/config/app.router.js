/*global angular*/
(function () {

    var router = function ($routeProvider) {

        
        var baseUrl = 'app/modules/';

        // Home
        $routeProvider.when('/', {
            templateUrl: baseUrl + 'home/home.html',
            controller: 'HomeController'
        });
        $routeProvider.when('/:index', {
            templateUrl: baseUrl + 'home/home.html',
            controller: 'HomeController'
        });
        
    };

    router.$inject = ['$routeProvider'];
    angular.module('app').config(router);

})();