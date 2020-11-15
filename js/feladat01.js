const handleClick = (button) => {
    button.addEventListener("click", () => console.log(this.innerText));
}

let buttons = document.querySelectorAll(".button");

for (button of buttons) {
    handleClick(button);
}