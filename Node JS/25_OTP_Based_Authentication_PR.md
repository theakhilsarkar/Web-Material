### 🔐 Login System Project – Overview

#### ✅ Key Features

* User registration with email & password
* Password encryption using **bcrypt**
* Login with email and password
* **OTP-based email verification** using **Nodemailer**
* JWT token generation after successful login
* Protected routes (user cannot access Home without valid JWT)
* Logout functionality
* Proper error handling and validation

---

#### 🔄 Authentication Flow

1. **Signup**

   * User registers with email and password
   * Password is hashed using bcrypt
   * OTP is generated and sent to user email
2. **OTP Verification**

   * User submits OTP
   * OTP is verified from database / memory
3. **Login**

   * User logs in with email and password
   * Password is compared using bcrypt
   * JWT token is generated on success
4. **Access Protected Routes**

   * JWT token is sent in request headers
   * Middleware verifies token
   * Access is allowed only if token is valid
5. **Logout**

   * Token is removed from client side

---

#### 🛠️ Technology Used

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **Authentication:** JWT, bcrypt
* **Email Service:** Nodemailer (Gmail SMTP)
* **Environment Management:** dotenv
* **API Testing:** Postman

---

#### 🔒 Security Implementation

* Password hashing using bcrypt with salt
* JWT-based stateless authentication
* OTP verification for email validation
* Protected routes using JWT middleware
* Sensitive data stored in `.env` file
* Proper HTTP status codes and error messages
* Unauthorized access prevention for Home page

