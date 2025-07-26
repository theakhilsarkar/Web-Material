## ✅ **Practical Exam Description**

**Title:** Country API Application with Favorites & Search Feature
**Objective:**
Build a JavaScript-based application that fetches data from the **REST Countries API**, displays country details, and allows the user to **search for a country by name**, add it to **Favorites**, and save the favorites permanently using **Local Storage**.

---

### ✅ **Requirements**

1. **Fetch API Data**

   * Use the **REST Countries API**:
     `https://restcountries.com/v3.1/all?fields=name,capital,flags,currencies`
   * Display the following details for each country:

     * Country name
     * Flag
     * Capital

2. **Search Feature (Mandatory)**

   * Implement a search bar to filter countries by name in real-time.

3. **Favorites Feature**

   * Add a **"Favorite" button** for each country.
   * When clicked, the country should be added to the **Favorites section** on the right side of the page.
   * Favorites must be **saved permanently using Local Storage**.

4. **Unfavorite Feature**

   * The user can remove a country from favorites.
   * The change should reflect both in the **Favorites section** and in **Local Storage**.

5. **DOM Manipulation**

   * Dynamically create and update HTML elements using JavaScript.
   * Display countries in one section and favorites in another.

6. **Persistent Data**

   * On page reload, favorites should remain visible because of Local Storage.

---

### ✅ **Evaluation Criteria (Total: 50 Marks)**

| **Feature**                                               | **Marks** |
| --------------------------------------------------------- | --------- |
| **1. API Integration (Fetch + Display)**                  | 10        |
| - Correct API call, fetch JSON, and render data           |           |
| **2. Search Functionality**                               | 10        |
| - Real-time search/filter by name                         |           |
| **3. DOM Manipulation**                                   | 10        |
| - Dynamically create elements for countries and favorites |           |
| **4. Favorites Feature**                                  | 10        |
| - Add to favorites and update DOM in real time            |           |
| **5. Local Storage (Permanent Save)**                     | 10        |
| - Store favorites and retrieve on reload                  |           |

---

✅ **Layout Structure**

```
---------------------------------------------------------
|  [Search Bar]                                         |
|-------------------------------------------------------|
|       Country List             |     Favorite Countries|
|   [Flag] Country Name [Fav]    |   [Flag] Name [Remove]|
|--------------------------------|------------------------|
```

