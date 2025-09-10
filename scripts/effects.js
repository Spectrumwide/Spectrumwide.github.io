// Particle effect for hero section
function initParticleEffect() {
  const particleContainer = document.createElement("div");
  particleContainer.className = "particle-container";
  document.querySelector(".hero-section").appendChild(particleContainer);

  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "vw";
    particle.style.animationDelay = Math.random() * 5 + "s";
    particleContainer.appendChild(particle);
  }
}

// Typing effect for hero title
function initTypingEffect() {
  const titles = [
    "Web Developer",
    "Full Stack Developer",
    "UI/UX Designer",
    "Content Creator",
    "Graphic Designer",
  ];
  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const heroTagline = document.querySelector(".hero-tagline");

  function type() {
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
      heroTagline.textContent = currentTitle.substring(0, charIndex - 1);
      charIndex--;
    } else {
      heroTagline.textContent = currentTitle.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentTitle.length) {
      isDeleting = true;
      setTimeout(type, 2000); // Pause at full text
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      setTimeout(type, 500); // Pause before next word
    } else {
      setTimeout(type, isDeleting ? 100 : 200);
    }
  }

  type();
}

// Initialize all effects
document.addEventListener("DOMContentLoaded", () => {
  initParticleEffect();
  initTypingEffect();
});
