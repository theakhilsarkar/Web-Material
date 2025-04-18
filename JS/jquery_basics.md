jQuery is a fast, small, and feature-rich JavaScript library. It simplifies HTML document traversal, event handling, animation, and Ajax with an easy-to-use API that works across a multitude of browsers.

## 🔹 Why Use jQuery?
- Simplifies JavaScript code
- Makes event handling easier
- Helps in creating animations
- Reduces cross-browser compatibility issues
- Easy to use and learn

## 🔹 How to Add jQuery
Include jQuery in your HTML using CDN:
```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```

## 🔹 Syntax
```javascript
$(selector).action();
```
Example:
```javascript
$("#btn").click(function() {
  alert("Button Clicked!");
});
```

## 🔹 jQuery Functions Cheat Sheet
| Function | Description | Example |
|---------|-------------|---------|
| `$(document).ready()` | Executes code when the DOM is fully loaded | `$(document).ready(function() { ... });` |
| `click()` | Handles click event | `$("#btn").click(function() {});` |
| `hover()` | Handles mouse hover event | `$("#div").hover(function() {});` |
| `hide()` | Hides selected element | `$("#text").hide();` |
| `show()` | Shows hidden element | `$("#text").show();` |
| `toggle()` | Toggles between hide and show | `$("#text").toggle();` |
| `addClass()` | Adds a class to selected element | `$("#box").addClass("active");` |
| `removeClass()` | Removes a class | `$("#box").removeClass("active");` |
| `toggleClass()` | Toggles a class | `$("#box").toggleClass("active");` |
| `css()` | Changes CSS properties | `$("#box").css("color", "red");` |
| `fadeIn()` | Fades in the element | `$("#img").fadeIn();` |
| `fadeOut()` | Fades out the element | `$("#img").fadeOut();` |
| `slideDown()` | Slides element down to show | `$("#menu").slideDown();` |
| `slideUp()` | Slides element up to hide | `$("#menu").slideUp();` |
| `slideToggle()` | Toggles slide up/down | `$("#menu").slideToggle();` |
| `keypress()` | Event triggered on key press | `$("input").keypress(function() {});` |
| `val()` | Gets or sets value of input field | `$("#name").val();` |
| `text()` | Gets or sets text content | `$("#para").text("Hello");` |
| `html()` | Gets or sets HTML content | `$("#div").html("<b>Bold</b>");` |

## 🔹 Example Usage
```html
<button id="btn">Click Me</button>
<p id="text">Hello World!</p>

<script>
  $(document).ready(function () {
    $("#btn").click(function () {
      $("#text").toggle();
    });
  });
</script>
```

