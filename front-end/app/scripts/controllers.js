'use strict';

var sidebarItem = [
  {
    name: 'Software Engineering',
    tasks: [
      {
        desctiption: 'Code+demo final presentation'
          },
      {
        desctiption: 'Type up design guide'
          },
      {
        desctiption: 'Tutorials Adobe Illustrator'
          }
        ]
      },
  {
    name: 'Database'
      }
    ];
var user = {
  name: "vietdoan"
};

/************************************************************************/

angular.module('TeamSpaceApp')
  .controller('SidebarController', ['$scope', 'ngDialog', function ($scope, ngDialog) {

    var avatar = user.name.charAt(0);
    avatar = avatar.toUpperCase() + ".png";
    console.log(avatar);
    $scope.sidebarItem = sidebarItem;
    $scope.user = user;
    $scope.avatar = avatar;
    $scope.openCreateGroup = function () {
      ngDialog.open({
        template: 'views/create_group.html',
        scope: $scope,
        className: 'ngdialog-theme-default',
        controller: "CreateGroupController"
      });
    };



}])
  .controller('ContentController', ['$scope', function ($scope) {
    $scope.tasks = sidebarItem[0].tasks;
}])
  .controller('CreateGroupController', ['$scope', 'ngDialog', function ($scope, ngDialog) {

    $scope.group = {};
    $scope.doAddNewGroup = function () {
      $scope.sidebarItem.push($scope.group);
      ngDialog.close();

    };

}]);
