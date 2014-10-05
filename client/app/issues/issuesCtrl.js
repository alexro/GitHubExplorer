"use strict";

(function(angular) {
    angular.module("App").controller("IssuesCtrl", [
        "$scope",
        "githubService",
        function($scope, githubService) {
            
            var that = this;
            that.repo = {};
            that.issues = [];
            
            that.getHeight = function () {
                var height = that.issues.length * 35 + 50;
                return height < 300 ? height : 300;
            }
            
            $scope.$on("onSelectRepository", function (e, data) {
                that.repo = data;
                that.issues = [];
                githubService.findIssues(that.repo);
            });
            
            $scope.$on("onFindIssues", function (e, data) {
                that.issues = data;
            });
        }
    ]);
})(angular);