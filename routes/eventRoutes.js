const express = require('express');
const router = express.Router();

const {
  createEvent,
  getEventDetails,
  registerUserForEvent,
  cancelRegistration,
  listUpcomingEvents,
  getEventStats
} = require('../controllers/eventController');

router.post('/', createEvent);
router.get('/:id', getEventDetails);
router.post('/:id/register', registerUserForEvent);
router.delete('/:eventId/register/:userId', cancelRegistration);
router.get('/upcoming/list', listUpcomingEvents);
router.get('/:id/stats', getEventStats);
module.exports = router;
