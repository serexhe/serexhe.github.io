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

    // References show more toggle
    const showCount = 7; // number of items to show initially
    const items = document.querySelectorAll('li.more-reference');
    if (items.length > showCount) {
        // Hide all items beyond showCount
        items.forEach((item, index) => {
            if (index >= showCount) {
                item.style.display = 'none';
            }
        });

        // Create toggle button
        const btn = document.createElement('button');
        btn.textContent = 'Mehr anzeigen';
        btn.style.cursor = 'pointer';
        btn.style.margin = '10px 0';
        btn.style.background = 'none';
        btn.style.border = 'none';
        btn.style.color = '#54ff00';
        btn.style.fontSize = '1em';

        let expanded = false;
        btn.addEventListener('click', () => {
            expanded = !expanded;
            items.forEach((item, index) => {
                if (index >= showCount) {
                    item.style.display = expanded ? 'list-item' : 'none';
                }
            });
            btn.textContent = expanded ? 'Weniger anzeigen' : 'Mehr anzeigen';
        });

        // Insert the button after the last visible <li> (the showCount-1th)
        const lastVisibleItem = items[showCount - 1];
        lastVisibleItem.parentNode.insertBefore(btn, lastVisibleItem.nextSibling);
    }

});

// Save scroll position before leaving (outside DOMContentLoaded)
window.addEventListener('beforeunload', () => {
    // Only save if on main page
    if (location.pathname === '/index.html' || location.pathname === '/') {
        sessionStorage.setItem('scrollY', window.scrollY);
    }
});
