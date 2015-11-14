angular.module('DemoApp').
controller('MultiplicationController', function($scope) {
    $scope.init = function(){
        $scope.mul = function(a, b){
            $scope.result = parseFloat(a) * parseFloat(b);
            return parseFloat(a) * parseFloat(b);
        };
    };
    $scope.init();
    $scope.mul($scope.$parent.input_1, $scope.$parent.input_2);
});