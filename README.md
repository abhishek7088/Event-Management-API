# 🎉 Event Management API

A RESTful API built with **Node.js**, **Express**, and **PostgreSQL (Supabase)** for managing events, user registrations, and real-time event stats.

---

## 🚀 Features

- Create and manage events (with title, date, location, capacity)
- Register and cancel event participation
- Enforce business rules: no duplicates, max capacity, no past events
- View upcoming events with custom sorting
- View event stats (total, remaining, percentage filled)

---

## 📦 Tech Stack

- **Node.js + Express** – REST API
- **PostgreSQL (Supabase)** – Cloud-hosted relational database
- **Sequelize** – ORM for model relationships
- **Dotenv** – Manage environment variables

---
## 📁 Project Structure
.
├── app.js
├── .env
├── config/
│ └── db.js
├── controllers/
│ ├── eventController.js
│ └── userController.js
├── models/
│ ├── Events.js
│ ├── Users.js
│ ├── Registration.js
│ └── index.js
├── routes/
│ ├── eventRoutes.js
│ └── userRoutes.js
└── README.md

## ⚙️ Setup Instructions
npm install


## 📸 Screenshots

### 1. User Registration
![User Registration](./assets/s1.png)

### 2. Event Creation
![Event Creation](./assets/s2.png)

### 3. Register for Event
![Register for Event](./assets/s3.png)

### 4. View Event Details
![Event Details](./assets/s4.png)

### 5. Cancel Registration
![Cancel Registration](./assets/s5.png)

### 6. List Upcoming Events
![Upcoming Events](./assets/s6.png)

### 7. Event Statistics
![Event Stats](./assets/s7.png)

### 8. Error Handling (Duplicate Registration)
![Error - Duplicate](./assets/s8.png)

### 9. Database in Supabase
![Supabase View](./assets/s9.png)


### 1. Clone the repository

```bash
git clone https://github.com/yourusername/event-management-api.git
cd event-management-api
