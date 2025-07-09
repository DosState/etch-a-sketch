let numOfSquares = 16;
let root = 0;
let dim = 0;
let board = document.querySelector(".board");
let body = document.querySelector("body");

root = Math.floor(Math.sqrt(numOfSquares));
dim = (1/root)*100;
body.style.setProperty("--squareDim", `${dim}%`);

for (let i=0; i<numOfSquares; i++){
    const square = document.createElement("div");
    square.style.setProperty("--brightness", "1");
    square.style.margin = "0px";
    square.style.padding = "0px";
    square.style.width = "var(--squareDim)";
    square.style.height = "var(--squareDim)";
    square.style.backgroundColor = "white";
    square.style.filter = "brightness(var(--brightness))";
    square.classList.add("square");
    square.addEventListener("mouseenter",(event)=>{
        let brightness = Number(getComputedStyle(event.target).getPropertyValue("--brightness"));
        brightness -= 0.1;
        brightness = Math.max(0, Math.round(brightness*100)/100);
        event.target.style.setProperty("--brightness", `${brightness}`);
    });
    board.appendChild(square);
}