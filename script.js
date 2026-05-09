// DARK MODE
const toggleBtn = document.getElementById("darkToggle");
const body = document.body;

toggleBtn.addEventListener("click", function () {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    toggleBtn.innerText = "☀️ Light Mode";
  } else {
    toggleBtn.innerText = "🌙 Dark Mode";
  }
});


// SCROLL ANIMATION
const hiddenSections = document.querySelectorAll(".section-hidden");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("section-show");
    }
  });
}, {
  threshold: 0.2
});

hiddenSections.forEach(section => {
  observer.observe(section);
});


// ACTIVE NAVBAR HIGHLIGHT
const allSections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  allSections.forEach(section => {
    const rect = section.getBoundingClientRect();

    if (rect.top <= 150 && rect.bottom >= 150) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (current && link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
// Scroll Progress Bar

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  const scrolled = (scrollTop / scrollHeight) * 100;

  progressBar.style.width = scrolled + "%";
});
// Animated Navbar Underline

const underline = document.getElementById("underline");
const links = document.querySelectorAll("nav ul li a");

links.forEach(link => {
  link.addEventListener("mouseenter", (e) => {
    const rect = e.target.getBoundingClientRect();
    const navRect = e.target.closest("nav").getBoundingClientRect();

    underline.style.width = rect.width + "px";
    underline.style.left = (rect.left - navRect.left) + "px";
  });
});

document.querySelector("nav").addEventListener("mouseleave", () => {
  underline.style.width = "0";
});
const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(e){
  e.preventDefault();

  alert("Message sent successfully  I will contact you soon!");

  form.reset();
});