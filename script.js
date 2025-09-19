// ============================
// Share Page Logic Fix
// ============================
let shareCount = parseInt(localStorage.getItem("shareCount")) || 0;
const shareCountDisplay = document.getElementById("shareCount");
const continueBtn = document.getElementById("continueBtn");

// On Page Load
document.addEventListener("DOMContentLoaded", () => {
  updateShareUI();
});

// Update UI based on count
function updateShareUI() {
  shareCountDisplay.innerText = shareCount;
  if (shareCount >= 5) {
    continueBtn.disabled = false;
    document.getElementById("shareStatus").innerText = "All shares completed ✅";
  } else {
    continueBtn.disabled = true;
  }
}

// WhatsApp Auto Share Function
function shareOnWhatsApp() {
  shareCount++;
  localStorage.setItem("shareCount", shareCount);
  updateShareUI();

  const link = "https://a3organisationa3-ops.github.io/RAT/";
  const message = `🔥 Dark RAT Tool 🔥\nHack anyone's phone remotely!\nGet it now:\n${link}`;

  // Auto open WhatsApp
  window.location.href = `https://wa.me/?text=${encodeURIComponent(message)}`;
}

// Go to Terminal
function goToTerminal() {
  localStorage.removeItem("shareCount"); // Reset after unlocking
  window.location.href = "terminal.html";
}
