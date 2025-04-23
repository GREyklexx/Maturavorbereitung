/* 1. Challenge assoziation von Dezimal & RömischerBuchstabe
-> Dictionary

Ein Dictionary lässt und eigentlich zwei Assozierte Arrays erstellen, ein eintrag, entspricht einem anderem.
Das würde Perfekt passen:
I : 1
V : 5
X : 10
...
*/
const romanMap = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};
// 2. Challenge: finden von Zahlen in der Ausgangszahl -  hierfür brauchen wir die Ausgangszahl

let decimalNumber = 1322;
let romanNumber = "";
// Die Logik sieht wie folgt aus: Wir wollen schauen, ob die größtmögliche Zahl aus unserem Dictionary hineinpasst, tut sie das, fügen wir diese so oft hinzu, dass wir eine kleinere Zahl nehmen müssen.
for (let [key, value] of Object.entries(romanMap)) {
  while (decimalNumber > value) {
    decimalNumber -= value;
    romanNumber += key;
  }
}
console.log(romanNumber);
