Redbird Recruiting, Website Files
===================================

This folder contains a complete 5-page static website ready to upload to GoDaddy (or any
static-hosting service). All pages link to each other via relative paths.

FILES
-----
  index.html        Home page
  about.html        About page
  employers.html    For Employers page
  candidates.html   For Candidates page
  contact.html      Contact page with form
  styles.css        All site styles
  main.js           Mobile nav + contact form handler
  assets/logo.svg   Redbird logo (SVG, scales perfectly)
  assets/favicon.svg Browser tab icon

HOW TO UPLOAD TO GODADDY
------------------------
1. Log in to GoDaddy -> My Products -> find your hosting plan -> click "Manage".
2. Open the cPanel or Hosting Dashboard, then open "File Manager".
3. Navigate into the "public_html" folder (or the domain root folder for your site).
4. Upload the ZIP of this folder (redbird-recruiting.zip), then right-click and "Extract".
   Move the contents (index.html, other .html files, styles.css, main.js, assets/) to the
   root of public_html so index.html is at the top level.
5. Visit your domain in a browser to confirm it loads.

WHAT TO REPLACE BEFORE GOING LIVE
---------------------------------
Search the files for these placeholders and replace them with real values:
  [Your phone]    -> your business phone number
  [Your email]    -> your contact email (also in contact.html mailto link)
  [Your address]  -> your office/mailing address

Social links in the footer currently point to "#". Replace the href with your real
LinkedIn / Instagram / Facebook URLs when ready.

CONTACT FORM
------------
The contact form currently runs client-side only, it shows a success message but does not
actually send email. To wire it up to email, either:
  (a) Replace the <form> with a Formspree, Netlify, or Basin endpoint, or
  (b) Use GoDaddy's built-in form-to-email feature, or
  (c) Ask your developer to add a small PHP mailer.

BRANDING
--------
Colors and fonts live at the top of styles.css as CSS variables. Tweak:
  --red, --red-dark, --charcoal    to change the palette
  --serif, --sans                   to change typography
