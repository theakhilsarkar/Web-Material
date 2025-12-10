# **Hosting / FTP / SEO – Introductory Documentation**

### *Lecture Notes for Beginner to Intermediate Students*

---

# **1. What is Web Hosting? (Detailed Explanation)**

Web hosting is a service that provides the **storage space**, **server resources**, and **technology** required for a website to be viewed on the internet.

When you build a website on your computer, only you can see it.
To make it available to the world, you must **upload it to a server** that is always online. This server is provided by a **hosting company**.

---

## **Why Hosting is Important**

* It stores all website files (HTML, CSS, JS, images, databases).
* It keeps your website online 24/7.
* It provides speed, security, and data backup.
* It allows users anywhere in the world to access your site.

---

## **Types of Hosting (Explained with Examples)**

### **1. Shared Hosting**

Multiple websites share the same server.

* Example: Your personal portfolio site on Hostinger/Bluehost shared plan.
* Good for: beginners, small business sites, low-traffic websites.

**Pros:** cheap, easy setup
**Cons:** slower, limited resources

---

### **2. VPS (Virtual Private Server)**

A physical server is divided into virtual parts; each part is given to one user.

* Example: A medium-sized e-commerce site using VPS for better performance.

**Pros:** faster than shared, more control
**Cons:** requires technical knowledge

---

### **3. Dedicated Hosting**

You get the **entire server** exclusively.

* Example: Large SaaS platforms, enterprise websites.

**Pros:** maximum performance
**Cons:** expensive, requires server admin skills

---

### **4. Cloud Hosting**

Your website runs on multiple connected servers instead of a single physical server.

* Example: Netflix, Instagram, modern apps use cloud infrastructure.

**Pros:** scalable, reliable, automatic resource adjustment
**Cons:** pricing can increase depending on usage

---

## **Domain and Hosting Relationship**

* **Domain:** Name of the website (example.com).
* **Hosting:** Space where files are stored.
  DNS connects both.

**In simple words:**
A **domain is your house address**, hosting is your **house**, and website files are your **furniture**.

---

# **2. What is FTP? (Detailed Explanation)**

FTP (File Transfer Protocol) is a method to **upload, download, and manage website files** on a hosting server.

FTP lets you directly access your website’s root folder.

---

## **Why FTP is Used**

* To upload website files from local computer to hosting server.
* To modify or update files quickly.
* To take backup of website data.
* To fix errors directly on server.
* To change permissions for security.

---

## **Common FTP Clients**

These tools help you connect to your server:

* FileZilla
* WinSCP
* Cyberduck

Students mainly use **FileZilla** because it is simple and free.

---

## **FTP Credentials (Important)**

You need the following details to connect:

| Credential   | Meaning                          |
| ------------ | -------------------------------- |
| **Host**     | Server IP or domain name         |
| **Username** | FTP account username             |
| **Password** | FTP password                     |
| **Port**     | Default: 21 for FTP, 22 for SFTP |

---

## **Common FTP Operations (Explained with Examples)**

### **1. Uploading Files**

You drag your website folder (e.g., *portfolio/*) into the server folder (*public_html/*).
Your website becomes publicly visible.

---

### **2. Renaming or Deleting Files**

Example: Renaming *index-old.html* → *index.html* for the homepage.

---

### **3. Changing File Permissions (CHMOD)**

Example:
If an image upload folder needs write permission, set its CHMOD to **755** or **775**.

---

### **4. Editing Configuration Files**

Example: updating `.htaccess` to fix routing issues.

---

# **3. Types of SEO (Explained in Detail)**

SEO (Search Engine Optimization) helps your website appear higher in search results.

There are **three main types**:

---

## **1. On-Page SEO (Inside Your Website)**

On-page SEO focuses on optimizing **content**, **HTML structure**, and **user experience**.

### **Detailed points with examples:**

### **• Proper HTML structure**

Clean and meaningful tags improve readability and crawling.
Example:
Using `<h1>` for main title and `<h2>` for subheadings.

---

### **• Title tags & meta descriptions**

These appear in Google search results.
Example:
**Title:** “Best Web Developer in Surat | Portfolio”
**Description:** “I build high-quality websites using React, Node.js, and TailwindCSS.”

---

### **• Image alt text**

Helps Google understand images.
Example:
`<img src="profile.jpg" alt="John Doe Web Developer">`

---

### **• Keyword-optimized content**

Content should include words that people search for.
Example:
If your page is about *digital marketing*, it should include that phrase multiple times naturally.

---

### **• Mobile-friendly design**

Responsive layout using CSS, Tailwind, or frameworks.
Example:
90% of users browse from mobile → Google gives higher rank to mobile-friendly websites.

---

### **• Page performance optimization**

Fast sites rank better.
Example:
Compressing images reduces loading time.

---

## **2. Off-Page SEO (Outside Your Website)**

Activities done on other websites to boost your site’s authority.

### **Detailed points with examples:**

### **• Backlinks**

When another website links to yours.
Example:
A blog writes: “Check out this portfolio website.” with a link to your site.

More quality backlinks → higher SEO ranking.

---

### **• Social media signals**

More shares, likes = more visibility.
Example:
Posting your article on LinkedIn increases traffic.

---

### **• Brand mentions**

Even if a website mentions your name without linking, it helps Google understand your brand.

---

## **3. Technical SEO (Website System Level Optimization)**

SEO related to structure, performance, and coding.

### **Detailed points with examples:**

### **• Site speed optimization**

Fast loading = good ranking.
Example:
Using WebP images instead of JPG.

---

### **• XML sitemaps**

File that helps Google understand your website structure.
Example:
`sitemap.xml` contains all important page links.

---

### **• robots.txt**

Tells search engines which pages to crawl or not crawl.
Example:
Disallowing admin pages.

---

### **• Core Web Vitals**

Google’s performance metrics (loading speed, interactivity).
Example:
Improving CLS (Cumulative Layout Shift) by fixing layout jumps.

---

### **• HTTPS/SSL**

Secure websites rank higher.
Example:
Google marks HTTP websites as “Not Secure.”

---

# **4. Important SEO Terminology (Detailed Explanation with Examples)**

## **1. Keywords**

Words people search on Google.

Example:
If someone searches *“best cake shop in Surat”*,
the main keyword = **cake shop in Surat**

Your website should include these words naturally.

---

## **2. Crawling**

Process where search engines use bots (called crawlers) to scan your website.

Example:
Googlebot visits your site → reads each page → follows links → understands structure.

---

## **3. Indexing**

After crawling, Google stores your page in its database so it can appear in search results.

Example:
If your page is not indexed, it **will not appear on Google**.

---

## **4. Ranking**

Position of your website in search results.

Example:
Searching “portfolio website developer Surat” may show your portfolio at **Rank 4** on Google.

Higher rank = more visitors.

---

## **5. Backlinks**

Links from other websites to your website.

Example:
A blogger writes a tutorial and includes a link to your portfolio → backlink created.

---

## **6. SERP (Search Engine Results Page)**

The page you see after searching on Google.

Example:
When you search *“React tutorial”*, the entire results page is SERP.

---

## **7. Meta Tags**

HTML tags that describe your page to search engines.

Example:

```html
<meta name="description" content="Learn React from beginner to advanced.">
```
