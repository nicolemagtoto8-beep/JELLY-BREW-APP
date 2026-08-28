// ============================================================
// Firebase configuration — this is what connects your QR code
// feedback and order forms to your dashboard automatically.
//
// This file is already filled in with your real project values
// (coffee-jelly-c9820). You don't need to edit this section.
// ============================================================

window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyDjt6Wk1eq5b_2_S47UzfOXVUd-Fto2dLo",
  authDomain: "coffee-jelly-c9820.firebaseapp.com",
  projectId: "coffee-jelly-c9820",
  storageBucket: "coffee-jelly-c9820.firebasestorage.app",
  messagingSenderId: "819292135105",
  appId: "1:819292135105:web:667443bd0566347a75be40"
};

// ============================================================
// Instant phone notifications (ntfy) — sends a push notification
// straight to your phone the moment a customer places an order.
// Completely free, no account or credit card needed.
//
// Setup steps (also in SETUP-GUIDE.md, "Part 7"):
//   1. Think up a unique, hard-to-guess topic name — treat it like
//      a password, e.g. "juanas-coffeejelly-orders-8k2j9".
//   2. Install the "ntfy" app on your phone (Android/iOS), or open
//      https://ntfy.sh/app in your phone's browser.
//   3. Subscribe to the exact topic name you picked in step 1.
//   4. Paste that same topic name below.
//
// Until you do this, orders still save and auto-import into your
// dashboard — you just won't get a phone notification.
// ============================================================
window.NTFY_TOPIC = "YOUR_NTFY_TOPIC";

// ============================================================
// Email notifications (EmailJS) — OPTIONAL extra. Sends you an
// email as well, if you'd like a written record on top of the
// phone notification above. See "Part 7b" in SETUP-GUIDE.md.
// ============================================================
window.EMAILJS_CONFIG = {
  publicKey: "YOUR_EMAILJS_PUBLIC_KEY",
  serviceId: "YOUR_EMAILJS_SERVICE_ID",
  templateId: "YOUR_EMAILJS_TEMPLATE_ID"
};
