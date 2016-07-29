(function () {
  'use strict';

  angular
    .module('meeting')
    .controller('MeetingListController', MeetingListController);

  MeetingListController.$inject = ['MeetingService'];

  function MeetingListController(MeetingService) {
    var vm = this;

    vm.courses = MeetingService.query();
   
  }
})();
