// 1. Feladat
// Hozz létre egy html fájlt benne 3 gombbal! 
// A gombok szövegei az alábbiak legyenek: 
// Első, Második, Harmadik. Mindegyik gombnak add meg a 'button' class-t!
// Készíts egy JavaScript fájlt, és linkeld be a html oldaladba! 
// Írj egy függvénykifejezést arrow function segítségével.
// A függvény neve handleClick legyen. 
// A függvény a meghívása után mindegyik gombhoz hozzáad egy eseményfigyelőt, amely
// kattintásra kiírja a gomb szövegét a konzolra. A függvényen belül ciklust használj, 
// tehát ne manuálisan, egyesével add a gombokhoz az eseményfigyelőt!

'use strict'

// const handleClick = (button) => {
//     let buttons = document.querySelectorAll('.button');
//     for (let button of buttons) {
//         button.addEventListener('click', () => console.log(button.innerText));
//     }
// }

const handleClick = () => {
    let buttons = document.querySelectorAll('.button');
    for (let button of buttons) {
        button.addEventListener('click', (ev) => {
            console.log(ev.target);
            console.log(ev.target.textContent);
            console.log(button.textContent);
        });
    }
}

// handleClick();

// function addEvent2button(btn) {
//     btn.addEventListener('click', () => console.log(btn.innerText));
// }

// const handleClick2 = (button) => {
//     let buttons = document.querySelectorAll('.button');
//     for (let i = 0; i < buttons.length; i += 1) {
//         addEvent2button(buttons[i]);
//     }
// }

function addEvent2button(btn) {
    btn.addEventListener('click', (ev) => {
        console.log(ev.target);
        console.log(ev.target.innerText);
        console.log(btn.innerText);
    });
}

const handleClick2 = () => {
    let buttons = document.querySelectorAll('.button');
    for (let i = 0; i < buttons.length; i += 1) {
        addEvent2button(buttons[i]);
    }
}

// handleClick2();
