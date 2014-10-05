"use strict";

(function(angular) {
    angular.module("App").controller("SearchCtrl", [
        "$scope",
        "githubService",
        function($scope, githubService) {
            var that = this;
            
            that.findRepository = function search() {
                githubService.findRepositories(that.query ? that.query : "bootstrap");
            }
        }
    ]);
})(angular);