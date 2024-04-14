const images = document.querySelectorAll('.image-container-1, .image-container-2');

images.forEach(image => {
 image.addEventListener('mouseenter', function() {
    this.classList.add('hover');
 });

 image.addEventListener('mouseleave', function() {
    setTimeout(() => {
      this.classList.remove('hover');
    }, 1000); // Match the transition duration
 });
});
