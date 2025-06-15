const container = document.getElementById("puzzle-container");
const message = document.getElementById("puzzle-message");

let positions = [];
const size = 4;
const total = size * size;

for (let i = 0; i < total; i++) positions.push(i);
shuffleArray(positions);

positions.forEach(pos => {
  const piece = document.createElement("div");
  piece.className = "puzzle-piece";
  const x = pos % size;
  const y = Math.floor(pos / size);
  piece.style.backgroundPosition = `-${x * 80}px -${y * 80}px`;
  piece.setAttribute("data-correct", pos);
  container.appendChild(piece);
});

let dragged;

container.addEventListener("dragstart", e => {
  dragged = e.target;
});

container.addEventListener("dragover", e => {
  e.preventDefault();
});

container.addEventListener("drop", e => {
  e.preventDefault();
  if (dragged && e.target.className === "puzzle-piece") {
    const draggedIndex = [...container.children].indexOf(dragged);
    const targetIndex = [...container.children].indexOf(e.target);

    container.insertBefore(dragged, container.children[targetIndex]);
    container.insertBefore(e.target, container.children[draggedIndex]);

    checkPuzzle();
  }
});

document.querySelectorAll(".puzzle-piece").forEach(piece => {
  piece.setAttribute("draggable", "true");
});

function checkPuzzle() {
  const current = [...container.children];
  const correct = current.every((el, idx) => +el.getAttribute("data-correct") === idx);

  if (correct) {
    message.textContent = "Cada pieza encaja porque el destino nos pensó juntos 💖";
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
