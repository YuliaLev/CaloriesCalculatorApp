'use strict';

var app = angular.module('myApp', [
  'ngRoute'
]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/main',{
            templateUrl: "Views/main.html",
            controller: "mainController"
        })
        .when('/statistics',{
            templateUrl: "Views/statistics.html",
            controller: "statisticsController"
        })
        .otherwise({redirectTo: '/main'});
}]);


