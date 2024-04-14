$(document).ready(function () {
  /* Here we're using JQuery to check that the DOM (the document) is ready */
  $(".controls").click(function () {
    /* This line says to listen for a "click" event on something with with the class of "controls" */ $(
      ".drawer"
    ).toggleClass(
      "open"
    ); /* A click happened, so now we toggle (add/remove) the class "open" on an element with the ID of "drawer" */
    console.log(
      "Toggled the class!"
    ); /* For help troubleshooting, we're logging a note to the browser console so we can see that the function ran */
  });
});
