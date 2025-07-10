
# 📄 **Lecture 5 – HTML vs HTML5 + HTML5 Tags and Attributes**

---

## 🆚 **HTML vs HTML5**

| Feature             | HTML (2/3/4/4.01)                                           | HTML5                                                                     |
| ------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------- |
| 🔧 Version Timeline | HTML2 (1995), HTML3.2 (1997), HTML4 (1999), HTML4.01 (2000) | HTML5 released in 2014                                                    |
| 🎬 Media Support    | No support for audio/video                                  | Native support for `<audio>` and `<video>`                                |
| 🧩 Structure Tags   | Only `<div>` and `<span>` for layout                        | New semantic tags like `<header>`, `<footer>`, `<nav>`, `<section>`, etc. |
| 📱 Mobile Support   | Not mobile responsive                                       | Designed for mobile-first responsive design                               |
| 🧪 API Support      | No in-built APIs                                            | Supports APIs like Geolocation, Canvas, Web Storage                       |
| 📄 Doctype          | Long: `<!DOCTYPE HTML PUBLIC...>`                           | Short: `<!DOCTYPE html>`                                                  |
| 🗂 Storage          | Uses cookies only                                           | Adds Web Storage: `localStorage`, `sessionStorage`                        |
| 🖼 Graphics         | Needs Flash/Java Applets                                    | Has `<canvas>` and `<svg>`                                                |
| ⚙️ Form Control     | Limited input types                                         | New input types: `email`, `date`, `range`, `color`, `tel`, etc.           |

---

## 🔤 **Semantic Tags in HTML5**

Semantic tags give meaning to content. Makes code readable and SEO friendly.

| Tag         | Purpose                                         |
| ----------- | ----------------------------------------------- |
| `<header>`  | Page or section top area                        |
| `<nav>`     | Navigation menu or links                        |
| `<section>` | Section/block of related content                |
| `<footer>`  | Footer area of page/section                     |
| `<article>` | Independent self-contained content (blog, post) |
| `<aside>`   | Side content (ads, sidebars)                    |
| `<main>`    | Main content of the page                        |

### 🔹 Example:

```html
<header>My Portfolio</header>
<nav>
  <a href="#">Home</a>
  <a href="#">Contact</a>
</nav>
<section>
  <h2>Projects</h2>
</section>
<footer>© 2025</footer>
```

---

## 🎥 `<video>` and `<audio>` Tag

These tags are used to embed media files without plugins.

### 🔹 `<video>` Example:

```html
<video controls width="300" autoplay muted loop>
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

### 🔹 `<audio>` Example:

```html
<audio controls>
  <source src="music.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
```

### 🔹 Attributes for `<video>` / `<audio>`:

| Attribute        | Description                    |
| ---------------- | ------------------------------ |
| `controls`       | Show play/pause/volume buttons |
| `autoplay`       | Play automatically             |
| `muted`          | Start muted                    |
| `loop`           | Repeat when finished           |
| `poster` (video) | Thumbnail before play          |

---

## 🔁 `<source>` Tag

Used inside `<audio>` or `<video>` to define file sources.

### 🔹 Example:

```html
<video controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
</video>
```

### 🔹 Common `<source>` Attributes:

| Attribute | Use                                          |
| --------- | -------------------------------------------- |
| `src`     | File path                                    |
| `type`    | File MIME type like `video/mp4`, `audio/mp3` |
| `media`   | (Optional) specify media query condition     |

---

## 🌐 `<iframe>` – Embed External Page

The `<iframe>` tag embeds another webpage inside the current page.

### 🔹 Example:

```html
<iframe src="https://www.google.com" width="400" height="300"></iframe>
```

### 🔹 Common Attributes:

| Attribute         | Use                                   |
| ----------------- | ------------------------------------- |
| `src`             | URL of the page to embed              |
| `width`, `height` | Size of iframe                        |
| `frameborder`     | Border around iframe (0 or 1)         |
| `allowfullscreen` | Allow fullscreen for embedded content |

---

## 📦 `<link>` and `<meta>` – Used in Head

Used to include external resources like CSS, Fonts, etc.

### 🔹 `<link>` Example:

```html
<link rel="stylesheet" href="style.css">
<link rel="icon" type="image/x-icon" href="favicon.ico">
```

### 🔹 Common `<link>` Attributes:

| Attribute | Description                            |
| --------- | -------------------------------------- |
| `rel`     | Relationship (stylesheet, icon, etc.)  |
| `type`    | MIME type (optional, e.g., `text/css`) |
| `href`    | URL to the file                        |

---

## ✅ Summary Points:

* HTML5 = Latest, semantic, mobile-first version.
* HTML5 tags: `<header>`, `<footer>`, `<nav>`, `<section>`, `<iframe>`, `<video>`, `<audio>`.
* Media tags have easy playback controls (`controls`, `autoplay`, `muted`, `loop`).
* Use `<source>` for multiple media formats.
* Use `<link rel="stylesheet">` to link CSS.

## Lab Task
https://docs.google.com/document/d/1PCIwLjUg9K0OBzULXPvOMuDYYIcSkVs6IhRTKjqURuA/edit?tab=t.0
