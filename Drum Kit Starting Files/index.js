var noDrums = document.querySelectorAll("button").length;

for (i = 0; i < noDrums; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", f);
}

function f() {
  var inn = this.innerHTML;
  switch (inn) {
    case "w":
      var t1 = new Audio("sounds/tom-1.mp3");
      t1.play();
      break;

    case "a":
      var t2 = new Audio("sounds/tom-2.mp3");
      t2.play();
      break;
    case "s":
      var t3 = new Audio("sounds/tom-3.mp3");
      t3.play();
      break;
    case "d":
      var t4 = new Audio("sounds/tom-4.mp3");
      t4.play();
      break;
    case "j":
      var s = new Audio("sounds/snare.mp3");
      s.play();
      break;
    case "k":
      var c = new Audio("sounds/crash.mp3");
      c.play();
      break;
    case "l":
      var kb = new Audio("sounds/kick-bass.mp3");
      kb.play();
      break;
  }
}
