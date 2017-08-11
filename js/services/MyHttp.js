(function() {
    'use strict';
    angular
        .module('MyHttp', [])
        .factory('MyHttpData', MyHttpData);

    MyHttpData.$inject = ['$http'];

    function MyHttpData($http) {
        var items = {};

        items.getData = function () {
            return $http.get('/data/data.json');
        };

        items.putTask = function (task) {
            return $http.put('/api/update', task);
        };

        return items;
    }
})();