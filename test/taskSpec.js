describe('Task Controller', function () {
    var scope, ctrl, httpBackend;

    beforeEach(module('TaskApp'));

    beforeEach(inject(function ($rootScope, $httpBackend, $controller) {
        httpBackend = $httpBackend;

        scope = $rootScope.$new();

        createController = function() {
            return $controller('TaskController', {
                '$scope': scope
            });
        };


    }));


    it('show edit block after click', function () {
        var ctrl = createController();

        scope.editTask();

        expect(ctrl.showEditBlock).toBeTruthy();
    });

    it('/task/:taskId GET', function () {
        var ctrl = createController();

        inject(function($route) {

            expect($route.routes['/task/:taskId'].controller).toBe('TaskController');

        });

    });

    it('/ GET', function () {
        inject(function($route) {
            expect($route.routes['/'].controller).toBe('MainController');
        });

    });

    it('/wrong GET otherwise redirect to', function () {
        inject(function($route) {
            // otherwise redirect to
            expect($route.routes[null].redirectTo).toEqual('/')
        });

    });

    it('getTask', function () {

        var ctrl = createController();

        var arr = [{
                "id": 1,
                "name": "Today_task1",
                "creation_date": "2015-04-21T06:50:21",
                "due_date": "2015-04-22T23:59:00",
                "start_date": "2015-04-21T00:00:01",
                "is_completed": false,
                "is_archived": false,
                "estimated_effort": 5.5,
                "actual_effort": 3.3,
                "physical_progress": 60,
                "obj_status": "active",
                "description": "Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit",
                "project_id": 0
            },
            {
                "id": 11,
                "name": "Today_task11",
                "creation_date": "2015-04-21T06:50:21",
                "due_date": "2015-04-22T23:59:00",
                "start_date": "2015-04-21T00:00:01",
                "is_completed": false,
                "is_archived": false,
                "estimated_effort": 5.5,
                "actual_effort": 3.3,
                "physical_progress": 60,
                "obj_status": "active",
                "description": "Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit",
                "project_id": 0,
                "tags": [
                    "meeting"
                ]
            },
            {
                "id": 12,
                "name": "Today_task12",
                "creation_date": "2015-04-21T06:50:21",
                "due_date": "2015-04-22T23:59:00",
                "start_date": "2015-04-21T00:00:01",
                "is_completed": false,
                "is_archived": false,
                "estimated_effort": 5.5,
                "actual_effort": 3.3,
                "physical_progress": 60,
                "obj_status": "active",
                "description": "Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit",
                "project_id": 0
            }];

        ctrl.getTask(arr, 11);

        expect(ctrl.concreteTask.id).toEqual(11);
    });
});
