angular.module('DemoApp').
controller('DivisionController', function($scope) {
    $scope.init = function() {
        $scope.div = function(a, b) {
            if (b === 0) {
                $scope.result = 'Number Not Divisible by 0. Try Again!';
            } else {
                $scope.result = parseFloat(a) / parseFloat(b);
            }
        };
    };
    $scope.init();
    $scope.div($scope.$parent.input_1, $scope.$parent.input_2);
});