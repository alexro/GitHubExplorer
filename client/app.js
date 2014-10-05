"use strict";

(function (angular) {
    angular.module("App", ["ui.bootstrap"]);
})(angular);

(function(angular) {
    angular.module("App").controller("PageCtrl", [
        "$scope",
        function($scope) {
            var that = this;
            that.isReady = false;
            
            $scope.$on("onFindRepositories", function (e, data) {
                that.isReady = true;
            });
        }
    ]);
})(angular);