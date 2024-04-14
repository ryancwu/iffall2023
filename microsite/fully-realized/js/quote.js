function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll event
function handleScroll() {
  var quoteTiles = document.querySelectorAll(".quote-tile");
  quoteTiles.forEach(function (tile) {
    if (isElementInViewport(tile)) {
      tile.classList.add("visible");
    } else {
      tile.classList.remove("visible");
    }
  });
}

window.addEventListener("scroll", handleScroll);

handleScroll();
