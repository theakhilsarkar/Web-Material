# Password Hashing using bcrypt (Node.js)

## 1. What is Password Hashing?

Password hashing is the process of converting a **plain text password** into a **fixed-length encrypted string (hash)**.

* Original password **cannot be recovered**
* Same password → **different hash every time**
* Used to protect user credentials in databases

---

## 2. Why We Should Hash Passwords

❌ Storing plain passwords is dangerous
✔ Hashing protects users even if database is leaked

**Benefits:**

* Prevents password theft
* Protects against database hacking
* Required for secure authentication systems

---

## 3. What is bcrypt?

**bcrypt** is a popular password-hashing library that:

* Uses **salt** automatically
* Is **slow by design** (prevents brute-force attacks)
* Produces **strong, irreversible hashes**

Used widely in:

* Node.js
* Banking apps
* Authentication systems

---

## 4. Install bcrypt

```bash
npm install bcrypt
```

---

## 5. Hashing Password (Signup)

```js
import bcrypt from "bcrypt";

const password = "mypassword123";

// Hash password
const hashedPassword = await bcrypt.hash(password, 10);

console.log(hashedPassword);
```

### Explanation:

* `password` → plain text password
* `10` → salt rounds (security level)
* Output → hashed password stored in DB

---

## 6. Comparing Password (Login)

```js
const isMatch = await bcrypt.compare(
  "mypassword123",
  hashedPassword
);

console.log(isMatch); // true or false
```

### Explanation:

* bcrypt hashes entered password
* Compares with stored hash
* Returns `true` if matched

---

## 7. What is Salt?

Salt is **random data** added to a password before hashing.

* Prevents rainbow table attacks
* Ensures same password → different hash
* bcrypt handles salt automatically

Example:

```
password123 + randomSalt → unique hash
```

---

## 8. What are Salt Rounds?

Salt rounds define **how many times hashing is repeated**.

| Rounds | Security               | Speed  |
| ------ | ---------------------- | ------ |
| 8      | Low                    | Fast   |
| 10     | Balanced (Recommended) | Medium |
| 12+    | High                   | Slower |

✔ Recommended: **10–12**

---

## 9. Why bcrypt is Secure

* One-way hashing (cannot decrypt)
* Automatic salting
* Slow hashing (brute-force protection)
* Industry accepted standard

---

## 10. bcrypt vs Encryption

| Feature      | Hashing (bcrypt) | Encryption        |
| ------------ | ---------------- | ----------------- |
| Reversible   | ❌ No             | ✅ Yes             |
| Password use | ✅ Best           | ❌ Not recommended |
| Storage      | Hash only        | Encrypted text    |

---

## 11. Best Practices

✔ Always hash passwords
✔ Never log passwords
✔ Never store plain text passwords
✔ Use environment variables for secrets
✔ Use bcrypt.compare() only for login

---

## 12. One-Line Teaching Summary

> bcrypt converts passwords into secure, irreversible hashes to protect user accounts.
