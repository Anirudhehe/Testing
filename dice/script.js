var randN1 = Math.floor(Math.random() * 6 + 1);
var randN2 = Math.floor(Math.random() * 6 + 1);

console.log(randN1);
console.log(randN2);

document.querySelector(".img1").setAttribute("src", "./images/dice4.png");

if (randN1 === 1) {
  document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
} else if (randN1 === 2) {
  document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
} else if (randN1 === 3) {
  document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
} else if (randN1 === 4) {
  document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
} else if (randN1 === 5) {
  document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
} else if (randN1 === 6) {
  document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
}

if (randN2 === 1) {
  document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
} else if (randN2 === 2) {
  document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
} else if (randN2 === 3) {
  document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
} else if (randN2 === 4) {
  document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
} else if (randN2 === 5) {
  document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
} else if (randN2 === 6) {
  document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
}

if (randN1 > randN2) {
  document.querySelector("h1").textContent = "Player 1 Wins 🚩";
} else if (randN1 === randN2) {
  document.querySelector("h1").textContent = "Draw";
} else {
  document.querySelector("h1").textContent = "Player 2 Wins 🚩";
}
