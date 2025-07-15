const express = require('express');
const sequelize = require('./config/db');
const eventRoutes = require('./routes/eventRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());
const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);
app.use('/events', eventRoutes);

sequelize.sync({ alter: true }).then(() => {
  console.log(' Database synced');
  app.listen(3000, () => console.log(' Server on http://localhost:3000'));
}).catch(err => console.error(' DB Error:', err));
