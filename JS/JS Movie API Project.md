
## 🎬 Movie Search App using OMDb API — Full Lecture Notes

---

### 🔸 What is an API?

**API (Application Programming Interface)** is a way to communicate between:

* **Client** (your browser/app)
* **Server** (backend/data storage)

🧠 Think of API as a *menu card* in a restaurant:

* You (client) order food (request)
* Kitchen (server) prepares and sends food (response)

---

### 🔸 API Types

| Request Type | Description | Use                            |
| ------------ | ----------- | ------------------------------ |
| `GET`        | Fetch data  | Viewing movie info             |
| `POST`       | Send data   | Submitting a form              |
| `PUT`        | Update data | Editing a user profile         |
| `DELETE`     | Delete data | Removing an item from database |

---

### 🔸 OMDb Movie API

**OMDb (Open Movie Database)** provides movie data like title, poster, year, plot, etc.

**API URL Example:**

```
https://www.omdbapi.com/?apikey=YOUR_API_KEY&t=MovieName
```

---

### 🔐 How to Get Your OMDb API Key

1. Visit: [https://www.omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx)
2. Fill the form (name, email, reason)
3. Choose **Free Plan**
4. You’ll receive an API Key in email.
5. Use it in the code like:

```js
const apiKey = "yourapikeyhere";
```

---

## 💻 HTML + JavaScript Code

### ✅ `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Movie Search App</title>
</head>
<body>
  <h2>🎥 Search Movie</h2>
  <input type="text" id="input" placeholder="Enter movie name..." />
  <button id="search">Search</button>
  <div id="display"></div>

  <script src="script.js"></script>
</body>
</html>
```

---

### ✅ `script.js`

```javascript
const input = document.getElementById("input");
const search = document.getElementById("search");
const div = document.getElementById("display");

// Create once - reuse
const img = document.createElement("img");
const heading = document.createElement("h1");

function fetchMovie(title) {
  const api = "https://www.omdbapi.com/?apikey=63959758&t=" + title;

  fetch(api)
    .then((response) => response.json())
    .then((movie) => {
      // Check if movie exists
      if (movie.Response === "True") {
        img.src = movie.Poster;
        heading.textContent = movie.Title;

        div.innerHTML = ""; // clear previous result
        div.appendChild(img);
        div.appendChild(heading);
      } else {
        div.innerHTML = "<p style='color:red;'>Movie not found!</p>";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      div.innerHTML = "<p>Error fetching movie data.</p>";
    });
}

search.addEventListener("click", () => {
  const title = input.value.trim();
  if (title) {
    fetchMovie(title);
  } else {
    alert("Please enter a movie name.");
  }
});
```

---

## 📝 Explanation

* `fetchMovie(title)` makes a GET request to the API using the entered title.
* API returns movie data in **JSON** format.
* We extract and display:

  * `movie.Poster`
  * `movie.Title`
* We use `.then()` to handle the **Promise** returned by `fetch()`.

---

## 🔄 Optional: Use `async/await`

```javascript
async function fetchMovie(title) {
  const api = `https://www.omdbapi.com/?apikey=63959758&t=${title}`;
  const response = await fetch(api);
  const movie = await response.json();

  // display logic same as above
}
```

---

## 🧪 Example Movies to Try:

* `RRR`
* `Avengers`
* `Inception`
* `Shershaah`

