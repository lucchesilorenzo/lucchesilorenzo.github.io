const scrollTopBtn = document.querySelector("#scroll-top-btn");
const navLinks = document.querySelectorAll("nav a");
const copyrightYear = document.querySelector("#year");

copyrightYear.textContent = new Date().getFullYear();
copyrightYear.style.fontWeight = "400";

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
