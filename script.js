const SECRET_KEY = "UNIVERSAL_HACKER_RAT_2025";

// ===== INDEX PAGE =====
function checkKey() {
  const inputKey = document.getElementById("accessKey").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  if (inputKey === SECRET_KEY) {
    localStorage.setItem("rat_access", "granted");
    window.location.href = "share.html";
  } else {
    errorMsg.textContent = "❌ Invalid Key. Access Denied!";
  }
}

// ===== SHARE PAGE =====
function continueToTerminal() {
  if (localStorage.getItem("rat_access") !== "granted") {
    alert("Access denied! Please enter the correct key first.");
    window.location.href = "index.html";
    return;
  }

  const progressBar = document.getElementById("progressBar");
  let progress = 0;

  const interval = setInterval(() => {
    progress += 10;
    progressBar.style.width = progress + "%";

    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        window.location.href = "terminal.html";
      }, 500);
    }
  }, 600); // Slow for realism
}

// ===== TERMINAL PAGE =====
const terminalCommands = [
  "[+] Initializing secure RAT tunnel...",
  "[+] Loading encrypted modules...",
  "[+] Injecting payload into target device...",
  "[+] Gaining root privileges...",
  "[+] Connection established to victim device...",
  "[+] Fetching device information...",
  "     Device Model: Android_X",
  "     OS Version: Android 13.1",
  "     IP Address: 192.168.1.35",
  "[+] Deploying remote access trojan...",
  "[✔] RAT Deployment Successful!",
  "[!] System Integrity Breach Detected...",
  "[!!] Critical failure... Initiating self-destruct protocol...",
];

let currentLine = 0;

function runTerminalSimulation() {
  if (localStorage.getItem("rat_access") !== "granted") {
    alert("Access denied! Start from beginning.");
    window.location.href = "index.html";
    return;
  }

  const terminalOutput = document.getElementById("terminalOutput");

  const interval = setInterval(() => {
    if (currentLine < terminalCommands.length) {
      const line = document.createElement("div");
      line.textContent = terminalCommands[currentLine];
      terminalOutput.appendChild(line);
      terminalOutput.scrollTop = terminalOutput.scrollHeight;
      currentLine++;
    } else {
      clearInterval(interval);
      setTimeout(() => {
        document.body.innerHTML = `
          <div style="display:flex;align-items:center;justify-content:center;height:100vh;background:black;color:red;font-size:2rem;text-align:center;">
            <b>SYSTEM CRASHED</b><br><br>Restart Required!
          </div>
        `;
      }, 1500);
    }
  }, 900); // Slow & realistic typing
}

// Auto-run based on page
document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.getAttribute("data-page");
  if (page === "terminal") {
    runTerminalSimulation();
  }
});
