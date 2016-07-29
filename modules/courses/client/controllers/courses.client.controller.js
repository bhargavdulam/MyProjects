(function () {
  'use strict';

  angular
    .module('courses')
    .controller('CoursesController', CoursesController);

  CoursesController.$inject = ['$scope', '$state', 'courseResolve', 'Authentication'];

  function CoursesController($scope, $state, course, Authentication) {
    var vm = this;

    vm.course = course;
    vm.authentication = Authentication;
    vm.error = null;
    vm.form = {};
    vm.remove = remove;
    vm.save = save;

    // Remove existing Course
    function remove() {
      if (confirm('Are you sure you want to delete?')) {
        vm.course.$remove($state.go('courses.list'));
      }
    }

    // Save Course
    function save(isValid) {
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.courseForm');
        return false;
      }

      // TODO: move create/update logic to service
      if (vm.course._id) {
        vm.course.$update(successCallback, errorCallback);
      } else {
        vm.course.$save(successCallback, errorCallback);
      }

      function successCallback(res) {
        $state.go('courses.view', {
          courseId: res._id
        });
      }

      function errorCallback(res) {
        vm.error = res.data.message;
      }
    }
  }
})();
