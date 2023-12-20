// Monty holl problem

// get all img elements
var images = document.querySelectorAll('img');

images.forEach(function(img) {
  img.addEventListener('click', function() {
      // get custom datas from imgs
      var customData = this.dataset.box;
      console.log('This is:', customData);
  });
});

function Game() {
  // boxes
  const boxes = 3;

  // randam boxes
  const correctBox = Math.floor(Math.random() * boxes) + 1;
  console.log(`correctbox is ${correctBox}`);
  console.log("choose an 1, 2 or 3 box.");

  // player choise
  const playerChoice = parseInt(prompt("choose an 1, 2 or 3 box.:"), 10);
  console.log(playerChoice);

  if (playerChoice >= 1 && playerChoice <= 3) {
    let hostOpenBox;
    do {
      hostOpenBox = Math.floor(Math.random() * boxes) + 1;
    } while (hostOpenBox === correctBox || hostOpenBox == playerChoice);

    console.log(`The host opened box ${hostOpenBox}.`);

    // a chance of changing the choice
    const changeChoice = confirm("Do you change the choice");

    // finalchoice
    const finalChoice = changeChoice
      ? 6 - playerChoice - hostOpenBox //It'll work if you choose OK, and this answer must be an unchoosed number.
      : playerChoice; //Else

    console.log(`Final choice is ${finalChoice}.`);

    // result
    if (finalChoice == correctBox) {
      console.log("Conglaturation！You win！");
    } else {
      console.log(`faild. correct box is ${correctBox}`);
    }
  } else {
    console.log("Finish it!");
    alert("Finish it!");
  }
}

function handleButtonClick() {
  // game start
  Game();
}

document.getElementById("start").addEventListener("click", handleButtonClick);