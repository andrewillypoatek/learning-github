function showMessage() {
  const messages = [
    "You just ran JavaScript. Welcome to the web. 🎉",
    "Git it? Git it? ...We'll see ourselves out.",
    "Commit yourself to greatness. Starting now.",
    "Branch out. The world is your merge request.",
  ];

  const random = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById("message").textContent = random;
}
