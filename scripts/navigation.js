// Handle mobile navigation
document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");
  const navLinks = document.querySelectorAll(".nav-link");

  // Close menu when clicking outside
  document.addEventListener("click", function (event) {
    const isClickInside =
      navbarCollapse.contains(event.target) ||
      navbarToggler.contains(event.target);

    if (!isClickInside && navbarCollapse.classList.contains("show")) {
      navbarToggler.click();
    }
  });

  // Close menu when clicking a nav link on mobile
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (
        window.innerWidth < 992 &&
        navbarCollapse.classList.contains("show")
      ) {
        navbarToggler.click();
      }
    });
  });

  // Add smooth scroll for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      if (this.hash !== "") {
        e.preventDefault();
        const hash = this.hash;
        const offsetTop = document.querySelector(hash).offsetTop - 70; // Adjust for navbar height

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});
