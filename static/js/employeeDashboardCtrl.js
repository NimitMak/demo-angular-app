angular.module('DemoApp').
controller('EmployeeDashboardController', function($timeout, $scope, $location, $window, $routeParams, EmployeeFullApi) {
	$scope.details = {
		'full': null,
		'id': null
	}
    $scope.init = function() {
        EmployeeFullApi.query({'limit': 20,}, function(success) {
        	$scope.details.full = success.objects;
        }, function(err) {
        	console.log('error', err);
        })
    };
    $scope.init();
});
