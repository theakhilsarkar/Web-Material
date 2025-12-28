# 🔐 Passport.js Local Authentication - Complete Guide

A complete implementation of **local email/password authentication** using **Node.js**, **Express**, **Passport.js**, and **MongoDB**.

---

## 📑 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Code Explanation](#code-explanation)
- [How It Works](#how-it-works)

---

## ✨ Features

- ✅ User registration with password hashing (bcrypt)
- ✅ User login with session management
- ✅ Protected routes with authentication middleware
- ✅ Session persistence in MongoDB (using connect-mongo)
- ✅ Secure cookie configuration
- ✅ User logout functionality
- ✅ Proper error handling and logging

---

## 📁 Project Structure

```
backend/
├── config/
│   ├── db.js                 # MongoDB connection
│   └── passport.js           # Passport LocalStrategy configuration
├── controllers/
│   └── AuthController.js     # Authentication request handlers
├── middlewares/
│   └── AuthMiddleware.js     # Route protection middleware
├── models/
│   └── AuthModel.js          # User schema
├── routes/
│   └── AuthRoutes.js         # Authentication routes
├── package.json              # Dependencies
└── server.js                 # Main server file
```

---

## 🔧 Prerequisites

Before you begin, ensure you have:

- **Node.js** (v14 or higher) installed
- **MongoDB** installed and running locally
- **npm** or **yarn** package manager

---

## 📥 Installation

### Step 1: Clone or Create Project

```bash
mkdir passport-auth-backend
cd passport-auth-backend
```

### Step 2: Initialize Package

```bash
npm init -y
```

### Step 3: Install Dependencies

```bash
npm install express passport passport-local express-session mongoose bcrypt cookie-parser connect-mongo
```

### Step 4: Install Development Dependencies

```bash
npm install --save-dev nodemon
```

### Step 5: Update package.json

Add these scripts to your `package.json`:

```json
{
  "name": "backend",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "bcrypt": "^6.0.0",
    "connect-mongo": "^5.1.0",
    "cookie-parser": "^1.4.7",
    "express": "^5.2.1",
    "express-session": "^1.18.2",
    "mongoose": "^9.0.2",
    "passport": "^0.7.0",
    "passport-local": "^1.0.0"
  },
  "devDependencies": {
    "nodemon": "^3.1.11"
  }
}
```

---

## ⚙️ Configuration

### 1️⃣ Database Configuration (`config/db.js`)

```javascript
import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/passportDB");
        console.log("mongodb connected successfully")
    } catch (err) {
        console.log("mongodb connection failed  ", err);
    }
}
```

**What it does:**
- Connects to MongoDB database named `passportDB`
- Uses localhost connection (for local development)
- Logs success/failure messages

---

### 2️⃣ User Model (`models/AuthModel.js`)

```javascript
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
}, {
    timestamps: true
});

export const Users = mongoose.model("users", userSchema);
```

**What it does:**
- Defines user schema with name, email, and password
- Automatically adds `createdAt` and `updatedAt` timestamps
- Creates a MongoDB collection named "users"

---

### 3️⃣ Passport Configuration (`config/passport.js`)

```javascript
import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import bcrypt from 'bcrypt'
import { Users } from '../models/AuthModel.js'

// Configure LocalStrategy for email/password authentication
const localStrategy = new LocalStrategy(
    { usernameField: "email" },  // Use email instead of username
    async (email, password, done) => {
        try {
            // Find user by email
            const user = await Users.findOne({ email });
            if (!user) {
                console.log('User not found:', email);
                return done(null, false, { message: 'User not found' });
            }
            
            // Compare password with hashed password
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                console.log('Password mismatch for user:', email);
                return done(null, false, { message: 'Incorrect password' });
            }
            
            // Authentication successful
            return done(null, user);
        } catch (err) {
            console.error('Error in LocalStrategy:', err);
            return done(err);
        }
    }
);

// Register the strategy
passport.use(localStrategy);

// Serialize user (save user ID to session)
passport.serializeUser((user, done) => {
    done(null, user._id);
});

// Deserialize user (retrieve user from session ID)
passport.deserializeUser(async (id, done) => {
    const user = await Users.findById(id);
    done(null, user);
});
```

**What it does:**
- **LocalStrategy**: Verifies email and password during login
- **serializeUser**: Stores only user ID in session (saves memory)
- **deserializeUser**: Fetches full user object on each request using ID from session

**Important:** Always use `await` with database queries!

---

### 4️⃣ Authentication Controllers (`controllers/AuthController.js`)

```javascript
import bcrypt from "bcrypt";
import { Users } from "../models/AuthModel.js";

// User Registration
export const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Hash password with 10 salt rounds
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create user in database
    await Users.create({
      name,
      email,
      password: hashedPassword,
    });
    
    res.json({ message: "user registered !" });
  } catch (err) {
    res.json({ message: "user not registered !" });
  }
};

// User Login
export const signIn = (req, res) => {
  // req.user is automatically added by Passport after successful authentication
  res.json({ message: "Login Success !", user: req.user });
};

// User Logout
export const signOut = (req, res) => {
  req.logout(() => {
    res.json({ message: "Logout success !" });
  });
};

// Protected Dashboard
export const dashboard = (req, res) => {
  // req.user is available because user is authenticated
  res.json({ message: "dashboard accessed !", user: req.user });
};
```

**What it does:**
- **signUp**: Creates new user with hashed password
- **signIn**: Returns user data after Passport authentication
- **signOut**: Destroys session and logs out user
- **dashboard**: Returns user data for authenticated users

---

### 5️⃣ Authentication Middleware (`middlewares/AuthMiddleware.js`)

```javascript
export const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {  // Passport provides this method
        return next();             // User is logged in, allow access
    }
    res.status(403).json({ message: "Unauthorized! Please login first." });
}
```

**What it does:**
- Checks if user is logged in using Passport's `req.isAuthenticated()`
- Allows access to route if authenticated
- Returns 403 Forbidden if not authenticated

---

### 6️⃣ Authentication Routes (`routes/AuthRoutes.js`)

```javascript
import express from 'express'
import passport from 'passport'
import { signIn, signOut, signUp, dashboard } from '../controllers/AuthController.js'
import { isAuthenticated } from '../middlewares/AuthMiddleware.js'

const router = express.Router();

// Public routes
router.post("/signup", signUp);
router.post("/signin", passport.authenticate("local"), signIn);

// Protected routes
router.get("/dashboard", isAuthenticated, dashboard);

// Logout route
router.get("/signout", signOut);

// Default route
router.get("/", (req, res) => {
    res.json({ message: "Default Route - /" });
})

export default router;
```

**What it does:**
- Defines all authentication-related routes
- `/signup`: Public route for registration
- `/signin`: Uses Passport authentication middleware
- `/dashboard`: Protected route (requires authentication)
- `/signout`: Destroys user session

---

### 7️⃣ Main Server (`server.js`)

```javascript
import express from 'express'
import session from 'express-session'
import passport from 'passport'
import cookieParser from 'cookie-parser'
import './config/passport.js'
import { connectDB } from './config/db.js'
import authRoutes from './routes/AuthRoutes.js'
import MongoStore from 'connect-mongo'

const app = express();
connectDB();

// Middleware
app.use(express.json());
app.use(cookieParser());

// Session configuration
app.use(session({
    secret: "secret-key-181920",      // Secret key for signing cookies
    resave: false,                     // Don't save session if unmodified
    saveUninitialized: false,          // Don't create session until something stored
    store: MongoStore.create({
      mongoUrl: "mongodb://localhost:27017/passportDB"
    }),
    cookie: {
        maxAge: 1 * 60 * 60 * 1000    // 1 hour (in milliseconds)
    }   
}))

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/", authRoutes);

// Start server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
```

**What it does:**
- Sets up Express server
- Connects to MongoDB
- Configures session middleware with MongoStore (persists sessions in DB)
- Initializes Passport
- Registers routes
- Listens on port 3000

**Important Order:**
1. Body parser (`express.json()`)
2. Session middleware
3. Passport initialization
4. Passport session
5. Routes

## 🔄 How It Works

### Registration Flow

```
1. User sends email & password
2. Server hashes password with bcrypt
3. User saved to MongoDB
4. Success message returned
```

### Login Flow

```
1. User sends email & password
2. passport.authenticate() middleware runs
3. LocalStrategy verifies credentials:
   - Find user by email
   - Compare password hash
4. If valid:
   - serializeUser() saves user ID to session
   - Session stored in MongoDB
   - Cookie sent to client
   - req.user populated with user object
5. signIn controller returns success
```

### Protected Route Access

```
1. User sends request with session cookie
2. Express loads session from MongoDB
3. Passport deserializeUser() runs:
   - Gets user ID from session
   - Fetches full user from database
   - Attaches to req.user
4. isAuthenticated middleware checks req.isAuthenticated()
5. If true: Allow access
   If false: Return 403 Forbidden
```

### Logout Flow

```
1. User sends logout request
2. req.logout() destroys session
3. Session removed from MongoDB
4. Cookie cleared
5. Success message returned
```

