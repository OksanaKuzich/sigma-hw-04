function inactivityTime() {
  let time = setTimeout(close_window, 60000);

  document.addEventListener('mousemove', resetTimer);
  document.addEventListener('keypress', resetTimer);

  function resetTimer() {
    clearTimeout(time);
    time = setTimeout(close_window, 600000);
  }

  function close_window() {
    const res = confirm('Are you here?');
    if (!res) {
      close();
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  inactivityTime();
});
