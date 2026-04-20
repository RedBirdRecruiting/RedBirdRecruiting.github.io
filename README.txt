Redbird Recruiting — Website Files
====================================

A complete 6-page static website ready to upload to GoDaddy (or any static-hosting service).
All pages link to each other via relative paths.

FILES
-----
  index.html        Home page
  about.html        About page
  employers.html    For Employers page
  candidates.html   For Candidates page
  jobs.html         Jobs board with sidebar filters
  contact.html      Contact page with form
  styles.css        All site styles (single, unified file)
  main.js           Mobile nav + contact form + jobs filter logic
  assets/
    logo.svg        Redbird logo
    favicon.svg     Browser tab icon

HOW TO UPLOAD TO GODADDY
--------------------------
1. Log in to GoDaddy → My Products → find your hosting plan → Manage.
2. Open File Manager (in cPanel or Hosting Dashboard).
3. Navigate to the "public_html" folder (your domain root).
4. Upload redbird-recruiting.zip, right-click it, and choose "Extract".
5. Make sure index.html and all other files sit at the top level of public_html
   (not inside a subfolder), alongside the assets/ folder.
6. Visit your domain to confirm it loads.

WHAT TO REPLACE BEFORE GOING LIVE
-----------------------------------
Search all files for these placeholders and swap in real values:

  [Your phone]    → your business phone number
  [Your email]    → your contact email  (also update the mailto: href in contact.html)
  [Your address]  → your office or mailing address

Social-link hrefs in every footer currently point to "#".
Replace with your real LinkedIn / Instagram / Facebook URLs when ready.

CONTACT FORM
-------------
The contact form is client-side only — it shows a success message but does not
actually send email. To wire it to email, choose one of:
  (a) Replace the <form> action with a Formspree, Netlify Forms, or Basin endpoint.
  (b) Use GoDaddy's built-in form-to-email feature.
  (c) Ask a developer to add a small PHP mailer or serverless function.

BRANDING
---------
Colors and fonts live at the top of styles.css as CSS custom properties:
  --red, --red-dark, --red-bright   primary palette
  --gold                            warm accent
  --charcoal, --ink, --muted        text tones
  --serif, --sans                   typography stacks

Change any of these variables and the entire site updates automatically.

JOBS PAGE
----------
The jobs board uses a sidebar with checkboxes for Role type, Employment, and Region,
plus a free-text search. Filtering is handled in main.js — no server required.

To add or edit a job listing, copy an existing <div class="js-item"> block in
jobs.html and update the data attributes and content:
  data-role     = dvm | tech | leadership | manager
  data-type     = full-time | part-time | relief
  data-region   = northeast | southeast | midwest | southwest | west
