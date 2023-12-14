// モンティ・ホール問題のシミュレーションゲーム

function Game() {
  // ドアの数
  const boxes = 3;

  // 正解のドアをランダムに選択
  const correctBox = Math.floor(Math.random() * boxes) + 1;
  console.log(correctBox);
  console.log("3つのドアがあります。どのドアを選びますか？");

  // プレイヤーが最初に選ぶドア
  const playerChoice = parseInt(
    prompt("1, 2, 3のいずれかのドアを選んでください:"),
    10
  );

  // ホストが開けるドアをランダムに選択
  let hostOpenBox;
  do {
    hostOpenBox = Math.floor(Math.random() * boxes) + 1;
  } while (hostOpenBox === correctBox || hostOpenBox == playerChoice);

  console.log(`ホストがドア${hostOpenBox}を開けました。`);

  // プレイヤーに選択を変更するか尋ねる
  const changeChoice = confirm("ドアを変更しますか？");

  // プレイヤーの最終的な選択
  const finalChoice = changeChoice
    ? 6 - playerChoice - hostOpenBox
    : playerChoice;

  console.log(`最終的な選択はドア${finalChoice}です。`);

  // 結果を表示
  if (finalChoice == correctBox) {
    console.log("おめでとうございます！正解です！");
  } else {
    console.log(`残念！正解はドア${correctBox}でした。`);
  }
}

// ゲームを実行
Game();
