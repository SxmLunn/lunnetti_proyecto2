
(function(){
  const target = new Date( + target_iso + "T00:00:00");
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minsEl = document.getElementById('minutes');
  const secsEl = document.getElementById('seconds');

  function update(){
    const now = new Date();
    let diff = Math.max(0, Math.floor((target - now) / 1000)); // in seconds
    const days = Math.floor(diff / 86400);
    diff -= days * 86400;
    const hours = Math.floor(diff / 3600);
    diff -= hours * 3600;
    const minutes = Math.floor(diff / 60);
    const seconds = diff % 60;

    if (daysEl) daysEl.textContent = days;
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2,'0');
    if (minsEl) minsEl.textContent = String(minutes).padStart(2,'0');
    if (secsEl) secsEl.textContent = String(seconds).padStart(2,'0');
  }

  update();
  setInterval(update, 1000);
})();
