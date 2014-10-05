"use strict";

(function(angular) {
    angular.module("App").controller("ResultsCtrl", [
        "$rootScope",
        "$scope",
        "githubService",
        function($rootScope, $scope, githubService) {

            var that = this;
            that.isFirst = true;
            that.currentItem = null;
            that.items = [];

            that.isActive = function(item) {
                var result = that.isFirst || item.id === that.currentItem.id;
                that.isFirst = false;
                return result;
            };

            that.selectRepository = function(item) {
                that.currentItem = item;
                $rootScope.$broadcast("onSelectRepository", item);
            };

            $scope.$on("onFindRepositories", function(e, data) {
                that.selectRepository(data.items[0]);
                that.items = data.items;
            });
        }
    ]);
})(angular);