function toast(msg) {
  const el = document.getElementById("toast");
  if (!el) return;
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => el.classList.remove("show"), 900);
}

function incMisses() {
  const misses = Number(localStorage.getItem("misses") || "0") + 1;
  localStorage.setItem("misses", String(misses));
  const missEl = document.getElementById("misses");
  if (missEl) missEl.textContent = misses;
}

document.addEventListener("click", (e) => {
  // If user clicked the hotspot, let it navigate normally.
  if (e.target.closest("[data-correct='1']")) return;

  // If click happened inside the level scene, count as a miss.
  if (e.target.closest(".level")) {
    incMisses();
    toast("Nope 😅");
  }
});
