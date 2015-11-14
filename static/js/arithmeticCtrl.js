angular.module('DemoApp').
controller('ArithmeticController', function($scope, $window) {
    $scope.input_1 = 0;
    $scope.input_2 = 0;
    $scope.divError = false;
    console.log($window.location);
});
