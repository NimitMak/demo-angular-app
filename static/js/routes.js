angular.module('DemoApp').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when(
            "/", {
                templateUrl: "partials/add.html",
                controller: "ArithmeticController",
                reloadOnSearch: false
            }
        )
        .when(
            "/add", {
                templateUrl: "partials/add.html",
                controller: "AdditionController",
                reloadOnSearch: false
            }
        )
        .when(
            "/sub", {
                templateUrl: "partials/sub.html",
                controller: "SubtractionController",
                reloadOnSearch: false
            }
        )
        .when(
            "/mul", {
                templateUrl: "partials/mul.html",
                controller: "MultiplicationController",
                reloadOnSearch: false
            }
        )
        .when(
            "/div", {
                templateUrl: "partials/div.html",
                controller: "DivisionController",
                reloadOnSearch: false
            }
        )
        .when(
            "/minesweeper", {
                templateUrl: "partials/minesweeper.html",
                controller: "MineSweeperController",
                reloadOnSearch: false
            }
        )
}]);
