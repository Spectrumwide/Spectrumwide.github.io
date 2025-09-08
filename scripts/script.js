// Intersection Observer to detect when elements are in the viewport
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view"); // Add class when element is in view
      } else {
        entry.target.classList.remove("in-view"); // Remove class when out of view
      }
    });
  });

  // Target all elements with the class 'animate-on-scroll'
  const elements = document.querySelectorAll(".animate-on-scroll");
  elements.forEach((element) => {
    observer.observe(element); // Observe each element
  });
});

let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Come Back ;(";
});

window.addEventListener("focus", () => {
  document.title = docTitle;
});

function contactbox() {
  alert(" Contact no: ");
}

function emailbox() {
  alert(" Email address: gurukiran.gkd@gmail.com");
}

function contactme_box() {
  alert("For project details, please reach out to me via email or contact me");
}
