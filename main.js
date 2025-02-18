// toggle and responsive
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navList = document.querySelector("nav");

  burger.addEventListener("click", () => {
    navList.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });

  document.addEventListener("click", function (e) {
    if (!burger.contains(e.target) && !navList.contains(e.target)) {
      navList.classList.remove("nav-active");
      burger.classList.remove("toggle-burger");
    }
  });
};

navSlide();

//clear form before unload
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};
