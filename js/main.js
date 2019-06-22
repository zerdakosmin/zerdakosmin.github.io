let image = document.querySelector("#zerda");
let title = document.querySelector("#title");
let footer = document.querySelector("footer");
let links = document.querySelector("#links");
let enter = document.querySelector("#enter");


function toggleCredits() {
  if (footer.classList.contains("hidden")) {
    footer.classList.remove("hidden");
  } else {
    footer.classList.add("hidden");
  }
}

title.addEventListener("click", function() {
  toggleCredits();
});

function togglePortal() {
  if (enter.classList.contains("hidden")) {
    links.classList.add("hidden");
    enter.classList.remove("hidden");
  } else {
    enter.classList.add("hidden");
    links.classList.remove("hidden");
  }
}

image.addEventListener("click", function() {
  togglePortal();
});