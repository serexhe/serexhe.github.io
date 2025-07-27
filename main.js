// Wrap everything inside DOMContentLoaded for safe execution
document.addEventListener('DOMContentLoaded', () => {

    // Restore scroll only if returning to main page
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

    // Fade in full images with blur-up effect
    document.querySelectorAll('.image-wrapper').forEach(wrapper => {
        const img = wrapper.querySelector('.full-image');
        if (img.complete) {
            wrapper.classList.add('loaded');
        } else {
            img.addEventListener('load', () => {
                wrapper.classList.add('loaded');
            });
        }
    });


});

// Save scroll position before leaving (outside DOMContentLoaded)
window.addEventListener('beforeunload', () => {
    // Only save if on main page
    if (location.pathname === '/index.html' || location.pathname === '/') {
        sessionStorage.setItem('scrollY', window.scrollY);
    }
});
