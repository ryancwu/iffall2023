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
  var visfadeItems = document.querySelectorAll(".visfade");
  visfadeItems.forEach(function (item) {
    if (isElementInViewport(item)) {
      item.classList.add("visible");
    }
  });
}

// test push

window.addEventListener("scroll", handleScroll);

handleScroll();
