//for changing the mode and sliding
const toggle = document.getElementById("switch");
toggle.addEventListener("click", () => {
  document.getElementById("slider").classList.toggle("slider-slide");
  document.getElementById("body").classList.toggle("dark");
});

//for changing the font-size
const range = document.getElementById("range");
range.addEventListener("input", () => {
  console.log(range.value);
  const size = range.value;
  document.getElementById("font-size").textContent = size;
  document.getElementById("quote").style.fontSize = size + "px";
});
