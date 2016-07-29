(function (app) {
  'use strict';

  app.registerModule('meeting', ['core']);// The core module is required for special route handling; see /core/client/config/core.client.routes
  app.registerModule('meeting.services');
  app.registerModule('meeting.routes', ['ui.router', 'meeting.services']);
})(ApplicationConfiguration);
