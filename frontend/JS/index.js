// ===== Keep nav highlighting on scroll (unchanged behavior) =====
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("header nav a");

function setActiveOnScroll() {
  const top = window.scrollY + 120; // small offset for sticky header

  sections.forEach((sec) => {
    const start = sec.offsetTop;
    const end = start + sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (top >= start && top < end) {
      navLinks.forEach((link) => link.classList.remove("active"));
      const current = document.querySelector(`header nav a[href="#${id}"]`);
      if (current) current.classList.add("active");
    }
  });
}

window.addEventListener("scroll", setActiveOnScroll);
setActiveOnScroll();

// ===== Smooth scroll on nav click (no design changes) =====
navLinks.forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (!href || !href.startsWith("#")) return; // allow normal links

    e.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;

    const headerOffset = document.querySelector('.header')?.offsetHeight || 0;
 // adjust only if section hides under header
    const y =
      target.getBoundingClientRect().top + window.pageYOffset - headerOffset;

    window.scrollTo({ top: y, behavior: "smooth" });

    // set active immediately on click
    navLinks.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  });
});

// ===== Contact form -> backend =====
// ⚠️ Use localhost while testing, change to deployed URL later
const API_URL = "http://localhost:5000";

const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const payload = Object.fromEntries(new FormData(contactForm).entries());

    const submitBtn =
      contactForm.querySelector('button[type="submit"]') ||
      contactForm.querySelector(".btn");
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";
    }

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Failed");

      alert("Thanks! Your message has been sent.");
      contactForm.reset();
    } catch (err) {
      console.error(err);
      alert("Sorry, something went wrong. Please try again.");
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Submit";
      }
    }
  });
}
