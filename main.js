
  // Restore scroll immediately if from same site
window.addEventListener('DOMContentLoaded', () => {
    const scrollY = sessionStorage.getItem('scrollY');
    const referrer = document.referrer;
  
    if (scrollY && referrer.includes(location.hostname)) {
      window.scrollTo(0, parseInt(scrollY, 10));
      sessionStorage.removeItem('scrollY');
    } else {
      sessionStorage.removeItem('scrollY');
    }
  });
  
  // Save scroll when leaving
  window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('scrollY', window.scrollY);
  });
  