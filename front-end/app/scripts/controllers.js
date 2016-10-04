'use strict';

angular.module('confusionApp')
.controller('BarsideController', ['$scope', function ($scope) {
 $scope.openCreateGroup = function () {
        ngDialog.open({ template: 'views/create_group.html', scope: $scope, className: 'ngdialog-theme-default', controller:"GroupController" });
    };
}])
;
