angular.module('DemoApp').
controller('AdditionController', function($scope) {
    $scope.init = function(){
        $scope.add = function(a, b){
            $scope.result = parseFloat(a) + parseFloat(b);
            return parseFloat(a) + parseFloat(b);
        };
    };
    $scope.init();
    $scope.add($scope.$parent.input_1, $scope.$parent.input_2);
});