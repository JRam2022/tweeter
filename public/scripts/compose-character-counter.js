
$(document).ready(function(){
  //const counter = document.querySelector(".counter")

  $("#tweet-text").on('input', function(){
    const textCount = $(this).val();
    //calculates characters remaining
    const textLeft = 140 - textCount.length
    //colors text red if no characters remain
    if (textLeft < 0) {
      $(".counter").css("color", "red")
    } else {
      $(".counter").css("color", "black")
    }
    //updates counter
    const textRemaining = $(".counter").text(textLeft)
  });










});