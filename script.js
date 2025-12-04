const chatBtn = document.getElementById("chatBtn");
const chatBox = document.getElementById("chatBox");
const closeChat = document.getElementById("closeChat");
const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");

chatBtn.onclick = () => chatBox.style.display = "flex";
closeChat.onclick = () => chatBox.style.display = "none";

sendBtn.onclick = () => sendMessage();
chatInput.addEventListener("keypress", e => { if(e.key === "Enter") sendMessage(); });

function sendMessage() {
  const msg = chatInput.value.trim();
  if (!msg) return;
  const bubble = document.createElement("div");
  bubble.textContent = "You: " + msg;
  bubble.style.margin = "10px 0";
  chatMessages.appendChild(bubble);
  chatInput.value = "";
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

const scrollElements = document.querySelectorAll("section");
const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };

const scrollObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle("visible", entry.isIntersecting);
  });
}, observerOptions);

scrollElements.forEach(el => scrollObserver.observe(el));

document.getElementById("darkModeBtn").onclick = () =>
  document.body.classList.toggle("dark-mode");

document.getElementById("buySensorBtn").onclick = () =>
  document.getElementById("ctaFinal").scrollIntoView({ behavior: "smooth" });

document.getElementById("getStartedBtn").onclick = () =>
  document.getElementById("hero").scrollIntoView({ behavior: "smooth" });

document.getElementById("heroCTA").onclick = () =>
  document.getElementById("features").scrollIntoView({ behavior: "smooth" });
