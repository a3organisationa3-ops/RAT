// ===============================
// Universal Hacker RAT v1.0
//
// ===============================

// -------------------------------
// GLOBAL SETTINGS
// -------------------------------
const SECRET_KEY = "UNIVERSAL_HACKER_RAT_2025";

// Smooth scroll animation
function smoothScrollTo(elementId) {
    document.querySelector(elementId).scrollIntoView({ behavior: "smooth" });
}

// -------------------------------
// INDEX PAGE: KEY AUTHENTICATION
// -------------------------------
function checkKey() {
    const inputKey = document.getElementById("accessKey").value.trim();
    const errorMsg = document.getElementById("errorMsg");

    if (inputKey === SECRET_KEY) {
        localStorage.setItem("rat_access", "granted");
        window.location.href = "share.html";
    } else {
        errorMsg.textContent = "❌ Invalid key! Access denied.";
        errorMsg.style.color = "red";
    }
}

// -------------------------------
// SHARE PAGE: VALIDATE & REDIRECT
// -------------------------------
function continueToTerminal() {
    if (localStorage.getItem("rat_access") !== "granted") {
        alert("Access denied! Please enter the correct key first.");
        window.location.href = "index.html";
        return;
    }

    // Fake loading effect before redirect
    const progressBar = document.getElementById("progressBar");
    let progress = 0;

    const interval = setInterval(() => {
        progress += 10;
        progressBar.style.width = progress + "%";

        if (progress >= 100) {
            clearInterval(interval);
            window.location.href = "terminal.html";
        }
    }, 300);
}

// -------------------------------
// TERMINAL PAGE: FAKE HACKING SIMULATION
// -------------------------------
const terminalCommands = [
    "[+] Connecting to secure server...",
    "[+] Establishing encrypted tunnel...",
    "[+] Bypassing firewall security...",
    "[+] Access granted to root directory.",
    "[+] Downloading payload...",
    "[+] Injecting Universal RAT...",
    "[+] Retrieving target device info...",
    "[+] Target successfully compromised!",
    "[✔] RAT successfully deployed!",
    "[!] Initiating final self-destruct sequence..."
];

let currentLine = 0;
function runTerminalSimulation() {
    if (localStorage.getItem("rat_access") !== "granted") {
        alert("Access denied! Please start from the beginning.");
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
            // Crash screen after 2 seconds
            setTimeout(() => {
                document.body.innerHTML = `
                    <div style="display:flex;align-items:center;justify-content:center;height:100vh;background:black;color:red;font-size:2rem;text-align:center;">
                        SYSTEM CRASHED <br> PLEASE RESTART DEVICE!
                    </div>
                `;
            }, 2000);
        }
    }, 800); // Slow realistic hacking speed
}

// -------------------------------
// AUTO RUN BASED ON PAGE
// -------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const page = document.body.getAttribute("data-page");

    if (page === "terminal") {
        runTerminalSimulation();
    }
});
