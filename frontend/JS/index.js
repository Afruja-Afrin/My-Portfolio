const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("header nav a");

function setActiveOnScroll() {
  const top = window.scrollY + 120;

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


navLinks.forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (!href || !href.startsWith("#")) return;

    e.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;

    const headerOffset = document.querySelector('.header')?.offsetHeight || 0;
    const y =
      target.getBoundingClientRect().top + window.pageYOffset - headerOffset;

    window.scrollTo({ top: y, behavior: "smooth" });

    
    navLinks.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  });
});


const letsTalkButton = document.querySelector('a[href="mailto:shayoriafrin50@gmail.com"]');
if (letsTalkButton) {
  letsTalkButton.addEventListener("click", function (e) {
    e.preventDefault();
    
    window.location.href = "mailto:shayoriafrin50@gmail.com?subject=Let's Talk";
  });
}


//Contact form -> backend 
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


