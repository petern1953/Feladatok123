// 3. Feladat
// Hozz létre egy függvénykifejezést arrow function-nel!
// A függvény neve 'personDataLog' legyen.
// A függvény paraméterként egy objektumot vár, amely
// 'firstname', 'lastname' és 'age' tulajdonsággal rendelkezik.
// Amennyiben bármelyik tulajdonság hiányozna, úgy rendre a következő
// alapértelmezett értékeket vegyék fel:
// - firstname: John, - lastname: Doe, - age: 33
// A függvény kiírja az adott illető adatait a konzolra az adott formátumban:
// My name is 'firstname', 'lastname'. I'm 'age' years old.
// A firstname, lastname és age helyére a paraméterként kapott
// objektumtulajdonságok értékét kell behelyettesíteni.


const personDataLog = ({ firstName = 'John', lastName = 'Doe', age = 33 } = {}) => {
    console.log("My name is " + firstName + " " + lastName + ". I'm " + age + " years old.");
    console.log(`My name is ${firstName} ${lastName}. I'm ${age} years old.`);
};

console.log(personDataLog({ firstName: 'Kuku', lastName: 'Benkó' }));
console.log(personDataLog({}));