const User = require('./Users');
const Event = require('./Events');
const Registration = require('./Registration');

User.belongsToMany(Event, { through: Registration });
Event.belongsToMany(User, { through: Registration });

module.exports = { User, Event, Registration };