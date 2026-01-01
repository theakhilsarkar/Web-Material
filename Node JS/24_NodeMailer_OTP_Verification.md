# OTP Verification System using Node.js, Express & Nodemailer

## Project Overview

This project implements **OTP-based email verification** using:

* Node.js
* Express
* Nodemailer
* MongoDB (optional but recommended)
* Environment variables (`.env`)

OTP is generated on the server, sent to the user’s email, stored temporarily, and verified using an API.

---

## Why OTP Verification?

OTP (One Time Password) is used for:

* Email verification
* Login verification
* Password reset
* Two-factor authentication (2FA)

It improves **security** by verifying ownership of an email.

---

## Folder Structure (Industry Standard)

```
otp-verification/
│
├── controllers/
│   └── otp.controller.js       # OTP logic (send & verify)
│
├── routes/
│   └── otp.routes.js           # OTP APIs
│
├── services/
│   └── mail.service.js         # Nodemailer setup
│
├── models/
│   └── Otp.model.js            # OTP schema (MongoDB)
│
├── config/
│   └── db.js                   # MongoDB connection
│
├── utils/
│   └── generateOtp.js          # OTP generator function
│
├── server.js                   # App entry point
├── .env                        # Secret credentials
├── package.json
```

---

## Step 1: Environment Variables (.env)

### Why use `.env`?

* Protects sensitive data
* Keeps credentials out of code
* Required for production

### `.env` File

```
PORT=4000
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
MONGO_URI=mongodb://localhost:27017/otpDB
OTP_EXPIRY=300000
```

**Explanation:**

* `EMAIL_USER`: Sender email
* `EMAIL_PASS`: Gmail App Password
* `OTP_EXPIRY`: OTP expiry time (in milliseconds)

---

## Step 2: Load Environment Variables

### `server.js`

```js
import express from "express";
import dotenv from "dotenv";
import otpRoutes from "./routes/otp.routes.js";
import { connectDB } from "./config/db.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/otp", otpRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
```

---

## Step 3: OTP Generator Utility

### `utils/generateOtp.js`

```js
export const generateOtp = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};
```

Generates a **6-digit OTP**.

---

## Step 4: Nodemailer Service

### `services/mail.service.js`

```js
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
```

This file handles **email sending logic**.

---

## Step 5: OTP Model (MongoDB)

### `models/Otp.model.js`

```js
import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
  email: String,
  otp: String,
  expiresAt: Date
});

export default mongoose.model("Otp", otpSchema);
```

Stores OTP with expiry time.

---

## Step 6: OTP Controller

### `controllers/otp.controller.js`

```js
import Otp from "../models/Otp.model.js";
import { generateOtp } from "../utils/generateOtp.js";
import { transporter } from "../services/mail.service.js";

export const sendOtp = async (req, res) => {
  const { email } = req.body;
  const otp = generateOtp();

  const expiresAt = new Date(Date.now() + Number(process.env.OTP_EXPIRY));

  await Otp.create({ email, otp, expiresAt });

  await transporter.sendMail({
    from: `"OTP Service" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP is ${otp}. It will expire in 5 minutes.`
  });

  res.json({ message: "OTP sent successfully" });
};

export const verifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  const record = await Otp.findOne({ email, otp });

  if (!record) {
    return res.status(400).json({ message: "Invalid OTP" });
  }

  if (record.expiresAt < new Date()) {
    return res.status(400).json({ message: "OTP expired" });
  }

  await Otp.deleteMany({ email });

  res.json({ message: "OTP verified successfully" });
};
```

---

## Step 7: Routes

### `routes/otp.routes.js`

```js
import express from "express";
import { sendOtp, verifyOtp } from "../controllers/otp.controller.js";

const router = express.Router();

router.post("/send", sendOtp);
router.post("/verify", verifyOtp);

export default router;
```

---

## How OTP Flow Works (Simple Explanation)

1. User submits email
2. Server generates OTP
3. OTP stored with expiry
4. OTP emailed to user
5. User submits OTP
6. Server verifies OTP and expiry
7. OTP deleted after success

---

## API Testing (Postman)

### Send OTP

```
POST /api/otp/send
Body:
{
  "email": "test@gmail.com"
}
```

### Verify OTP

```
POST /api/otp/verify
Body:
{
  "email": "test@gmail.com",
  "otp": "123456"
}
```

---

## Security Best Practices

* Never store OTP in plain logs
* Always set expiry time
* Delete OTP after verification
* Use `.env` for secrets
* Use Gmail App Password only


