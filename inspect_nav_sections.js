const fs = require('fs');
const code = fs.readFileSync('talal_bundle.js', 'utf8');

// Find where "#services", "#references", "#contact", "#booking", "#faq", "#coaching", "#about" are grouped
const navIdx = code.indexOf('path:"#services"');
if (navIdx !== -1) {
  console.log('Nav area:', code.substring(navIdx - 100, navIdx + 500));
}

// Let's find the home page component that uses these sections
const bookingIdx = code.indexOf('"#booking"');
if (bookingIdx !== -1) {
  console.log('Booking area:', code.substring(bookingIdx - 150, bookingIdx + 300));
}

const faqIdx = code.indexOf('"#faq"');
if (faqIdx !== -1) {
  console.log('FAQ area:', code.substring(faqIdx - 150, faqIdx + 300));
}

const coachingIdx = code.indexOf('"#coaching"');
if (coachingIdx !== -1) {
  console.log('Coaching area:', code.substring(coachingIdx - 150, coachingIdx + 300));
}
