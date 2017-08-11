(function (){
    angular
        .module("TaskApp")
        .controller('TaskController', TaskController);

    TaskController.$inject = ['$scope', '$routeParams', 'MyHttpData'];

    function TaskController($scope, $routeParams, MyHttpData) {
        var vm = this;

        vm.showEditBlock = false;
        vm.concreteTask = '';

        $scope.updateTask = function updateTask() {
            MyHttpData.putTask(vm.concreteTask)
                .then(function successCallback(response) {
                    alert("Task is updated!");
                }, function errorCallback(response) {
                    alert("Something is wrong! /*Tip: Change url on correct.*/");
                })
        };

        $scope.editTask = function editTask() {
            vm.showEditBlock = !vm.showEditBlock;
        };

        (function () {
            MyHttpData.getData().then(function (res) {
                vm.getTask(res.data, $routeParams.taskId);
            });
        }());

        vm.getTask = function getTask(arr, taskId) {
            for(var i = 0; i < arr.length; i++){
                if (arr[i].id == taskId){
                    vm.concreteTask = arr[i];
                }
            }
        }


    }
})();