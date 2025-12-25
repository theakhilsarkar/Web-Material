PROJECT TITLE
Blog Management System with Cookie-Based Authentication

PROJECT OVERVIEW
The client wants a web-based Blog Management System where users can register, log in, and manage blog posts. The system must support user authentication using cookies and store all data securely in a MongoDB database. Blog posts must allow image uploads, and uploaded images should be stored on the server while their paths are saved in the database.

The application should follow proper backend structure and expose APIs that can be tested using Postman or integrated with a frontend later.

---

PROJECT OBJECTIVES

1. Implement user authentication using cookies
2. Create secure login and logout functionality
3. Store and manage blog data using MongoDB
4. Upload and manage blog images using Multer
5. Build REST APIs following proper HTTP methods
6. Ensure authenticated access for protected actions

---

USER ROLES

1. Guest User

   * Can view public blog posts
   * Cannot create, update, or delete blogs

2. Authenticated User

   * Can create new blog posts
   * Can update their own blog posts
   * Can delete their own blog posts
   * Can upload images for blog posts

---

FUNCTIONAL REQUIREMENTS

AUTHENTICATION

* User registration with required details
* User login using email and password
* Authentication state must be maintained using cookies
* Logout functionality must clear authentication cookies
* Protected routes must be accessible only to logged-in users

BLOG MANAGEMENT

* Create a new blog post
* Update an existing blog post
* Delete a blog post
* Get all blog posts
* Get a single blog post by ID
* Blog actions must be restricted to authenticated users

IMAGE UPLOAD

* Each blog post must support one image upload
* Images must be stored in a server folder
* Image path must be stored in MongoDB
* Uploaded images must be publicly accessible via URL

DATABASE REQUIREMENTS

USER COLLECTION

* Name
* Email
* Password
* Created date

BLOG COLLECTION

* Title
* Content
* Image path
* Author reference
* Created date
* Updated date

---

TECHNICAL REQUIREMENTS

* Backend must be developed using Node.js and Express
* MongoDB must be used as the database
* Mongoose must be used for schema and data modeling
* Multer must be used for handling file uploads
* Cookies must be used for authentication
* RESTful API design must be followed

---

SECURITY REQUIREMENTS

* Authentication routes must use cookies
* Protected routes must verify user authentication
* Unauthorized access must be restricted
* Sensitive data must not be exposed in API responses

---

API TESTING

* All APIs must be tested using Postman
* Authentication must be verified using cookies in Postman
* Image upload APIs must be tested with multipart/form-data

---

DELIVERABLES

* Complete backend source code
* MongoDB schema design
* API testing screenshots or video
* GitHub repository link

---

PROJECT COMPLETION CRITERIA

The project will be considered complete only if:

* Cookie-based authentication works correctly
* Protected routes are secured
* Blog CRUD operations function correctly
* Image upload and retrieval work as expected
* MongoDB data is stored and retrieved correctly

