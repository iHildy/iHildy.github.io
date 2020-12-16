const words = ["Ian", "iHildy"];

const changeWord = () => {
  let randomWordChoice = words[Math.floor(Math.random() * words.length)];
  while (
    randomWordChoice === document.getElementById("changing-word").innerHTML
  ) {
    randomWordChoice = words[Math.floor(Math.random() * words.length)];
  }
  document.getElementById("changing-word").innerHTML = "";

  let letterCount = 0;

  const getNextLetter = () => {
    if (!(letterCount > randomWordChoice.length)) {
      const result = [...randomWordChoice].slice(0, letterCount).join("");
      document.getElementById("changing-word").innerHTML = result;
      letterCount += 1;
      setTimeout(getNextLetter, Math.random() * 100);
    }
  };
  getNextLetter();

  setTimeout(changeWord, 2500);
};
changeWord();
