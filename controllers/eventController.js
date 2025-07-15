const { Event, User } = require('../models');
const { Op } = require('sequelize');


exports.createEvent = async (req, res) => {
  const { title, dateTime, location, capacity } = req.body;

  if (!title || !dateTime || !location || !capacity) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  if (capacity < 1 || capacity > 1000) {
    return res.status(400).json({ error: 'Capacity must be between 1 and 1000' });
  }

  try {
    const event = await Event.create({ title, dateTime, location, capacity });
    res.status(201).json({ eventId: event.id });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create event' });
  }
};

// ✅ Get full details of an event
exports.getEventDetails = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id, {
      include: [{ model: User, attributes: ['id', 'name', 'email'] }]
    });

    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }

    res.json(event);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch event' });
  }
};


exports.registerUserForEvent = async (req, res) => {
  const eventId = req.params.id;
  const { userId } = req.body;

  try {
    const event = await Event.findByPk(eventId, {
      include: User
    });

    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }

   
    if (new Date(event.dateTime) < new Date()) {
      return res.status(400).json({ error: 'Cannot register for past event' });
    }

    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const alreadyRegistered = await event.hasUser(user);
    if (alreadyRegistered) {
      return res.status(409).json({ error: 'User already registered' });
    }

    const registrationCount = await event.countUsers();
    if (registrationCount >= event.capacity) {
      return res.status(400).json({ error: 'Event is full' });
    }

    await event.addUser(user);
    return res.status(200).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};


exports.cancelRegistration = async (req, res) => {
  const { eventId, userId } = req.params;

  try {
    const event = await Event.findByPk(eventId);
    const user = await User.findByPk(userId);

    if (!event || !user) {
      return res.status(404).json({ error: 'User or event not found' });
    }

    const isRegistered = await event.hasUser(user);
    if (!isRegistered) {
      return res.status(400).json({ error: 'User is not registered for this event' });
    }

    await event.removeUser(user);
    return res.status(200).json({ message: 'Registration cancelled successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
};


exports.listUpcomingEvents = async (req, res) => {
  try {
    const now = new Date();

    const events = await Event.findAll({
      where: {
        dateTime: { [Op.gt]: now }
      },
      order: [
        ['dateTime', 'ASC'],
        ['location', 'ASC']
      ]
    });

    res.json(events);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch upcoming events' });
  }
};


exports.getEventStats = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);

    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }

    const totalRegistrations = await event.countUsers();
    const remainingCapacity = event.capacity - totalRegistrations;
    const percentageUsed = (totalRegistrations / event.capacity) * 100;

    res.json({
      eventId: event.id,
      totalRegistrations,
      remainingCapacity,
      percentageUsed: `${percentageUsed.toFixed(2)}%`
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
};
