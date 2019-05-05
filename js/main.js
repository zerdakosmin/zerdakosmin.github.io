let image = document.querySelector("#zerda");
let footer = document.querySelector("footer");

function showCredit() {
  footer.classList.remove("hidden");
}

function hideCredit() {
  footer.classList.add("hidden");
}

image.addEventListener("click", function() {
  console.log("hello");

  if (footer.classList.contains("hidden")) {
    showCredit();
  } else {
    hideCredit();
  }
});