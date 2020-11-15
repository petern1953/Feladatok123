'use strict'

const handleClick = (button) => {
    button.addEventListener('click', () => console.log(button.innerText));
}

let buttons = document.querySelectorAll('.button');

for (let button of buttons) {
    handleClick(button);
}