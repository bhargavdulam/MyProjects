(function () {
  'use strict';

  angular
    .module('meeting')
    .controller('MeetingController', MeetingController);

  MeetingController.$inject = ['$scope', '$state', 'courseResolve', 'Authentication'];

  function MeetingController($scope, $state, course, Authentication) {
    var vm = this;

    vm.course = course;
    vm.authentication = Authentication;
    vm.error = null;
    vm.form = {};
    vm.remove = remove;
    vm.save = save;

  init();

    function init() {
      // If user is not signed in then redirect back home
      if (!Authentication.user) {
        $state.go('home');
      }

      // Make sure the Socket is connected
      if (!Socket.socket) {
        Socket.connect();
      }

      // // Add an event listener to the 'chatMessage' event
      // Socket.on('chatMessage', function (message) {
      //   vm.messages.unshift(message);
      // });

      // // Remove the event listener when the controller instance is destroyed
      // $scope.$on('$destroy', function () {
      //   Socket.removeListener('chatMessage');
      // });
    }

    // Create a controller method for sending messages
    function sendMessage() {
      // Create a new message object
      var message = {
        text: vm.messageText
      };



      // TODO: move create/update logic to service
      if (vm.course._id) {
        vm.course.$update(successCallback, errorCallback);
      } else {
        vm.course.$save(successCallback, errorCallback);
      }

      function successCallback(res) {
        $state.go('meeting.view', {
          courseId: res._id
        });
      }

      function errorCallback(res) {
        vm.error = res.data.message;
      }
    }
  }
})();
