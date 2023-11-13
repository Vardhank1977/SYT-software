// Search functionality
const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");

searchButton.addEventListener("click", function () {
  const searchTerm = searchInput.value;
  // Perform your search logic here, e.g., redirect to a search results page or display search results.
  console.log("Search term: " + searchTerm);
  // Clear the input field
  searchInput.value = "";
});

// Smooth scrolling for anchor links in the navigation menu
document.querySelectorAll("nav ul li a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
      top: targetElement.offsetTop - 70, // Adjust the offset as needed
      behavior: "smooth",
    });
  });
});

// Toggle mobile menu
const mobileMenu = document.querySelector(".mobile-menu");
const navUl = document.querySelector("nav ul");

mobileMenu.addEventListener("click", () => {
  navUl.classList.toggle("show-menu");
});

// Close mobile menu when an item is clicked
navUl.addEventListener("click", () => {
  if (navUl.classList.contains("show-menu")) {
    navUl.classList.remove("show-menu");
  }
});
