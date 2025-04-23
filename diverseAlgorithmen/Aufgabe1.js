//Schreibe eine Funktion, die alle Zahlen von 1 bis 100 durchgeht und die Summe aller Vielfachen von 3 oder 5 berechnet.
let numbArray = [];
let sum = 0;

function CreateArrayOfNumbers(limit) {
  for (i = 1; i <= limit; i++) {
    numbArray.push(i);
  }
  return numbArray;
}

function Restrictions(Array) {
  Array.forEach((element) => {
    if (element % 3 == 0 || element % 5 == 0) {
      sum += element;
      console.log(sum);
      console.log(element);
    }
  });
  return sum;
}
CreateArrayOfNumbers(100);
Restrictions(numbArray);
console.log(numbArray);
console.log(sum);
