// ==================== AUTO + MANUAL IMAGE SLIDER ====================
const slider = document.getElementById("slider");
if (slider) {
  let currentIndex = 0;

  function autoSlide() {
    const slideCount = slider.children.length;
    if (!slideCount) return;

    currentIndex++;
    if (currentIndex >= slideCount) {
      currentIndex = 0;
    }

    slider.scrollTo({
      left: currentIndex * window.innerWidth,
      behavior: "smooth"
    });
  }

  // Auto slide every 2 seconds
  let slideInterval = setInterval(autoSlide, 2000);

  // Stop auto slide when user scrolls manually
  slider.addEventListener("touchstart", () => {
    clearInterval(slideInterval);
  });

  // Restart autoplay after scroll
  slider.addEventListener("touchend", () => {
    slideInterval = setInterval(autoSlide, 2000);
  });

  // Also support mouse drag for desktop users
  slider.addEventListener("mousedown", () => {
    clearInterval(slideInterval);
  });
  slider.addEventListener("mouseup", () => {
    slideInterval = setInterval(autoSlide, 2000);
  });
}


// ==================== Smooth scroll to menu ====================
const exploreBtn = document.getElementById("exploreBtn");
exploreBtn?.addEventListener("click", () => {
  document.querySelector("#menu").scrollIntoView({ behavior: "smooth" });
});


// ==================== Navbar animation on scroll ====================
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  if (!nav) return;

  if (window.scrollY > 80) {
    nav.style.boxShadow = "0 2px 15px rgba(0,0,0,0.08)";
  } else {    
    nav.style.boxShadow = "none";
  }
});


// ==================== Contact form WhatsApp redirect ====================
const contactForms = document.querySelectorAll(".contact-form");
const whatsappNumber = "919392226262";
const whatsappMessage = encodeURIComponent(
  "Hi Food 'N' Fun, I want to know more about your menu."
);
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

contactForms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    window.location.href = whatsappUrl;
  });
});


// ==================== Soups Filter Function ====================
function filterSoups(category) {
  const veg = document.querySelector('.soup-category.veg');
  const nonveg = document.querySelector('.soup-category.nonveg');
  const buttons = document.querySelectorAll('.filter-btn');

  if (!veg || !nonveg) return;

  // Highlight active button
  buttons.forEach(btn => btn.classList.remove('active', 'veg', 'nonveg'));
  if (category === 'all') {
    buttons[0].classList.add('active');
  } else if (category === 'veg') {
    buttons[1].classList.add('active', 'veg');
  } else {
    buttons[2].classList.add('active', 'nonveg');
  }

  // Show/hide categories
  veg.style.display = (category === 'all' || category === 'veg') ? 'block' : 'none';
  nonveg.style.display = (category === 'all' || category === 'nonveg') ? 'block' : 'none';
}
