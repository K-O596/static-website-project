document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");

    header.addEventListener("click", function () {
      const content = item.querySelector(".accordion-content");
      content.classList.toggle("show");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const tobyFox = document.querySelector("#toby-fox");
  const Temmie = document.querySelector("#temmie");
  console.log("a");

  Temmie.addEventListener("mouseenter", function () {
    tobyFox.classList.toggle("active");
  });
});
