'use strict';

angular.module('ruddlerApp', ['ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'ui.bootstrap', 'firebase'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/main/main.html',
                controller: 'mainController'
            })
            .otherwise({
                redirectTo: '/' 
            });

        $locationProvider.html5Mode(true);
    });