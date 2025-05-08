const toggle = document.getElementById("switch");
toggle.addEventListener("click", () => {
  document.getElementById("slider").classList.toggle("slider-slide");
  document.getElementById("body").classList.toggle("dark");
});

const range = document.getElementById("range");
range.addEventListener("input", () => {
  console.log(range.value);
  const size = range.value;
  document.getElementById("font-size").textContent = size;
  document.getElementById("quote-container").style.fontSize = size + "px";
});
