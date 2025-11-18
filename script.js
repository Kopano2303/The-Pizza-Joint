const body = document.querySelector("body"),
sidebar = body.querySelector(".sidebar")

const sidebarLinks = document.querySelectorAll(".sidebar ul li a");

// Set active state on click
sidebarLinks.forEach(link => {
  link.addEventListener("click", function() {
    sidebarLinks.forEach(l => l.parentElement.classList.remove("active"));
    this.parentElement.classList.add("active");
  });
});

// Optional: highlight current page automatically
window.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname;
  sidebarLinks.forEach(link => {
    if (link.getAttribute("href") === currentPath) {
      link.parentElement.classList.add("active");
    }
  });
});