const messages = [
    "H1",
    "2!",
    "3!",
    "Happy Birthday Joyce!",
    "4!",
    "5!",
    "6!",
    "7!",
    "8!",
    "9!"
  ];
  
  const gifEl = document.getElementById('gif'),
        messageEl = document.getElementById('message');
  
  gifEl.addEventListener('click', () => {
    messageEl.textContent = messages[Math.floor(Math.random() * messages.length)];
  });
  
  messageEl.addEventListener('click', () => {
    if (messageEl.textContent === "Happy Birthday Joyce!") {
      import('https://cdn.skypack.dev/canvas-confetti').then(module => module.default());
    }
  });
