// Example script to show form submission alert
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Thank you for contacting us! We'll get back to you shortly.");
});

let slideIndex = 0;

function showSlides() {
  let slides = document.querySelectorAll('.slide');
  
  // Hide all slides
  slides.forEach(slide => slide.style.display = "none");

  // Show the current slide
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change slide every 2 seconds
}

// Initialize the slider
showSlides();

// Smooth scroll for internal navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Welcome Message Animation (fade in)
window.addEventListener('load', function() {
  const welcomeMessage = document.querySelector('h1');
  welcomeMessage.classList.add('fade-in');
});

// A simple function to toggle the visibility of a category
const toggleCategoryDetails = (category) => {
  const categoryDetails = document.getElementById(category);
  if (categoryDetails.style.display === "none" || categoryDetails.style.display === "") {
    categoryDetails.style.display = "block";
  } else {
    categoryDetails.style.display = "none";
  }
}

// Example: Attaching the toggle function to categories
document.querySelectorAll('.category-button').forEach(button => {
  button.addEventListener('click', function() {
    const category = this.dataset.category;
    toggleCategoryDetails(category);
  });
});

let cartCount = 0; // Variable to store the number of items in the cart

// Function to handle adding items to the cart
function addToCart(productName, productPrice) {
  cartCount++;
  document.getElementById('cart-count').textContent = `Cart: ${cartCount} item(s)`;
  alert(`${productName} has been added to your cart!`);
}

