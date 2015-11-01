var directives = angular.module('directives', []);

directives.directive('gravatarImage', function () {
    return {
        restrict: "EAC",
        link: function (scope, elm, attrs) {
        }
    };
});
