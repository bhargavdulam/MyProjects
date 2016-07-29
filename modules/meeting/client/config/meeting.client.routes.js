(function () {
  'use strict';

  angular
    .module('meeting.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('meeting', {
        abstract: true,
        url: '/meetings',
        template: '<ui-view/>'
      }) 
      .state('meeting.view', {
        url: '/:courseId',
        templateUrl: 'modules/meeting/client/views/coursemeeting.html',
        controller: 'MeetingController',
        controllerAs: 'vm',
        resolve: {
          courseResolve: getCourse
        },
        data:{
          pageTitle: 'Course {{ courseResolve.title }}',
          roles: ['user', 'admin'],
        }
      })
      .state('meetinglist', {
        url: '/meetings',
        templateUrl: 'modules/meeting/client/views/meetingpage.html',
        controller: 'MeetingListController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'Course Meeting List'
        }
      });
      
      // .state('meetinglist1', {
      //   url: '/:courseId/join',
      //   templateUrl: 'modules/meeting/client/views/meetingpage.html',
      //   controller: 'MeetingController',
      //   controllerAs: 'vm',
      //   resolve: {
      //     courseResolve: getCourse
      //   },
      //   data: {
      //     roles: ['user', 'admin'],
      //     pageTitle: 'Join meeting  {{ courseResolve.title }}'
      //   }
      // });
  }

  getCourse.$inject = ['$stateParams', 'MeetingService'];

  function getCourse($stateParams, MeetingService) {
    return MeetingService.get({
      courseId: $stateParams.courseId
    }).$promise;
  }

})();
