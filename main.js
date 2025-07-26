// Save scroll position before leaving the page
window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('scrollY', window.scrollY);
  });
  
  // Restore scroll position on page load
  window.addEventListener('DOMContentLoaded', () => {
    const scrollY = sessionStorage.getItem('scrollY');
    if (scrollY !== null) {
      window.scrollTo(0, parseInt(scrollY, 10));
      sessionStorage.removeItem('scrollY'); // Optional: clear after restoring
    }
  });
  