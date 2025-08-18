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
const showCount = 8;
const items = document.querySelectorAll('li.more-reference');

if (items.length > showCount) {
    // Initially hide all after showCount
    items.forEach((item, index) => {
        if (index >= showCount) {
            item.style.display = 'none';
        }
    });

    // Create toggle element
    const toggleText = document.createElement('span');
    toggleText.textContent = 'Mehr anzeigen';
    toggleText.style.cursor = 'pointer';
    toggleText.style.color = '#54ff00';
    toggleText.style.fontSize = 'inherit';
    toggleText.style.userSelect = 'none';
    toggleText.style.display = 'inline-block';
    toggleText.style.margin = '10px 0';

    let expanded = false;

    toggleText.addEventListener('click', () => {
        expanded = !expanded;

        items.forEach((item, index) => {
            if (index >= showCount) {
                item.style.display = expanded ? 'list-item' : 'none';
            }
        });

        toggleText.textContent = expanded ? 'Weniger anzeigen' : 'Mehr anzeigen';
    });

    // Append the toggle just once, at the end
    const referenceList = document.querySelector('ul#references-list');
    referenceList.appendChild(toggleText);
}



});

// Save scroll position before leaving (outside DOMContentLoaded)
window.addEventListener('beforeunload', () => {
    if (location.pathname === '/index.html' || location.pathname === '/') {
        sessionStorage.setItem('scrollY', window.scrollY);
    }
});
