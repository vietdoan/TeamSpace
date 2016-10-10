'use strict';
console.log(1);
angular.module('TeamSpaceApp')
  .controller('SidebarController', ['$scope', 'ngDialog', function ($scope, ngDialog) {

    var sidebarItem = [
      {
        name: 'Database'
      },
      {
        name: 'Software Engineering'
      }
    ];
    $scope.sidebarItem = sidebarItem;

    $scope.openCreateGroup = function () {
      ngDialog.open({
        template: 'views/create_group.html',
        scope: $scope,
        className: 'ngdialog-theme-default',
        controller: "SidebarController"
      });
    };

}])
  .controller('ContentController', ['$scope', function ($scope) {

}]);
