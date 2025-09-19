// Universal Access Key
const MASTER_KEY = "UNIVERSAL_HACKER_RAT_2025";

// Validate Key
function validateKey() {
  const keyInput = document.getElementById("accessKey").value;
  if (keyInput === MASTER_KEY) {
    window.location.href = "share.html";
  } else {
    document.getElementById("errorMsg").innerText = "❌ Wrong Access Key!";
  }
}

// Share Logic
let shareCount = 0;

function copyLink() {
  const link = document.getElementById("shareLink");
  link.select();
  document.execCommand("copy");
  alert("Link copied to clipboard!");
}

function openWhatsApp() {
  shareCount++;
  document.getElementById("shareCount").innerText = shareCount;
  window.open(`https://wa.me/?text=Hack anyone's phone remotely in just 1 click! ${document.getElementById("shareLink").value}`, '_blank');

  if (shareCount >= 5) {
    document.getElementById("continueBtn").disabled = false;
    document.getElementById("shareStatus").innerText = "All shares completed!";
  }
}

function goToTerminal() {
  window.location.href = "terminal.html";
}

// Terminal Commands
function runCommand(event) {
  if (event.key === "Enter") {
    const input = document.getElementById("terminalInput").value.toLowerCase();
    const output = document.getElementById("terminalOutput");

    switch (input) {
      case "help":
        output.innerText += "\nCommands:\nRAT D - Device info\nTT - File Access\nSCAN - Network Scan\nEXIT - Close RAT\n";
        break;
      case "rat d":
        output.innerText += `\n[DEVICE] Android Version: 11.0\n[IP] 192.168.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}\n`;
        break;
      case "tt":
        output.innerText += "\nAccessing files...\n- contacts.db\n- messages.db\n- images.zip\n- calllogs.txt\n";
        break;
      case "scan":
        output.innerText += "\nScanning target network...\nFound 5 open ports.\n";
        break;
      case "exit":
        output.innerText += "\nClosing RAT session...\n";
        break;
      default:
        output.innerText += `\nUnknown command: ${input}\nType 'help' for list of commands.\n`;
    }

    output.scrollTop = output.scrollHeight;
    document.getElementById("terminalInput").value = "";
  }
}
