const newsBox = document.querySelector(".news-box");
const newsItems = document.querySelectorAll(".news-box-container");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let index = 0;

function showSlide(index) {
  const itemWidth = newsItems[0].clientWidth + 30; // Add gap width
  newsBox.style.transform = `translateX(${-index * itemWidth}px)`;
}

prevButton.addEventListener("click", () => {
  index = index > 0 ? index - 1 : newsItems.length - 1;
  showSlide(index);
});

nextButton.addEventListener("click", () => {
  index = index < newsItems.length - 1 ? index + 1 : 0;
  showSlide(index);
});
