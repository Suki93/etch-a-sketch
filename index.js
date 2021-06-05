const container = document.querySelector(".container");
const btnBlack = document.createElement("button");
const btnGray = document.createElement("button");
const btnRGB = document.createElement("button");
const btnSize = document.createElement("button");
const buttonsContainer = document.querySelector(".buttons");

window.onload = () => {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => box.addEventListener("mouseover", () => {
        box.style.background = "black";
    }))
}

function createDivs(col, rows) {
    for( let i = 0; i < (col * rows); i++) {
        const div = document.createElement("div");
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add("box");
    }
}

createDivs(16,16);

function grayColor() {
    const boxes = container.querySelectorAll(".box");
    btnGray.textContent = "Gray";
    btnGray.addEventListener("click", () => {
     boxes.forEach(box => box.addEventListener("mouseover", () => {
        let randomN = Math.floor(Math.random() * 255);
        box.style.background = `rgb(${randomN}, ${randomN}, ${randomN})`;
     }));
    });

    buttonsContainer.appendChild(btnGray).classList.add("btn");
}
grayColor();


function blackColor() {
    const boxes = container.querySelectorAll(".box");
    btnBlack.textContent = "Black";
    btnBlack.addEventListener("click", () => {
     boxes.forEach(box => box.addEventListener("mouseover", () => {
        box.style.background = "black";
     }));
    });

    buttonsContainer.appendChild(btnBlack).classList.add("btn");
}
blackColor();


function rgbColor() {
    const boxes = container.querySelectorAll(".box");
    btnRGB.textContent = "RGB";
    btnRGB.addEventListener("click", () => {
     boxes.forEach(box => box.addEventListener("mouseover", () => {
        let R = Math.floor(Math.random() * 255);
        let B = Math.floor(Math.random() * 255);
        let G = Math.floor(Math.random() * 255);
        box.style.background = `rgb(${R}, ${B}, ${G})`;
     }));
    });

    buttonsContainer.appendChild(btnRGB).classList.add("btn");
}
rgbColor();

function reset() {
    const boxes = container.querySelectorAll(".box");
    boxes.forEach(box => box.remove());
}

function reSize() {
    btnSize.textContent = "Grid Size";
    btnSize.addEventListener("click", () => {
        let user = prompt("Type in size, you desire");
        if (user === null || user === 1) {
            reset();
            createDivs(16,16);
            grayColor();
            blackColor();
            rgbColor();
        } else {
            reset();
            createDivs(user,user);
            grayColor();
            blackColor();
            rgbColor();
        }
    })
    buttonsContainer.appendChild(btnSize).classList.add("btn");
}
reSize();

function backgroundAnim() {
    colors = ["white", "lightgray"];
    const section = document.querySelector(".section");
    const span = document.createElement("span");

    let size = Math.random() * 50;

    span.style.width = 10 + size + "px";
    span.style.height = 10 + size + "px";

    span.style.borderRadius = `${size}%`;
    span.style.top = Math.random() * innerHeight + "px";
    span.style.left = Math.random() * innerWidth + "px";

    const backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    span.style.background = backgroundColor;
    section.appendChild(span);

    setTimeout(() => {span.remove()}, 5000);
}

setInterval(backgroundAnim, 150);