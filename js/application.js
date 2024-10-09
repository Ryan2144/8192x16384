var GM;

// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  GM = new GameManager(7, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});
