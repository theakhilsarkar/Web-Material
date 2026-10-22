# Bootstrap 6 Class Reference — CSS Property → Bootstrap Class Mapping

## 1. Colors — Text (Foreground)

| CSS Property | Bootstrap 6 Class | Where to Use |
|---|---|---|
| `color: red` | `fg-danger` | Error messages, warnings |
| `color: green` | `fg-success` | Success messages, confirmations |
| `color: blue` | `fg-primary` | Main brand text, links |
| `color: gray` | `fg-secondary` | Less important text |
| `color: orange` | `fg-warning` | Caution text |
| `color: cyan` | `fg-info` | Informational text |
| `color: black` | `fg-dark` | Dark text on light bg |
| `color: white` | `fg-light` | Light text on dark bg |
| `color: black` | `fg-body` | Default body text |
| `color: gray` | `fg-muted` | Disabled / muted text |
| `color: inherit` | `fg-reset` | Reset to parent color |

> **v5 equivalent:** `text-danger`, `text-success`, etc.

---

## 2. Colors — Background

| CSS Property | Bootstrap 6 Class | Where to Use |
|---|---|---|
| `background-color: blue` | `bg-primary` | Primary buttons, hero sections |
| `background-color: green` | `bg-success` | Success alerts |
| `background-color: red` | `bg-danger` | Error alerts |
| `background-color: orange` | `bg-warning` | Warning banners |
| `background-color: cyan` | `bg-info` | Info boxes |
| `background-color: gray` | `bg-secondary` | Subtle panels |
| `background-color: black` | `bg-dark` | Dark sections |
| `background-color: white` | `bg-light` | Light sections |
| `background-color: white` | `bg-body` | Page default bg |
| `background-color: transparent` | `bg-transparent` | Remove bg |

---

## 3. Display & Visibility

| CSS Property | Bootstrap 6 Class | Where to Use |
|---|---|---|
| `display: none` | `d-none` | Hide element on all screens |
| `display: block` | `d-block` | Force block |
| `display: inline` | `d-inline` | Inline element |
| `display: inline-block` | `d-inline-block` | Inline but box-model applies |
| `display: flex` | `d-flex` | Enable flexbox |
| `display: inline-flex` | `d-inline-flex` | Inline flex container |
| `display: grid` | `d-grid` | Enable CSS grid |
| `display: inline-grid` | `d-inline-grid` | Inline grid |
| `display: table` | `d-table` | Table display |
| `visibility: hidden` | `invisible` | Hidden but keeps space |
| `visibility: visible` | `visible` | Force visible |

**Responsive variants:** `d-sm-none`, `d-md-flex`, `d-lg-block`, `d-xl-none`, `d-xxl-flex`

---

## 4. Flexbox

| CSS Property | Bootstrap 6 Class | Where to Use |
|---|---|---|
| `flex-direction: row` | `flex-row` | Horizontal layout (default) |
| `flex-direction: column` | `flex-column` | Vertical stacking |
| `flex-direction: row-reverse` | `flex-row-reverse` | Reverse horizontal |
| `flex-direction: column-reverse` | `flex-column-reverse` | Reverse vertical |
| `flex-wrap: wrap` | `flex-wrap` | Wrap children |
| `flex-wrap: nowrap` | `flex-nowrap` | Force single line |
| `justify-content: flex-start` | `justify-content-start` | Align items left |
| `justify-content: flex-end` | `justify-content-end` | Align right |
| `justify-content: center` | `justify-content-center` | Center horizontally |
| `justify-content: space-between` | `justify-content-between` | Spread apart |
| `justify-content: space-around` | `justify-content-around` | Space around |
| `justify-content: space-evenly` | `justify-content-evenly` | Equal space |
| `align-items: flex-start` | `align-items-start` | Top align |
| `align-items: center` | `align-items-center` | Vertical center |
| `align-items: flex-end` | `align-items-end` | Bottom align |
| `align-items: stretch` | `align-items-stretch` | Equal height |
| `align-self: center` | `align-self-center` | Center one item |
| `flex-grow: 1` | `flex-grow-1` | Grow to fill |
| `flex-shrink: 0` | `flex-shrink-0` | Prevent shrinking |
| `flex-fill` | `flex-fill` | Fill available space |
| `order: 1` | `order-1` … `order-5` | Reorder items |

---

## 5. Spacing (Margin & Padding)

