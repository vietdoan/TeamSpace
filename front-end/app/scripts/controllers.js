'use strict';

var sidebarItem = [
  {
    name: 'Software Engineering',
    id: 0,
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
    name: 'Database',
    id: 1,
    tasks: [
      {
        desctiption: 'Probability, statistics chapter 3'
          },
      {
        desctiption: 'Probability, statistics chapter 4'
          },
      {
        desctiption: 'Probability, statistics chapter 5'
          }
        ]
      }
    ];
var user = {
  name: "vietdoan"
};
var id = 0;

/************************************************************************/

angular.module('TeamSpaceApp')
  .controller('SidebarController', ['$scope', '$rootScope', 'ngDialog', function ($scope, $rootScope, ngDialog) {

    var avatar = user.name.charAt(0);
    avatar = avatar.toUpperCase() + ".png";

    $scope.sidebarItem = sidebarItem;
    $scope.user = user;
    $scope.avatar = avatar;
    $scope.openCreateGroup = function () {
      ngDialog.open({
        template: 'views/create_group.html',
        scope: $scope,
        className: 'ngdialog-theme-default',
        controller: 'CreateGroupController'
      });
    };

    $scope.select = function (index) {
      $rootScope.$broadcast('change-content', {
        id: index
      });
    };

      }])
  .controller('ContentController', ['$scope', '$rootScope', 'ngDialog', function ($scope, $rootScope, ngDialog) {
    $scope.tasks = sidebarItem[0].tasks;
    $scope.$on('change-content', function (event, args) {

      id = args.id;
      $scope.tasks = sidebarItem[id].tasks;
    });
    $scope.openAddTasks = function () {
      ngDialog.open({
        template: 'views/add_task.html',
        scope: $scope,
        className: 'ngdialog-theme-default',
        controller: 'TasksController'
      });
    };
}])
  .controller('CreateGroupController', ['$scope', '$rootScope', 'ngDialog', function ($scope, $rootScope, ngDialog) {

    $scope.group = {
      id: sidebarItem.length,
      tasks: []
    };
    $scope.doAddNewGroup = function () {
      $scope.sidebarItem.push($scope.group);
      ngDialog.close();
    };

}])
  .controller('TasksController', ['$scope', '$rootScope', 'ngDialog', function ($scope, $rootScope, ngDialog) {

    $scope.task = {
      desctiption: ''
    };
    $scope.doAddNewTask = function () {
      console.log(1);
      $scope.sidebarItemp[id].tasks.push($scope.task);
      ngDialog.close();
    };

}]);
