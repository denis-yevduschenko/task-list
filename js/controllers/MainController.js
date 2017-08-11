(function (){
    angular
        .module("TaskApp")
        .controller('MainController', MainController);

    MainController.$inject = ['MyHttpData'];

    function MainController(MyHttpData) {
        var vm = this;

        vm.data = '';

        (function () {
            MyHttpData.getData().then(function (res) {
                vm.data = res.data;
            });
        }());

    }
})();