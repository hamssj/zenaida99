const correctDate = "12-06-2025"; // Cambié la fecha correcta aquí

function checkDate() {
  const input = document.getElementById("date-input").value;
  const error = document.getElementById("login-error");

  if (input === correctDate) {
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("gallery-screen").style.display = "block";
    document.getElementById("bg-music").play();
    error.textContent = "";
  } else {
    error.textContent = "Fecha incorrecta 💔";
  }
}

function pressKey(char) {
  const input = document.getElementById("date-input");
  if (input.value.length < 10) {
    // Agregar guiones automáticamente en posición 2 y 5
    if ((input.value.length === 2 || input.value.length === 5) && char !== '-') {
      input.value += "-";
    }
    input.value += char;
  }
}

function backspace() {
  const input = document.getElementById("date-input");
  input.value = input.value.slice(0, -1);
}

const photos = [
  { src: "fotos/foto1.jpg", frase: "Zenaida eres única y brillante 🌟" },
  { src: "fotos/foto2.jpg", frase: "La belleza comienza en el momento en que decides ser tú misma 💖" },
  { src: "fotos/foto3.jpg", frase: "Cada día es una nueva oportunidad para brillar ✨" },
  { src: "fotos/foto4.jpg", frase: "Confía en ti misma y todo será posible nunca lo olvides🌈" },
  { src: "fotos/foto5.jpg", frase: "Tu sonrisa ilumina el mundo alrededor 😊" },
  { src: "fotos/foto6.jpg", frase: "Sé valiente, sé fuerte, sé tú misma se la mejor enfermera 💪" },
  { src: "fotos/foto7.jpg", frase: "La confianza es el mejor outfit que puedes llevar 👗" },
  { src: "fotos/foto8.jpg", frase: "El amor propio es el inicio de una vida maravillosa ❤️" },
  { src: "fotos/foto9.jpeg", frase: "Brilla con luz propia y contagia alegría 🌟" },
  { src: "fotos/foto10.jpeg", frase: "Tu valor no depende de la opinión de otros 💎" },
  { src: "fotos/foto11.jpeg", frase: "Cada paso que das te acerca más a tus sueños 🚀" },
  { src: "fotos/foto12.jpeg", frase: "Eres suficiente tal y como eres 💖" },
  { src: "fotos/foto13.jpeg", frase: "Las estrellas no pueden brillar sin oscuridad ✨" },
  { src: "fotos/foto14.jpeg", frase: "Sé la mejor versión de ti misma todos los días 🌸" },
  { src: "fotos/foto15.jpeg", frase: "Nunca dejes que nadie apague tu luz 🔥" },
  { src: "fotos/foto16.jpeg", frase: "Sé valiente, sé fuerte, sé tú misma 💪🌸" },
  { src: "fotos/foto17.jpeg", frase: "El poder está en creer en ti misma 💖🔥" },
  { src: "fotos/foto18.jpeg", frase: "Brilla con luz propia y contagia alegría 🌟🎉" }
];

const gallery = document.getElementById("gallery");

photos.forEach((photo, index) => {
  const img = document.createElement("img");
  img.src = photo.src;
  img.alt = `Foto ${index + 1}`;
  img.addEventListener("click", () => {
    openModal(photo.src, photo.frase);
  });
  gallery.appendChild(img);
});

function openModal(src, frase) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const modalText = document.getElementById("modal-text");

  modal.style.display = "block";
  modalImg.src = src;
  modalText.textContent = frase;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    closeModal();
  }
}

const bgMusic = document.getElementById("bg-music");
let musicOn = true;

function toggleMusic() {
  if (musicOn) {
    bgMusic.pause();
  } else {
    bgMusic.play();
  }
  musicOn = !musicOn;
}

// Código partículas animadas

const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particlesArray;

function initParticles() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  particlesArray = [];
  const numberOfParticles = Math.floor(window.innerWidth / 10);

  for (let i = 0; i < numberOfParticles; i++) {
    particlesArray.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.3,
      opacitySpeed: 0.005 + Math.random() * 0.01
    });
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesArray.forEach(p => {
    p.x += p.speedX;
    p.y += p.speedY;
    p.opacity += p.opacitySpeed;

    if (p.opacity > 0.8 || p.opacity < 0.3) p.opacitySpeed = -p.opacitySpeed;
    if (p.x < 0) p.x = canvas.width;
    if (p.x > canvas.width) p.x = 0;
    if (p.y < 0) p.y = canvas.height;
    if (p.y > canvas.height) p.y = 0;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2, false);
    ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
    ctx.fill();
  });

  requestAnimationFrame(animateParticles);
}

window.addEventListener('resize', () => {
  initParticles();
});

initParticles();
animateParticles();
