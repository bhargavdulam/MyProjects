'use strict';

/**
 * Module dependencies
 */
var coursesPolicy = require('../policies/courses.server.policy'),
  meeting = require('../controllers/meeting.server.controller');

module.exports = function (app) {
  // Articles collection routes
  app.route('/api/meeting').all(coursesPolicy.isAllowed)
    .get(meeting.list)
    .post(meeting.create);

  // Single article routes
  app.route('/api/meeting/:courseId').all(coursesPolicy.isAllowed)
    .get(meeting.read)
    .put(meeting.update)
    .delete(meeting.delete);

  // Finish by binding the article middleware
  app.param('courseId', meeting.courseByID);
};
