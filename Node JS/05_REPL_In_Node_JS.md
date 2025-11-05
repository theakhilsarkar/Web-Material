
# 🚀 Node.js Fundamentals: REPL, Globals, & Process Management

Aapne Node.js ke basic building blocks ko samajh liya hai. Yeh document aapki quick revision guide hai, jo batati hai ki Node.js mein kaun si cheezein "hamesha available" rehti hain aur unka kya kaam hai.

## 1. 🔍 REPL (Read-Eval-Print-Loop) - The JavaScript Scratchpad

REPL Node.js ka sabse pehla aur sabse aasan tool hai. Yeh ek "magic calculator" ki tarah hai jo aapko bina file save kiye JavaScript code run karne deta hai.

### Use aur Importance (Faayde)

* **Quick Testing:** Chhote syntax ya function ko turant check karne ke liye.
* **Debugging:** Code ke beech mein variables ki value dekhne ke liye.
* **Learning:** JavaScript commands aur Node.js ke modules ko interactively seekhne ke liye.

| Operation | Command (Terminal) |
| :--- | :--- |
| **Start REPL** | `node` |
| **Exit REPL** | `.exit` ya `Ctrl + C` (double-tap) |
| **Example** | `> 5 * 5` $\to$ `25` |

---

## 2. 🌍 Core/Global Objects (Hamesha Ready Tools)

Node.js mein kuch objects hamesha available hote hain aur inhein import (import) karne ki zaroorat nahi padti. Inhein do category mein dekhte hain:

### A. The True Global Object (`global`)

Browser mein jo kaam `window` karta hai, Node.js mein wahi kaam `global` object karta hai.

* **Role:** Yeh ek container hai jismein saare global variables, functions, aur classes store hote hain.
* **Use Case:** Agar aap galti se `let` ya `const` use nahi karte, toh woh variable `global` mein store ho jaata hai.

| Object | Code (REPL) | Description |
| :--- | :--- | :--- |
| **`global`** | `myVar = 100;` $\to$ `global.myVar` | Global scope mein data store/access karta hai. |

### B. Other Global Objects (`process`, `console`, etc.)

| Object | Key Property/Function | Purpose | Example Code (REPL) |
| :--- | :--- | :--- | :--- |
| **`process`** | `process.exit(code)` | Running program ko control aur information deta hai. | `process.exit(0);` (Program ko safaltapoorvak band karta hai) |
| **`process.platform`** | Property | Operating System (OS) ki jaankari deta hai. | `process.platform` $\to$ `'win32'` ya `'linux'` |
| **`process.cwd()`** | Function | Current working directory (folder) ka path batata hai. | `process.cwd()` $\to$ `'/home/user/project'` |
| **`console`** | `console.log()` | Output screen par data print karta hai (bahut important for debugging). | `console.log("Hello!");` |

---

## 3. ⏱️ Timer Functions (Time Management)

Timer functions Node.js ke asynchronous nature ka ek bahut bada hissa hain. Yeh aapko code ko future ke liye schedule karne dete hain.

| Function | Role (Kaam) | Example Code |
| :--- | :--- | :--- |
| **`setTimeout()`** | Code ko ek specific **delay ke baad** *ek baar* chalaata hai. | `setTimeout(() => { console.log("Done!"); }, 2000);` |
| **`setInterval()`** | Code ko ek specific time interval par **baar-baar** chalaata hai. | `const id = setInterval(() => { console.log("Tick"); }, 1000);` |
| **`clearInterval()`** | `setInterval` se shuru kiye gaye repetitive task ko **band** karta hai. | `clearInterval(id);` |

