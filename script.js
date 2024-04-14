const image = document.querySelector('.image-container-2');

image.addEventListener('mouseenter', function() {
  this.classList.add('hover');
});

image.addEventListener('mouseleave', function() {
  setTimeout(() => {
    this.classList.remove('hover');
  }, 1500); // Match the transition duration
});
