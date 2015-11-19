var employeeDashboardApp = angular.module('DemoApp');

employeeDashboardApp.factory('EmployeeFullApi', function($resource) {
    return $resource('http://localhost:8000/api/v2/employee_full/:id/', {
        id: '@id'
    }, {
        'query': {
            method: 'GET',
            isArray: false
        }
    });
});
