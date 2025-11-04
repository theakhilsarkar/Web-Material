

## ⚙️ Part 2: Installing Tailwind CSS

---

### 🥇 Option 1: Quick Setup using CDN (for practice or demo)

This is the **fastest** way to try Tailwind — no installation, no config files.

#### 🔹 Step 1: Create a simple HTML file

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tailwind CDN Example</title>

    <!-- 👇 Add this line -->
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="bg-gray-100 flex items-center justify-center h-screen">

    <div class="bg-white p-8 rounded-xl shadow-lg text-center">
      <h1 class="text-2xl font-bold text-blue-600 mb-4">Hello Tailwind!</h1>
      <p class="text-gray-700">This page is styled using Tailwind CSS CDN.</p>
      <button class="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">Click Me</button>
    </div>

  </body>
</html>
```

#### 🔹 Step 2: Open it in your browser

✅ You’ll see a styled card without writing a single line of CSS.

---

### 🧰 When to use CDN

| Use CDN when...                                    | Don’t use CDN when...                                         |
| -------------------------------------------------- | ------------------------------------------------------------- |
| You’re learning or testing small examples          | You’re building a full project                                |
| You need fast setup                                | You care about performance and optimization                   |
| You’re not using a build tool (like React or Vite) | You need customization (like custom colors, fonts, or themes) |

---

### 🥈 Option 2: Proper Setup using NPM (for real projects)

We’ll use **Vite + React** as the example (same concept for Next.js, Vue, or others).

#### 🔹 Step 1: Create a new React project

```bash
npm create vite@latest my-tailwind-app --template react
cd my-tailwind-app
npm install
```

#### 🔹 Step 2: Install Tailwind + PostCSS + Autoprefixer

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

✅ This command creates two files:

* `tailwind.config.js` → for customization
* `postcss.config.js` → for post-processing CSS

#### 🔹 Step 3: Configure `tailwind.config.js`

Tell Tailwind where your files are:

```js
// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

#### 🔹 Step 4: Add Tailwind directives in your CSS file

Open `src/index.css` and add:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### 🔹 Step 5: Import this CSS in your entry file

Inside `src/main.jsx`:

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

#### 🔹 Step 6: Test it

Now open `App.jsx` and write:

```jsx
export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600">Hello Tailwind!</h1>
    </div>
  )
}
```

Run:

```bash
npm run dev
```
