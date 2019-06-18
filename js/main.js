let image = document.querySelector("#zerda");
let title = document.querySelector("#title");
let footer = document.querySelector("footer");

function showCredit() {
  footer.classList.remove("hidden");
}

function hideCredit() {
  footer.classList.add("hidden");
}

title.addEventListener("click", function() {
  if (footer.classList.contains("hidden")) {
    showCredit();
  } else {
    hideCredit();
  }
});

image.addEventListener("click", function() {
  console.log("hello");
});