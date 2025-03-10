const messages = [
    "Have a wonderful day!",
    "You're awesome!",
    "Keep smiling!",
    "Happy Birthday Joyce!",
    "Looking good today!",
    "You rock!",
    "Sending positive vibes!",
    "Stay amazing!",
    "Shine bright!",
    "Be the best you!"
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