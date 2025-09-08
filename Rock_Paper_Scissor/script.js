const choices = ["R", "P", "S"];
const mapEmoji = { R: "✊", P: "✋", S: "✌️" };

const userScoreEl = document.getElementById("userScore");
const cpuScoreEl = document.getElementById("cpuScore");
const tiesEl = document.getElementById("ties");
const cpuPickEl = document.getElementById("cpuPick");
const userPickEl = document.getElementById("userPick");
const resultText = document.getElementById("resultText");
const nextBtn = document.getElementById("nextBtn");
const resetBtn = document.getElementById("resetBtn");
const choiceButtons = Array.from(document.querySelectorAll(".choice"));

let userScore = 0,
  cpuScore = 0,
  ties = 0;
let roundLocked = false;

function randomCPU() {
  return choices[Math.floor(Math.random() * 3)];
}

function decide(cpu, user) {
  if (cpu === user) return "Tie";
  if (
    (cpu === "S" && user === "P") ||
    (cpu === "P" && user === "R") ||
    (cpu === "R" && user === "S")
  ) {
    return "CPU";
  }
  return "USER";
}

function updateScores(winner) {
  if (winner === "USER") userScore++;
  else if (winner === "CPU") cpuScore++;
  else ties++;
  userScoreEl.textContent = userScore;
  cpuScoreEl.textContent = cpuScore;
  tiesEl.textContent = ties;
}

function showRound(cpu, user, winner) {
  cpuPickEl.textContent = mapEmoji[cpu];
  userPickEl.textContent = mapEmoji[user];

  cpuPickEl.classList.remove("win", "lose", "fade-in");
  userPickEl.classList.remove("win", "lose", "fade-in");

  if (winner === "Tie") {
    resultText.textContent = "It's a tie!";
  } else if (winner === "USER") {
    resultText.textContent = "You win!";
    userPickEl.classList.add("win");
    cpuPickEl.classList.add("lose");
  } else {
    resultText.textContent = "CPU wins!";
    cpuPickEl.classList.add("win");
    userPickEl.classList.add("lose");
  }

  cpuPickEl.classList.add("fade-in");
  userPickEl.classList.add("fade-in");

  updateScores(winner);
  nextBtn.hidden = false;
}

function play(userChoice) {
  if (roundLocked) return;
  roundLocked = true;
  resultText.textContent = "CPU is choosing...";
  // small delay to show CPU thinking and animation
  cpuPickEl.textContent = "…";
  userPickEl.textContent = mapEmoji[userChoice];
  cpuPickEl.classList.remove("win", "lose", "fade-in");
  userPickEl.classList.remove("win", "lose", "fade-in");
  nextBtn.hidden = true;

  setTimeout(() => {
    const cpuChoice = randomCPU();
    const winner = decide(cpuChoice, userChoice);
    showRound(cpuChoice, userChoice, winner);
    setTimeout(() => (roundLocked = false), 300);
  }, 600);
}

choiceButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const c = btn.dataset.choice;
    play(c);
  });
});

// keyboard support: R, P, S
document.addEventListener("keydown", (e) => {
  const key = e.key.toUpperCase();
  if (key === "R" || key === "P" || key === "S") {
    const btn = document.querySelector(`.choice[data-choice="${key}"]`);
    if (btn) btn.click();
  }
});

nextBtn.addEventListener("click", () => {
  cpuPickEl.textContent = "—";
  userPickEl.textContent = "—";
  resultText.textContent = "Make your move";
  nextBtn.hidden = true;
});

resetBtn.addEventListener("click", () => {
  userScore = 0;
  cpuScore = 0;
  ties = 0;
  userScoreEl.textContent = "0";
  cpuScoreEl.textContent = "0";
  tiesEl.textContent = "0";
  cpuPickEl.textContent = "—";
  userPickEl.textContent = "—";
  resultText.textContent = "Make your move";
  nextBtn.hidden = true;
});
