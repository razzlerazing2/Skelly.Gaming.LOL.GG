let qp;

try {
  qp = window.top.location.pathname === "/home";
} catch {
  try {
    qp = window.parent.location.pathname === "/home";
  } catch {
    qp = false;
  }
}
function showLoader() {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 300);
}

// Update the time every 10ms
function updateTime() {
  const timeElement = document.getElementById("time");
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 10);

// Update battery status
async function updateBattery() {
  const battery = await navigator.getBattery();
  const level = Math.floor(battery.level * 100);
  document.getElementById("battery-percentage").textContent = `${level}%`;
  document.getElementById("battery-fill").style.width = `${level}%`;
}

updateBattery();
