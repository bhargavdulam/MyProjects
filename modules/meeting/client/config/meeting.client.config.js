(function () {
  'use strict';

  angular
    .module('meeting')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(Menus) {
    // Set top bar menu items
    Menus.addMenuItem('topbar', {
      title: 'Meeting',
      state: 'meetinglist'
    });
  }
})();
