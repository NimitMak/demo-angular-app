angular.module('DemoApp').
controller('SubtractionController', function($scope) {
    $scope.init = function(){
        $scope.sub = function(a, b){
            $scope.result = parseFloat(a) - parseFloat(b);
            return parseFloat(a) - parseFloat(b);
        };
    };
    $scope.init();
    $scope.sub($scope.$parent.input_1, $scope.$parent.input_2);
});