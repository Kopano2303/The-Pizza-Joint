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

// DATE AND TIME DISPLAY
function updateDateTime() {
    var today = new Date();

    var year = today.getFullYear();
    var month = String(today.getMonth() + 1).padStart(2, '0');
    var day = String(today.getDate()).padStart(2, '0');

    var hours = String(today.getHours()).padStart(2, '0');
    var minutes = String(today.getMinutes()).padStart(2, '0');
    var seconds = String(today.getSeconds()).padStart(2, '0');

    var date = year + "-" + month + "-" + day;
    var time = hours + ":" + minutes + ":" + seconds;

    var dateTime = date + " " + time;

    document.getElementById("dateTime").textContent = dateTime;
}

// Run every second
setInterval(updateDateTime, 1000);

// Run immediately
updateDateTime();



document.querySelectorAll(".accordion-header").forEach(button => {
    button.addEventListener("click", () => {
        const content = button.nextElementSibling;

        // Close other accordions (optional)
        document.querySelectorAll(".accordion-content").forEach(section => {
            if (section !== content) {
                section.style.maxHeight = null;
            }
        });

        // Toggle this accordion
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});




const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
    button.addEventListener("click", () => {
        
        // Remove active highlight from buttons
        tabButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const tabName = button.getAttribute("data-tab");

        // Show matching tab content only
        tabContents.forEach(content => {
            content.style.display = content.id === `tab-${tabName}` ? "block" : "none";
        });
    });
});







const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const messageError = document.getElementById("messageError");

        // Clear old errors
        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";

        let valid = true;

        // Validate name
        if (name === "") {
            nameError.textContent = "Name cannot be empty";
            valid = false;
        }

        // Validate email
        if (email === "") {
            emailError.textContent = "Email cannot be empty";
            valid = false;
        } 
        else if (!email.endsWith("@gmail.com")) {
            alert("Email must contain @gmail.com");
            valid = false;
        }

        // Validate message
        if (message === "") {
            messageError.textContent = "Message cannot be empty";
            valid = false;
        }

        if (!valid) return;

        // Open Gmail compose
        const gmailUrl =
            "https://mail.google.com/mail/?view=cm&fs=1" +
            "&to=" + "email@gmail.com" +
            "&su=" + encodeURIComponent("Message from Contact Form") +
            "&body=" + encodeURIComponent(
                "Name: " + name + "\n" +
                "Email: " + email + "\n\n" +
                "Message:\n" + message
            );

        window.open(gmailUrl, "_blank");
    });
}








function removeHighlights(parentElement) {
    const highlightedElements = parentElement.querySelectorAll(".highlight");

    highlightedElements.forEach(element => {
        element.classList.remove("highlight");
    });
}

// Define the highlight function
function highlight(parentElement, text) {
    const elements = parentElement.querySelectorAll("p, span, div, a, li");

    elements.forEach(element => {
        if (element.textContent.toLowerCase().includes(text)) {
            element.classList.add("highlight");
        }
    });
}

// Search input event listener
window.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("siteSearch");

    if (!searchInput) {
        console.log("Search input NOT FOUND on page");
        return;
    }

    console.log("Search input detected!");

    searchInput.addEventListener("keyup", function () {
        let text = this.value.toLowerCase();

        removeHighlights(document.body); // Remove existing highlights

        if (text.trim() !== "") {
            highlight(document.body, text); // Add new highlights
        }
    });
});