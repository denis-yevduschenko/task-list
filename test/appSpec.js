describe('Main Controller', function () {
    var scope, ctrl, httpBackend;

    beforeEach(module('TaskApp'));

    beforeEach(inject(function ($rootScope, $httpBackend, $controller) {
        httpBackend = $httpBackend;

        scope = $rootScope.$new();

        createController = function() {
            return $controller('MainController', {
                '$scope': scope
            });
        };
    }));

    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it('get data', function () {
        var ctrl = createController();

        httpBackend.expect('GET', '/data/data.json')
            .respond({
                "id": 1,
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
                "project_id": 0
            });

        httpBackend.flush();

        expect(ctrl.data.id).toEqual(1);
    });

});

