// Master Access Key
const MASTER_KEY = "UNIVERSAL_HACKER_RAT_2025";

// Validate Access Key
function validateKey() {
  const key = document.getElementById("accessKey").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  if (key === MASTER_KEY) {
    window.location.href = "share.html";
  } else {
    errorMsg.innerText = "❌ Wrong Access Key!";
  }
}

// Share Page Logic
let shareCount = 0;

function shareOnWhatsApp() {
  shareCount++;
  document.getElementById("shareCount").innerText = shareCount;

  const link = "https://a3organisationa3-ops.github.io/RAT/";
  const message = `🔥 Dark RAT Tool 🔥\nHack anyone's phone remotely!\nGet it now:\n${link}`;

  // Open WhatsApp with message
  window.location.href = `https://wa.me/?text=${encodeURIComponent(message)}`;

  if (shareCount >= 5) {
    document.getElementById("continueBtn").disabled = false;
    document.getElementById("shareStatus").innerText = "All shares completed ✅";
  }
}

function goToTerminal() {
  window.location.href = "terminal.html";
}

// Terminal Commands
function runCommand(event) {
  if (event.key === "Enter") {
    const input = document.getElementById("terminalInput").value.trim().toLowerCase();
    const output = document.getElementById("terminalOutput");

    switch (input) {
      case "help":
        output.innerText += `
Available Commands:
- rat-d      : Device Info
- tt         : File Access
- netscan    : Network Scan
- sys-info   : System Info
- logout     : Close RAT
        `;
        break;

      case "rat-d":
        output.innerText += `\n[DEVICE] Android 13.0
[IP] 192.168.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}
[IMEI] 3598${Math.floor(Math.random() * 100000000)}
        `;
        break;

      case "tt":
        output.innerText += `
Accessing files...
- contacts.db
- messages.db
- gallery.zip
- calllogs.txt
        `;
        break;

      case "netscan":
        output.innerText += `
Scanning target network...
Found 8 open ports.
Running exploit on port 443...
Exploit success!
        `;
        break;

      case "sys-info":
        output.innerText += `
System Info Dump:
OS: Android
CPU: ARMv8
RAM: 6GB
Storage: 128GB
Status: Compromised
        `;
        break;

      case "logout":
        output.innerText += "\nClosing RAT session... Goodbye!\n";
        break;

      default:
        output.innerText += `\nUnknown command: ${input}\nType 'help' to see available commands.\n`;
    }

    output.scrollTop = output.scrollHeight;
    document.getElementById("terminalInput").value = "";
  }
}
