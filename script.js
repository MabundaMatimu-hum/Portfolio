
// ========== MOBILE MENU ==========
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});

// Close menu when clicking a link
document.querySelectorAll(".navbar-links a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
  });
});

// ========== ACTIVE NAVIGATION ON SCROLL ==========
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ========== CONTACT FORM HANDLING ==========
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const status = document.getElementById("formStatus");
    
    status.textContent = "Sending...";
    status.style.color = "#2B4C7E";
    
    // Formspree or EmailJS integration example
    // Replace with your actual endpoint
    try {
      // Example using Formspree (free)
      const response = await fetch("https://formspree.io/f/YOUR_ENDPOINT", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message })
      });
      
      if (response.ok) {
        status.textContent = "Message sent successfully! I'll get back to you soon.";
        status.style.color = "green";
        contactForm.reset();
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      status.textContent = "Oops! Something went wrong. Please email me directly at mabundamatimu11@gmail.com";
      status.style.color = "red";
    }
  });
}

// ========== SMOOTH SCROLL FOR ALL ANCHOR LINKS ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// ========== YEAR AUTO-UPDATE IN FOOTER ==========
const footerYear = document.querySelector(".footer-bottom p");
if (footerYear) {
  const currentYear = new Date().getFullYear();
  footerYear.textContent = `© ${currentYear} Matimu Mabunda. All Rights Reserved.`;
}