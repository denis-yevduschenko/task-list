(function() {
    'use strict';
    angular
        .module("TaskApp")
        .directive('topMenu', topMenu);

    function topMenu() {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'js/directives/topMenu.html',
            link: function (scope, element, attr) {}
        };
    }
})();