const messages = [
    "oink",
    "小猪",
    "pigs have the intelligence of a toddler",
    "Happy Birthday Joyce!",
    "🐷🤎",
    "i love truffles",
    "lodo is spanish for mud",
    "cried at la la land (2016)✌️",
    "i'm super shy, super shy",
    "i can run 11 mph 😎"
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
