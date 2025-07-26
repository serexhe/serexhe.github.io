window.addEventListener('DOMContentLoaded', () => {
    const scrollY = sessionStorage.getItem('scrollY');
    const referrer = document.referrer;
  
    // Only restore if the user came from another page of your site
    if (scrollY && referrer.includes(location.hostname)) {
      // Delay until all images and content are loaded
      window.addEventListener('load', () => {
        window.scrollTo(0, parseInt(scrollY, 10));
        sessionStorage.removeItem('scrollY');
      });
    } else {
      // Optional: remove old scroll data if reload or direct access
      sessionStorage.removeItem('scrollY');
    }
  });
  
  // Save scroll when leaving
  window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('scrollY', window.scrollY);
  });
  