// Monty holl problem

function Game() {
  // boxes
  const boxes = 3;

  // randam boxes
  const correctBox = Math.floor(Math.random() * boxes) + 1;
  console.log(correctBox);
  console.log("choose a 1,2 or 3 box.");

  // player choise
  const playerChoice = parseInt(prompt("choose a 1, 2 or 3 box.:"), 10);
  console.log(playerChoice);

  if (playerChoice == 0) {
    console.log("Fisish it!");
  } else {
    let hostOpenBox;
    do {
      hostOpenBox = Math.floor(Math.random() * boxes) + 1;
    } while (hostOpenBox === correctBox || hostOpenBox == playerChoice);

    console.log(`The host opened box ${hostOpenBox}.`);

    // a chance of changing the choise
    const changeChoice = confirm("Do you change the choice");

    // finalchoice
    const finalChoice = changeChoice
      ? 6 - playerChoice - hostOpenBox
      : playerChoice;

    console.log(`Final choice is ${finalChoice}.`);

    // result
    if (finalChoice == correctBox) {
      console.log("Conglaturation！You win！");
    } else {
      console.log(`faild. correct box is ${correctBox}`);
    }
  }
}

function handleButtonClick() {
  // game start
  Game();
}

document.getElementById("start").addEventListener("click", handleButtonClick);
