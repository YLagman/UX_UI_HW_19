console.log("Your index.js file is loaded!");

$(document).ready(function () {
  // Add event listener for click on "My Work" button
  $('#myWorkButton').click(function () {
    // Scroll to the "My Work" section using smooth scrolling animation
    $('html, body').animate({
      scrollTop: $('#myWorkSection').offset().top
    }, 800); // Adjust the animation speed as desired (in milliseconds)
  });
});




