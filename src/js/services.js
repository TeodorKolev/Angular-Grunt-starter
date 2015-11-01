var services = angular.module('services', ['ngResource']);

var AboutService = function ($http) {
    return {
        getAboutData: function () {
            var promise = $http({
                method: 'GET',
                url: 'testData.json'
            }).then(function (response) {
                return response.data;
            });
            return promise;
        }
    }
};
services.factory('AboutService', AboutService);

