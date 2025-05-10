import sampleData from "./data.js";

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

const quote = document.getElementById("quote");

const category = document.getElementById("category");
let index = 0;
let filteredData = [];
category.value = localStorage.getItem("category");
if (!category.value) {
  category.value = "all";
}

const filterData = () => {
  if (category.value === "all") {
    filteredData = sampleData;
  } else {
    filteredData = sampleData.filter(
      (item) => item.category === category.value
    );
  }
  index = 0;
  quote.textContent = filteredData[index]?.quote;
};

category.addEventListener("input", () => {
  console.log("triggered");
  localStorage.setItem("category", category.value);
  filterData();
});

document.getElementById("arrow-left").addEventListener("click", () => {
  index--;
  if (index === -1) {
    index = filteredData.length - 1;
  }
  console.log(index);
  slideTransition(filteredData[index]?.quote, "left");
});
document.getElementById("arrow-right").addEventListener("click", () => {
  index = (index + 1) % filteredData.length;
  slideTransition(filteredData[index]?.quote, "right");
});

const generatorButton = document.getElementById("generator");
generatorButton.addEventListener("click", () => {
  index = Math.floor(Math.random() * filteredData.length);
  fadeTransition(filteredData[index]?.quote);
});

const fadeTransition = (newQuote) => {
  quote.style.opacity = 0;

  setTimeout(() => {
    quote.textContent = newQuote;
    quote.style.opacity = 1;
  }, 300);
};

const slideTransition = (newQuote, direction) => {
  quote.classList.add(
    direction === "left" ? "slide-out-left" : "slide-out-right"
  );

  setTimeout(() => {
    quote.textContent = newQuote;
    quote.classList.remove("slide-out-right", "slide-out-left");
    quote.classList.add(
      direction === "left" ? "slide-from-left" : "slide-from-right"
    );
    setTimeout(() => {
      quote.classList.remove("slide-from-left", "slide-from-right");
    }, 400);
  }, 400);
};

filterData();
