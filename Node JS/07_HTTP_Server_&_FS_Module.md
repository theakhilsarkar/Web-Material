
# 🚀 Node.js HTTP Server + File System (FS) Practical Guide

## 🛠️ Logging Server Activity to `log.txt`

Is code mein hum `http` module se server banayenge aur har request par **`fs.appendFile()`** ka use karke `log.txt` file mein data likhenge.

### 1\. The Code (`server.js`)

```javascript
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// --- ES Module Fix for __dirname ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// ------------------------------------

// Log file ka path set karte hain
const logFilePath = path.join(__dirname, 'log.txt'); 

// Function jo log entry banayegi aur file mein add karegi
function logRequest(req) {
    // 1. Current Date and Time
    const now = new Date();
    const dateTime = now.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    // 2. Request Details
    const method = req.method;
    const url = req.url;
    const ip = req.socket.remoteAddress || 'N/A'; // User ka IP address

    // 3. Log Message format
    const logMessage = `[${dateTime}] - Method: ${method} - URL: ${url} - IP: ${ip}\n`;

    // 4. Log file mein data add karna (append karna)
    fs.appendFile(logFilePath, logMessage, (err) => {
        if (err) {
            // Agar file mein likhte waqt error aaye toh console mein dikhana
            console.error('LOGGING FAILED:', err.message);
        } else {
            console.log(`Logged entry for: ${url}`);
        }
    });
}

const server = http.createServer((req, res) => {
    // Har incoming request ko log karna
    logRequest(req); 

    // --- Server Response (Aapka main logic) ---
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome! Check log.txt for your entry.');
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the About Page. Logged!');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server started. Logging all requests to ${logFilePath}`);
});
```

### 2\. How to Test and Output (`log.txt`)

1.  **Save** the code as `server.js`.
2.  **Run** the server: `node server.js`
3.  **Visit** these URLs in your browser:
      * `http://localhost:3000/`
      * `http://localhost:3000/about`
      * `http://localhost:3000/some_random_page`

### 3\. Log File Output

Har request ke baad, aapki **`log.txt`** file mein ek nayi line add ho jayegi, jaisi dikhegi:

```
[11/11/2025, 9:55:00 am] - Method: GET - URL: / - IP: ::1
[11/11/2025, 9:55:05 am] - Method: GET - URL: /about - IP: ::1
[11/11/2025, 9:55:10 am] - Method: GET - URL: /some_random_page - IP: ::1
```
