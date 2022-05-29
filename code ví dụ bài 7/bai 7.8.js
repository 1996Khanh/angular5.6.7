var app = angular.module('single-page-app',['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home.html'
        })
        .when('/about', {
            templateUrl: 'about.html'
        })
        .when('/tutorial', {
            templateUrl: 'tutorial.html'
        });
});
app.controller('SPAController', function($scope) {
    $scope.message = "Single Page Application";
});