# 🚀 PIZZA DELIVERY APPLICATION (FULL STACK PROJECT)

This repository contains a **Full Stack Pizza Delivery Web Application** built using **React, Node.js, Express, and MongoDB**.
The system allows users to **register, customize pizzas, place orders, and track order status**, while admins can **manage inventory and update order progress**.

---

## 📌 Project Overview

The application includes **two types of users:**

### 👤 User

Users can register, log in securely, create custom pizzas, and place orders using an integrated payment system.

### 🛠 Admin

Admins can manage pizza ingredients, track inventory, monitor orders, and update order status.

---

## 🍕 Features

### 1️⃣ User Authentication System

A secure authentication system is implemented for users.

**Features:**

* User registration
* Secure login authentication
* Email verification system
* Forgot password functionality
* Reset password via email
* Authorized access to user dashboard

---

### 2️⃣ User Dashboard & Pizza Customization

After logging in, users can view the available pizza options and create a **custom pizza**.

**Pizza Customization Flow:**

* Choose **Pizza Base** from 5 options
* Select **Sauce** from 5 options
* Choose a **Cheese Type**
* Add **Veggies** from multiple options
* Optionally add **Meat toppings**

---

### 3️⃣ Payment Integration

The application integrates **Razorpay Checkout (Test Mode)** for secure payments.

**Features:**

* Razorpay test account integration
* Secure checkout page
* On successful payment, the order is **placed and confirmed**
* Order details stored in the database

---

### 4️⃣ Admin Inventory Management System

The admin dashboard includes a **mini inventory management system**.

**Admin can manage:**

* Pizza Base stock
* Sauce stock
* Cheese stock
* Veggies stock
* Meat stock

The system keeps track of ingredient availability after every order.

---

### 5️⃣ Automatic Stock Update

After a user places an order:

* The required ingredients are **deducted from inventory**
* Updated stock values are displayed in the **admin dashboard**

---

### 6️⃣ Low Stock Email Notification

The system automatically monitors inventory levels.

If any ingredient goes **below the threshold value** (example: pizza base below 20):

* An **email notification is sent to the admin**
* Admin is alerted to restock ingredients

---

### 7️⃣ Order Status Management

Admins can manage the status of each order.

**Order Status Flow:**

* Order Received
* In the Kitchen
* Sent to Delivery

---

### 8️⃣ Real-Time Order Status for Users

Whenever the admin updates the order status:

* The changes are **reflected instantly in the user dashboard**
* Users can track their pizza order progress.

---

## 🛠 Technologies Used

**Frontend**

* React.js
* HTML
* CSS
* JavaScript

**Backend**

* Node.js
* Express.js

**Database**

* MongoDB
* Mongoose

**Authentication**

* JWT (JSON Web Token)
* Email Verification

**Payment Gateway**

* Razorpay (Test Mode)

**Other Tools**

* Nodemailer (Email Notifications)
* dotenv (Environment Variables)

---

## ▶️ How to Run

1. Install **Node.js and MongoDB**

2. Install dependencies:

```
npm install
```

3. Start the backend server:

```
npm start
```

4. Run the React frontend:

```
npm start
```

Open the application in the browser:

```
http://localhost:3000
```

---

## 🎯 Project Objective

The goal of this project is to build a **complete full stack pizza ordering system** that includes:

* Secure authentication
* Custom pizza builder
* Online payment integration
* Inventory management
* Order tracking system
* Automated email notifications

---

#react #nodejs #mongodb #razorpay #fullstack #webdevelopment# OIBSIP Internship-Web Development and Designing 
