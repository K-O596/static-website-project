// list of imgs
const imageList = [
  "./img/201911241201482.png",
  "./img/2fe3b0f8cb7efbe86c77bac039f9140b.png",
  "./img/toby-fox.gif",
];

// It changes imgs at hover time
function changeImageOnHover() {
  const randomIndex = Math.floor(Math.random() * 7);
  const randomImage = imageList[Math.floor(randomIndex / 3)]; //This Math.floor number has a 1/7 probably of being 2, only 3rd img is a rare pattern.
  document.getElementById("randomImage").src = randomImage;
  console.log("mouseover event triggered");
}

// It gives mouseover event listner to an id
document
  .getElementById("pipe")
  .addEventListener("mouseenter", changeImageOnHover);