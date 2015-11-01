var myApp = angular.module("app", ['ngResource', 'ngRoute', 'controllers', 'services', 'directives']);

myApp.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider
        .when("/", {
            templateUrl: "js/partials/home.html",
            controller: "MainController",
            title: "Home",
        }).when("/about", {
            templateUrl: "js/partials/about.html",
            controller: "AboutController",
            title: "About",
           /* resolve: AboutController.resolve*/
        }).otherwise({
            redirectTo: "/"
        });

        $locationProvider.html5Mode(true).hashPrefix('!');

    }]);

myApp.run(['$rootScope', '$location', '$route',  function($rootScope, $location) {
    $rootScope.location = $location;

    $rootScope.$on('$routeChangeSuccess', function (event, current) {
        $rootScope.title = current.title;
    });
}]);
