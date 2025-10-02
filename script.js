  const toggleBtn = document.querySelector(".menu-toggle");
  const closeBtn = document.querySelector(".close-btn");
  const nav = document.getElementById("nav");

  toggleBtn.addEventListener("click", () => {
    nav.classList.add("show");
    document.body.style.overflow = "hidden";   // disable scrolling
  });

  closeBtn.addEventListener("click", () => {
    nav.classList.remove("show");
    document.body.style.overflow = "";         // restore scrolling
  });