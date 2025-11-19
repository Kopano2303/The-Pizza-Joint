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
