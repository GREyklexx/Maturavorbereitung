let WordsToCheck = ["otto", "auto", "deleuze", "lagerregal"];

function PalindromChecker(wort) {
  let wortArr = wort.split("");

  for (let i = 0; i < wortArr.length / 2; i++) {
    if (wortArr[i] !== wortArr[wortArr.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

WordsToCheck.forEach((element) => {
  console.log(`${element}: ${PalindromChecker(element)}`);
});
