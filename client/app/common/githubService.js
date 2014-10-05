"use strict";

(function(angular) {
    angular.module("App").service("githubService", [
        "$rootScope",
        "$http",
        function($rootScope, $http) {
            var that = this;
            
            that.findRepositories = function findRepositories(query) {
                $http.get("https://api.github.com/search/repositories?q=" + query)
                .then(function (response) {
                    $rootScope.$broadcast("onFindRepositories", response.data);
                })
            };
            
            that.findIssues = function findIssues(repo) {
                var url = "https://api.github.com/repos/";
                url += repo.full_name + "/issues";
                $http.get(url)
                .then(function (response) {
                    $rootScope.$broadcast("onFindIssues", response.data);
                })
            }
            
            that.findForks = function findForks(repo) {
                var url = "https://api.github.com/repos/";
                url += repo.full_name + "/forks";
                $http.get(url)
                .then(function (response) {
                    $rootScope.$broadcast("onFindForks", response.data);
                })
            }
        }
    ])
})(angular);