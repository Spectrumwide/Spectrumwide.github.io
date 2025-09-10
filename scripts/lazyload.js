document.addEventListener("DOMContentLoaded", function () {
  const lazyImages = document.querySelectorAll("[data-src]");

  const imageObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          loadImage(img);
          observer.unobserve(img);
        }
      });
    },
    {
      rootMargin: "50px 0px",
      threshold: 0.1,
    }
  );

  function loadImage(img) {
    const src = img.getAttribute("data-src");
    if (!src) return;

    img.src = src;
    img.removeAttribute("data-src");
    img.classList.add("loaded");
  }

  lazyImages.forEach((img) => {
    imageObserver.observe(img);
  });
});