Bootstrap uses `{property}{side}-{size}`. **property**: `m` = margin, `p` = padding. **side**: `t` top, `b` bottom, `s` start/left, `e` end/right, `x` horizontal, `y` vertical, blank = all sides. **size**: `0`–`5`, `auto`.

| CSS Property | Bootstrap 6 Class | Where to Use |
|---|---|---|
| `margin: 0` | `m-0` | Remove margin |
| `margin: 1rem` | `m-3` | Medium margin (3 ≈ 1rem) |
| `margin-top: 0.5rem` | `mt-2` | Small top margin |
| `margin-bottom: 1.5rem` | `mb-4` | Space below element |
| `margin-left/right: 1rem` | `mx-3` | Horizontal margin |
| `margin-top/bottom: 2rem` | `my-5` | Vertical spacing |
| `margin: auto` | `m-auto` | Center block horizontally |
| `padding: 0` | `p-0` | Remove padding |
| `padding: 1rem` | `p-3` | Inner spacing |
| `padding-left: 1rem` | `ps-3` | Padding start (left in LTR) |
| `padding-right: 1rem` | `pe-3` | Padding end (right in LTR) |
| `padding: 0.25rem` | `p-1` | Tiny padding |

**Scale:** `0`=0, `1`=0.25rem, `2`=0.5rem, `3`=1rem, `4`=1.5rem, `5`=3rem

**Responsive:** `mt-md-3`, `p-lg-4`

---

## 6. Sizing (Width & Height)

| CSS Property | Bootstrap 6 Class | Where to Use |
|---|---|---|
| `width: 25%` | `w-25` | Quarter width |
| `width: 50%` | `w-50` | Half width |
| `width: 75%` | `w-75` | Three-quarter width |
| `width: 100%` | `w-100` | Full width |
| `width: auto` | `w-auto` | Fit content |
| `height: 25%` | `h-25` | Quarter height |
| `height: 50%` | `h-50` | Half height |
| `height: 100%` | `h-100` | Full height |
| `height: auto` | `h-auto` | Auto height |
| `max-width: 100%` | `mw-100` | Never overflow |
| `max-height: 100%` | `mh-100` | Cap height |
| `min-width: 100%` | `min-w-100` *(v6)* | Force minimum |

> `min-vh-100`, `vh-100` for viewport heights.

---

## 7. Grid System

Bootstrap grid = **container → row → col**.

| CSS Concept | Bootstrap 6 Class | Where to Use |
|---|---|---|
| Fixed-width container | `container` | Centered fixed-width layout |
| Fluid full-width container | `container-fluid` | Full viewport width |
| Responsive container | `container-md` / `container-lg` | Fluid until breakpoint |
| Row wrapper | `row` | Wrap columns |
| Equal columns (auto) | `col` | Auto-width equal columns |
| Fixed span | `col-4` | 4 of 12 columns |
| Responsive span | `col-md-6` | 6 cols from md breakpoint up |
| Auto-size content | `col-auto` | Width of content |
| Gutter (gap) | `g-3` | Space between columns |
| Horizontal gutter | `gx-4` | Column gap only |
| Vertical gutter | `gy-2` | Row gap only |

**Breakpoints:** `sm` (≥576px), `md` (≥768px), `lg` (≥992px), `xl` (≥1200px), `xxl` (≥1400px)

---

## 8. Typography

| CSS Property | Bootstrap 6 Class | Where to Use |
|---|---|---|
| `font-size: large` | `fs-1` … `fs-6` | Heading-like sizes (1 largest) |
| `font-weight: bold` | `fw-bold` | Bold text |
| `font-weight: normal` | `fw-normal` | Regular |
| `font-weight: 300` | `fw-light` | Thin text |
| `font-weight: 600` | `fw-semibold` | Semi-bold |
| `font-style: italic` | `fst-italic` | Italic |
| `text-align: left` | `text-start` | Left align (LTR) |
| `text-align: center` | `text-center` | Center text |
| `text-align: right` | `text-end` | Right align |
| `text-transform: uppercase` | `text-uppercase` | ALL CAPS |
| `text-transform: lowercase` | `text-lowercase` | lowercase |
| `text-transform: capitalize` | `text-capitalize` | Title Case |
| `text-decoration: underline` | `text-decoration-underline` | Underline |
| `text-decoration: line-through` | `text-decoration-line-through` | Strike |
| `text-decoration: none` | `text-decoration-none` | Remove underline |
| `white-space: nowrap` | `text-nowrap` | Prevent wrap |
| `word-wrap: break-word` | `text-break` | Break long words |
| `line-height: 1` | `lh-1` / `lh-sm` / `lh-base` / `lh-lg` | Line height |
| `overflow: hidden` + ellipsis | `text-truncate` | Cut with `…` |

