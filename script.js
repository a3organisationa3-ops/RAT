// Master Key
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

function copyLink() {
  const linkField = document.getElementById("shareLink");
  linkField.select();
  navigator.clipboard.writeText(linkField.value);
  alert("Link copied to clipboard!");
}

function shareOnWhatsApp() {
  shareCount++;
  document.getElementById("shareCount").innerText = shareCount;

  const link = document.getElementById("shareLink").value;
  const message = `Hack anyone's phone remotely in just 1 click! ${link}`;

  window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');

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
        output.innerText += "\nAvailable Commands:\nRAT D - Device Info\nTT - File Access\nSCAN - Network Scan\nINFO - RAT Details\nEXIT - Close RAT\n";
        break;

      case "rat d":
        output.innerText += `\n[DEVICE] Android Version: 13.0\n[IP] 192.168.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}\n[IMEI] 3598${Math.floor(Math.random() * 100000000)}\n`;
        break;

      case "tt":
        output.innerText += "\nAccessing files...\n- contacts.db\n- messages.db\n- gallery.zip\n- calllogs.txt\n\n";
        break;

      case "scan":
        output.innerText += "\nScanning target network...\nFound 8 open ports.\nRunning exploit on port 443...\nExploit success!\n";
        break;

      case "info":
        output.innerText += "\nDark RAT v3.5 | Developer: GhostOps\nStatus: ACTIVE\nLogs: Encrypted\n";
        break;

      case "exit":
        output.innerText += "\nClosing RAT session...\n";
        break;

      default:
        output.innerText += `\nUnknown command: ${input}\nType 'help' to see available commands.\n`;
    }

    output.scrollTop = output.scrollHeight;
    document.getElementById("terminalInput").value = "";
  }
}
