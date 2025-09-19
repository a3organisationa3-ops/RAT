// ===== Configuration =====
const correctKey = "DARKWEB123"; // Change this to your secret key
let shareCount = 0;
const requiredShares = 5;

// ===== Verify Key =====
function verifyKey() {
  const key = document.getElementById("access-key").value.trim();
  const errorMsg = document.getElementById("error-message");

  if (key === correctKey) {
    window.location.href = "share.html";
  } else {
    errorMsg.textContent = "❌ Invalid Key! Try Again.";
  }
}

// ===== Buy Key =====
function buyKey() {
  const phoneNumber = "919836942455"; // Replace with your WhatsApp number
  const message = encodeURIComponent("Hello, I want to buy a key for Dark Web RAT Tool.");
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
}

// ===== Share on WhatsApp =====
function shareOnWhatsApp() {
  const shareText = encodeURIComponent(
    "🔥 Dark Web RAT TOOL 🔥\nGet this tool here: https://a3organisationa3-ops.github.io/RAT/"
  );

  window.location.href = `whatsapp://send?text=${shareText}`;

  // Update share count
  shareCount++;
  document.getElementById("share-count").innerText = `Shares completed: ${shareCount} / ${requiredShares}`;

  if (shareCount >= requiredShares) {
    document.getElementById("continue-btn").classList.remove("hidden");
  }
}

// ===== Go to RAT Panel =====
function goToPanel() {
  window.location.href = "panel.html";
}

// ===== Run Terminal Commands =====
function runCommand() {
  const input = document.getElementById("command-input").value.trim();
  const outputDiv = document.getElementById("command-output");

  let response = "";
  switch (input.toLowerCase()) {
    case "help":
      response = "Available commands: help, info, scan, exit";
      break;
    case "info":
      response = "RAT Tool v1.0 — Dark Web Access Granted.";
      break;
    case "scan":
      response = "Scanning target... Complete!";
      break;
    case "exit":
      response = "Session terminated.";
      break;
    default:
      response = "Unknown command. Type 'help' for available commands.";
  }

  outputDiv.innerHTML += `<p>> ${input}</p><p>${response}</p>`;
  document.getElementById("command-input").value = "";
}
