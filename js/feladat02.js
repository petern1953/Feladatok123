// 2. Feladat
// Hozz létre két függvénykifejezést arrow function-nel!
// A függvények neve 'summation' és 'subtraction'.
// Mindegyik függvény két paramétert kap, ezek neve 'a' és 'b'.
// Amennyiben bármelyik paraméter hiányozna a függvény meghívásakor,
// úgy az alapértelemezett érték a 0 legyen.
// A summation visszatér a két szám összegével,
// a subtraction visszatér a két szám különbségével.

const summation = (a = 0, b = 0) => a + b;

const subtraction = (a = 0, b = 0) => a - b;

console.log(summation(2, 3));
console.log(summation(2));

console.log(subtraction(5, 3));
console.log(subtraction(5));
