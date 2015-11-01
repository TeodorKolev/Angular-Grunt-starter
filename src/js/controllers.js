var controllers = angular.module("controllers", []);

controllers.controller("MainController", [function ($scope, $rootScope) {

}]);

controllers.controller("AboutController", [function ($scope, $rootScope) {

}]);

/*var AboutController = function($rootScope, $scope, AboutService, about) {
    $scope.data = about;
};

AboutController.resolve = {
    about: function ($rootScope, AboutService) {
        return "wee";
    }
};

controllers.controller('AboutController', ['$rootScope', '$scope', 'AboutService', 'about',  AboutController]);*/
