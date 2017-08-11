(function() {
    'use strict';
    angular
        .module("TaskApp", ['ngRoute', 'MyHttp'])
        .config(function($routeProvider){
            $routeProvider
                .when('/', {
                    templateUrl: 'templates/home.html',
                    controller: 'MainController'
                })
                .when('/task/:taskId', {
                    templateUrl: 'templates/task.html',
                    controller: 'TaskController'
                })
                .otherwise({
                    redirectTo: '/',
                    controller: 'MainController'
                });
        });
})();
