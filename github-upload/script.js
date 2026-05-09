const accents = [
  ["#ff9b50", "#ffd1b3"],
  ["#e1782d", "#f5c49e"],
  ["#426a88", "#c9d8e4"],
  ["#64748b", "#d5dce5"],
  ["#c05f4a", "#f0c4b8"],
];

const button = document.querySelector(".shuffle");
let colorIndex = 0;

button?.addEventListener("click", () => {
  colorIndex = (colorIndex + 1) % accents.length;
  const [accent, soft] = accents[colorIndex];
  document.documentElement.style.setProperty("--accent", accent);
  document.documentElement.style.setProperty("--accent-dark", accent);
  document.documentElement.style.setProperty("--accent-soft", soft);
});
