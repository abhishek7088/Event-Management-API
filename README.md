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

### 2. User Table
![Event Creation](./assets/s2.png)

### 3. Event Creation
![Register for Event](./assets/s3.png)

### 5. Event Table
![Cancel Registration](./assets/s5.png)

### 4. Registration
![Event Details](./assets/s4.png)

### 6. Registration Table
![Upcoming Events](./assets/s6.png)

### 7. Registration Deletion
![Event Stats](./assets/s7.png)

### 8. Upcoming List
![Error - Duplicate](./assets/s8.png)

### 9. Stats
![Supabase View](./assets/s9.png)


### 1. Clone the repository

```bash
git clone https://github.com/yourusername/event-management-api.git
cd event-management-api
