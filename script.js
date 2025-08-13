// @ts-nocheck

// Image slider for sidebar
const slides = document.querySelectorAll('.slider img');
let currentSlide = 0;
const slideInterval = 5000; // 5 seconds

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, slideInterval);

// Form validation for password match
const form = document.getElementById('signup-form');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', function(e) {
  errorMessage.textContent = ''; // clear previous errors

  if (password.value !== confirmPassword.value) {
    e.preventDefault();
    errorMessage.textContent = 'Passwords do not match. Please check and try again.';
    confirmPassword.focus();
  }
});
