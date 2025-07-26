// Save scroll position before leaving
window.addEventListener('beforeunload', () => {
    // Only save if on main page
    if (location.pathname === '/index.html' || location.pathname === '/') {
      sessionStorage.setItem('scrollY', window.scrollY);
    }
  });
  
  // Restore scroll only if returning to main page
  window.addEventListener('DOMContentLoaded', () => {
    const scrollY = sessionStorage.getItem('scrollY');
    const referrer = document.referrer;
  
    if (
      scrollY &&
      referrer.includes(location.hostname) &&
      (location.pathname === '/index.html' || location.pathname === '/')
    ) {
      window.scrollTo(0, parseInt(scrollY, 10));
      sessionStorage.removeItem('scrollY');
    } else {
      sessionStorage.removeItem('scrollY');
    }
  });
  