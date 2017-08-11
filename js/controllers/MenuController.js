(function (){
    'use strict';
    angular
        .module("TaskApp")
        .controller('MenuController', MenuController);

    MenuController.$inject = ['$window'];

    function MenuController($window) {
        var mv = this;

        mv.reloadRoute = reloadRoute;

        function reloadRoute() {
            $window.location.reload();
        }
    }
})();