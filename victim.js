// js/victim.js

const startBtn = document.getElementById('startBypass');
const input = document.getElementById('victimInput');
const bypassDiv = document.getElementById('bypassAnimation');

startBtn.addEventListener('click', () => {
  const value = input.value.trim();
  
  if (!value) {
    alert("Please enter target details!");
    return;
  }

  // Hide input and start animation
  input.style.display = 'none';
  startBtn.style.display = 'none';
  bypassDiv.classList.remove('hidden');

  let steps = [
    "Establishing secure connection...",
    "Injecting payload...",
    "Bypassing firewall...",
    "Extracting device data...",
    "Finalizing access..."
  ];

  let index = 0;
  const stepText = document.createElement('p');
  stepText.className = "sub-text";
  bypassDiv.appendChild(stepText);

  const interval = setInterval(() => {
    if (index < steps.length) {
      stepText.textContent = steps[index];
      index++;
    } else {
      clearInterval(interval);
      window.location.href = "terminal.html";
    }
  }, 1500); // 1.5 sec delay between steps
});
