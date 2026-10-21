# Anurag — Academic Portfolio

A responsive, static academic portfolio for Anurag, a doctoral researcher in Communication, Media & Film at the University of Calgary. The site is built with plain HTML, CSS, and JavaScript; it does not require a framework, build step, or package installation.

## Site sections

### Home (`index.html`)

The home page introduces Anurag and presents:

- Areas of Focus: teaching, information design, research, and institutional engagement
- Career & Experience
- Honors, awards, and grants
- University Service & Leadership

### Research (`research.html`)

Includes doctoral research, publications, research experience, and conference presentations, workshops, and summer schools.

### Teaching (`teaching.html`)

Includes course instruction, teaching assistantships, guest lectures, and a teaching award.

### Tools & Software (`software.html`)

Describes tools used for data visualization, design, multimedia, and web publishing, along with applied communication work.

### CV

The CV navigation link opens `assets/Anurag CV.pdf` directly. `cv.html` remains as a redirect for older links.

### Contact (`contact.html`)

Provides email, professional profiles, affiliation, and location details.

## Project structure

```text
.
├── index.html
├── research.html
├── teaching.html
├── software.html
├── contact.html
├── cv.html
└── assets/
    ├── Anurag CV.pdf
    ├── favicon.png
    ├── css/
    │   └── style.css
    └── js/
        └── theme.js
```

All content pages share the stylesheet and theme script. The stylesheet includes responsive layouts and light/dark color themes. The theme toggle saves the visitor's choice in browser storage.

## Preview locally

Open `index.html` directly in a browser, or start a local static server from the project folder:

```powershell
py -m http.server 8000
```

Then visit <http://localhost:8000>. Stop the server with `Ctrl+C`.

## Deployment

The site can be published as a static site, including with GitHub Pages:

1. Keep the HTML files and `assets` directory together.
2. Publish the project root as the Pages source.
3. Open the deployed home page and check navigation, the CV PDF, favicon, and theme toggle.

There is no compilation or dependency-installation step. The home page canonical URL is set to `https://dranurag.ca/`, matching the site's custom domain.

## Updating content

- Edit the relevant HTML page for biography, research, teaching, software, contact, and home-page sections.
- Keep shared visual styles in `assets/css/style.css`.
- Keep shared browser behavior in `assets/js/theme.js`.
- Replace `assets/Anurag CV.pdf` to update the linked CV, preserving that filename unless you also update the CV links.
- Keep the favicon at `assets/favicon.png`, or update its references in each page's `<head>` if the filename changes.
