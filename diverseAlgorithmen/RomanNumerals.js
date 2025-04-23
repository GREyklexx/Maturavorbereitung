function RomanNumToArray(romanNum) {
  return romanNum.split("");
}

function RomanArrayToDecimal(romanArray) {
  const decimalArray = [];
  for (let i = 0; i < romanArray.length; i++) {
    switch (romanArray[i]) {
      case "I":
        decimalArray.push(1);
        break;
      case "V":
        decimalArray.push(5);
        break;
      case "X":
        decimalArray.push(10);
        break;
    }
  }
  return decimalArray;
}

function Calculation(decimalArray) {
  let result = 0;
  for (let i = 0; i < decimalArray.length; i++) {
    if (i + 1 < decimalArray.length && decimalArray[i] < decimalArray[i + 1]) {
      result -= decimalArray[i];
    } else {
      result += decimalArray[i];
    }
  }
  return result;
}

function execRomanToDec() {
  const romanArray = RomanNumToArray("VXX");
  console.log(romanArray);

  const decimalArray = RomanArrayToDecimal(romanArray);
  console.log(decimalArray);

  const decimalNumber = Calculation(decimalArray);
  console.log(decimalNumber);
}

execRomanToDec();

execDecToRoman();
