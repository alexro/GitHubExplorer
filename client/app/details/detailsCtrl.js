"use strict";

(function(angular) {
    angular.module("App").controller("DetailsCtrl", [
        "$scope",
        "githubService",
        function($scope, githubService) {
            
            var that = this;
            that.repo = null;
            
            $scope.$on("onSelectRepository", function (e, data) {
                that.repo = data;
            });
        }
    ]);
})(angular);