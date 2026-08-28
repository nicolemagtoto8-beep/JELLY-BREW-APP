# Setting Up Auto-Sync Feedback (One-Time, ~10–15 minutes, Free)

You have three files that work together:

- **index.html** — your dashboard (orders, production, ingredients, feedback, settings)
- **feedback.html** — the simple form customers see when they scan your QR code
- **config.js** — the "wiring" that connects the two

Right now, all three work fine on their own using local storage. This guide connects them to a free
cloud database (Firebase) so that when a customer scans your QR code and submits feedback on their
own phone, it shows up automatically in your dashboard's Feedback tab — no manual copying needed.

**Important:** all three files must stay together in the same folder, both on your computer and
wherever you upload them.

---

## Part 1 — Create your free Firebase project

1. Go to **https://console.firebase.google.com** and sign in with any Google account.
2. Click **"Add project"** (or "Create a project"). Give it any name, e.g. `coffee-jelly-orders`.
3. You can turn off Google Analytics for this project — it isn't needed. Click **Create project**.
4. Once it's ready, click **Continue** to open the project dashboard.

## Part 2 — Turn on the database

1. In the left sidebar, click **Build > Firestore Database**.
2. Click **Create database**.
3. Choose **Start in production mode**, pick any location close to you, and click **Enable**.
4. Once created, click the **Rules** tab and replace the contents with:

   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /feedback/{doc} {
         allow read, create: if true;
         allow update, delete: if false;
       }
     }
   }
   ```

   This lets customers submit feedback and lets your dashboard read it, but nobody can edit or
   delete existing entries. Click **Publish**.

   *Note on privacy:* because there's no login system, anyone who has your Firebase project details
   could technically read the feedback collection directly (not edit/delete it). For a small home
   business this is a normal, low-risk trade-off — but if you'd like feedback fully private later,
   let me know and we can add a login step.

## Part 3 — Get your config keys

1. Click the **gear icon ⚙️** near the top-left, then **Project settings**.
2. Scroll to **"Your apps"** and click the **</>** (web) icon to register a new app.
3. Give it any nickname (e.g. "Coffee Jelly App") and click **Register app**. You don't need Firebase
   Hosting for this — just click through.
4. You'll see a code block that looks like this:

   ```js
   const firebaseConfig = {
     apiKey: "AIzaSy...",
     authDomain: "coffee-jelly-orders.firebaseapp.com",
     projectId: "coffee-jelly-orders",
     storageBucket: "coffee-jelly-orders.appspot.com",
     messagingSenderId: "123456789",
     appId: "1:123456789:web:abc123"
   };
   ```

5. Open **config.js** (the file included with your app) in any text editor (Notepad, TextEdit, etc.)
   and replace the placeholder values with your real ones from Firebase. Save the file.

## Part 4 — Put your app online

Your files need a public web address so a QR code can open them. The easiest free option:

**Netlify Drop** (no account required):
1. Go to **https://app.netlify.com/drop**
2. Drag your folder containing `index.html`, `feedback.html`, and `config.js` onto the page.
3. Netlify gives you a live web address instantly, like `https://random-name-123.netlify.app`.
4. Your dashboard is at that address, and your feedback form is at
   `https://random-name-123.netlify.app/feedback.html`.

*(Alternative: GitHub Pages works too if you're comfortable with GitHub — search "deploy static site
GitHub Pages" for steps. Netlify Drop is simplest for a first-time setup.)*

## Part 5 — Connect the QR code in your dashboard

1. Open your hosted **index.html** in your browser (bookmark this — it's your dashboard from now on).
2. Go to the **QR Codes** tab.
3. You should see a green banner: **"Auto-sync is connected."** If it's still yellow, double-check
   the values you pasted into `config.js`.
4. Paste your feedback page link (e.g. `https://random-name-123.netlify.app/feedback.html`) into
   the **"Give Us Feedback"** box and click **Save links & generate QR codes**.
5. A real, scannable QR code appears. Click **Download PNG** and print it on your packaging.

## Part 6 — Test it

1. Scan the QR code with your own phone.
2. Fill out a test feedback form and submit it.
3. Go back to your dashboard's **Feedback** tab (it may take a second) — your test entry should
   appear automatically.

That's it! Every time a customer scans and submits, it will show up the same way — no manual entry
needed. You can still use the **"+ Add Feedback"** button in the dashboard to record feedback someone
gives you in person; it will sync the same way once connected.

---

### If something isn't working

- **Banner still shows yellow/not connected:** re-check `config.js` for typos, and make sure you
  re-uploaded it after editing.
- **QR code doesn't generate:** make sure you clicked "Save links & generate QR codes" after pasting
  the link, and that you have an internet connection (the QR code library loads from the web).
- **Feedback doesn't appear on the dashboard:** confirm the Firestore rules were published (Part 2,
  step 4), and that both `index.html` and `feedback.html` use the same `config.js`.