---

## 9. Borders

| CSS Property | Bootstrap 6 Class | Where to Use |
|---|---|---|
| `border: 1px solid` | `border` | All borders |
| `border-top: 1px solid` | `border-top` | Top only |
| `border-bottom: 0` | `border-bottom-0` | Remove bottom |
| `border-color: blue` | `border-primary` | Colored border |
| `border-radius: 0.375rem` | `rounded` | Medium corners |
| `border-radius: 0.25rem` | `rounded-1` | Small corners |
| `border-radius: 50%` | `rounded-circle` | Circle |
| `border-radius: 0` | `rounded-0` | Sharp corners |
| `border-radius: 9999px` | `rounded-pill` | Pill shape |
| `border-width: 3px` | `border-3` | Thick border |

---

## 10. Position

| CSS Property | Bootstrap 6 Class | Where to Use |
|---|---|---|
| `position: static` | `position-static` | Default |
| `position: relative` | `position-relative` | Parent for absolute |
| `position: absolute` | `position-absolute` | Overlay on parent |
| `position: fixed` | `position-fixed` | Sticky header/footer |
| `position: sticky` | `position-sticky` | Stick on scroll |
| `top: 0` | `top-0` | Pin to top |
| `bottom: 0` | `bottom-0` | Pin to bottom |
| `start: 0` (left LTR) | `start-0` | Pin to left |
| `end: 0` (right LTR) | `end-0` | Pin to right |
| `translate(-50%, -50%)` | `translate-middle` | Center absolutely |
| `z-index: 3` | `z-3` | Layer order |

---

## 11. Overflow

| CSS Property | Bootstrap 6 Class | Where to Use |
|---|---|---|
| `overflow: auto` | `overflow-auto` | Scroll if needed |
| `overflow: hidden` | `overflow-hidden` | Clip content |
| `overflow: visible` | `overflow-visible` | Show overflow |
| `overflow: scroll` | `overflow-scroll` | Always scrollbars |
| `overflow-x: auto` | `overflow-x-auto` | Horizontal scroll |

---

## 12. Shadow & Opacity

| CSS Property | Bootstrap 6 Class | Where to Use |
|---|---|---|
| `box-shadow: small` | `shadow-sm` | Subtle card shadow |
| `box-shadow: medium` | `shadow` | Standard card |
| `box-shadow: large` | `shadow-lg` | Floating modal |
| `box-shadow: none` | `shadow-none` | Remove shadow |
| `opacity: 0.25` | `opacity-25` | Faded element |
| `opacity: 0.5` | `opacity-50` | Half transparent |
| `opacity: 0.75` | `opacity-75` | Mostly visible |
| `opacity: 1` | `opacity-100` | Fully visible |

---

## 13. Images & Media

| CSS Property | Bootstrap 6 Class | Where to Use |
|---|---|---|
| `max-width: 100%; height: auto` | `img-fluid` | Responsive image |
| `border-radius` on image | `rounded` + `img-fluid` | Rounded responsive |
| `object-fit: cover` | `object-fit-cover` | Fill container |
| `object-fit: contain` | `object-fit-contain` | Fit inside |
| Align image in figure | `figure-img` | Image inside `<figure>` |
| `float: right` | `float-end` | Float right |
| `float: left` | `float-start` | Float left |

---

## 14. Visibility / Screen Reader

| CSS Property | Bootstrap 6 Class | Where to Use |
|---|---|---|
| Hidden visually, readable by screen reader | `visually-hidden` | Accessibility labels |
| Show only on print | `d-print-block` | Print-only content |
| Hide on print | `d-print-none` | Exclude from print |
| Hidden on mobile, shown on desktop | `d-none d-md-block` | Responsive hide/show |

---

## Quick Cheat Guide for Students

> **Rule of thumb:** Bootstrap classes are named by **what they do**, not the CSS property name.
> - `text-*` became `fg-*` (text color) in v6 proposal.
> - `bg-*` = background
> - `m-*` = margin, `p-*` = padding
> - `d-*` = display
> - `w-*` / `h-*` = width / height
> - `col-*` = grid column
> - `flex-*` = flexbox
> - `justify-*` / `align-*` = flex alignment
