'use strict';

angular.module('TeamSpaceApp')
  .controller('SidebarController', ['$scope', 'ngDialog', function ($scope, ngDialog) {

    var sidebarItem = [
      {
        name: 'Software Engineering',
        task: [
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
        controller: "SidebarController"
      });
    };

}])
  .controller('ContentController', ['$scope', function ($scope) {

}]);
