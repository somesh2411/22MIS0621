````md
# Backend Hiring Evaluation Submission

## Candidate Details

- Name: Somesh S
- Roll Number: 22MIS0621
- Track: Backend

---

# Repository Structure

```bash
22MIS0621/
│
├── logging_middleware/
├── vehicle_maintenance_scheduler/
├── notification_app_be/
├── notification_system_design.md
└── README.md
````

---

# 1. Logging Middleware

This folder contains a reusable logging middleware built using TypeScript.
It is designed to support structured backend logging and modular integration.

## Main Files

* `logger.ts` → reusable logging function
* `config.ts` → configuration setup
* `index.ts` → logger testing entry point

---

# 2. Vehicle Maintenance Scheduler

This microservice is built using Express and TypeScript.

The project solves the vehicle scheduling problem using Dynamic Programming (0/1 Knapsack approach) to maximize impact within available mechanic hours.

## Features

* REST APIs
* Modular backend structure
* Optimization logic
* TypeScript implementation

## Main Folders

* `controllers/` → request handling
* `routes/` → API routes
* `services/` → business logic
* `utils/` → optimization algorithm

---

# 3. Notification Backend Application

This folder contains a basic backend structure for a notification management system.

## Features

* Notification APIs
* Modular backend architecture
* Express + TypeScript setup

## Main Folders

* `controllers/`
* `routes/`
* `services/`
* `middleware/`
* `models/`

---

# 4. Notification System Design

The `notification_system_design.md` file contains:

* API Design
* Database Design
* Query Optimization
* Scaling Strategy
* Notification Delivery Design
* Priority Inbox Design

---

# Technologies Used

* Node.js
* Express.js
* TypeScript
* REST APIs
* Dynamic Programming

---

# Run Project

## Install Dependencies

```bash
npm install
```

## Run Development Server

```bash
npm run dev
```

```
```
