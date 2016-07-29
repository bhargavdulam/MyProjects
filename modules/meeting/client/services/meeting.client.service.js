(function () {
  'use strict';

  angular
    .module('meeting.services')
    .factory('MeetingService', MeetingService);

  MeetingService.$inject = ['$resource'];

  function MeetingService($resource) {
    return $resource('api/meeting/:courseId', {
      courseId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
})();
