const image = document.querySelector('.image-container-2');

image.addEventListener('mouseenter', function() {
  this.classList.add('hover');
});

image.addEventListener('mouseleave', function() {
  setTimeout(() => {
    this.classList.remove('hover');
  }, 1000); // Match the transition duration
});


const image = document.querySelector('.image-container-1');

image.addEventListener('mouseenter', function() {
  this.classList.add('hover');
});

image.addEventListener('mouseleave', function() {
  setTimeout(() => {
    this.classList.remove('hover');
  }, 1000); // Match the transition duration
});
