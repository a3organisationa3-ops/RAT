// js/terminal.js

const outputDiv = document.getElementById('output');
const commandInput = document.getElementById('commandInput');

const commands = {
  help: `
    <div class="box">
      <p>Available Commands:</p>
      <ul>
        <li><b>help</b> - Show this help menu</li>
        <li><b>vv</b> - Show target device version</li>
        <li><b>info</b> - Show target info</li>
        <li><b>log</b> - Control device (Final command)</li>
      </ul>
    </div>
  `,
  vv: `
    <div class="box">
      <p>Device: Samsung Galaxy S22 Ultra</p>
      <p>Android Version: 14.0</p>
      <p>Kernel: 5.15.92</p>
    </div>
  `,
  info: `
    <div class="box">
      <p>IP: 192.168.0.24</p>
      <p>MAC: 54:89:98:AA:11:3F</p>
      <p>Location: Mumbai, India</p>
      <p>Status: Online</p>
    </div>
  `,
  log: `
    <div class="box error">
      <p>💀 Initiating remote control...</p>
      <p>💀 Exploiting kernel...</p>
      <p>💀 Gaining root access...</p>
      <p class="final">Thanks for scam 🤡</p>
    </div>
  `
};

function appendOutput(text) {
  outputDiv.innerHTML += `<div>${text}</div>`;
  outputDiv.scrollTop = outputDiv.scrollHeight;
}

commandInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    const command = this.value.trim().toLowerCase();
    this.value = '';

    if (commands[command]) {
      appendOutput(commands[command]);

      if (command === 'log') {
        setTimeout(() => {
          document.body.innerHTML = `
            <div class="final-screen">
              <h1>💀 Thanks for scam 🤡</h1>
              <p>Your server has been terminated.</p>
            </div>
          `;
        }, 3000);
      }
    } else {
      appendOutput(`<div class="error">Unknown command: ${command}</div>`);
    }
  }
});

// Initial welcome message
appendOutput(`
  <div class="box">
    <p>Welcome to UNIVERSAL HACKER'S RAT</p>
    <p>Type <b>help</b> to view commands.</p>
  </div>
`);
