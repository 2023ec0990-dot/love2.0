let pages = document.getElementsByClassName("page");
let current = 0;
let music = document.getElementById("bgm");

// UNLOCK
function unlock() {
  let pass = document.getElementById("pass").value.trim();
  if (pass === "22042025") {
    document.getElementById("lock").style.display = "none";
    document.getElementById("card").style.display = "block";

    music.volume = 0.3;
    music.play();

    showPage();
    typeName();
  } else {
    document.getElementById("error").innerText = "Wrong Password 😢";
  }
}

// PAGE CONTROL
function showPage() {
  for (let i = 0; i < pages.length; i++) {
    pages[i].style.display = "none";
  }
  pages[current].style.display = "block";
}

function next() {
  if (current < pages.length - 1) {
    current++;
    showPage();
  }
}

function prev() {
  if (current > 0) {
    current--;
    showPage();
  }
}

// TYPING NAME EFFECT
let text = "My Love ❤️";
let i = 0;
function typeName() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeName, 150);
  }
}

// HEART ANIMATION
setInterval(() => {
  let heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 4000);
}, 500);

// PROPOSAL BUTTONS
function yes() {
  document.getElementById("answer").innerText =
    "theariyum di en maman mavaleaaaaaa😍💍 uuuuuuuummmmmmmaaaaaaaaahhhhhhhhhh  ❤️ summa try panni paru no hahahahahahahahah...";
}

function no() {
  document.getElementById("answer").innerText =
    "haha 😜 ungaluku only YES ❤️ mattum tha applicable sonna NO thoduviya di butter";
}