$(document).ready(function () {
  $(".banner__button").on("click", function () {
    const currentColor = $(".banner__button").css("background-color");
    const green = "rgb(122, 184, 0)";
    const red = "rgb(204, 41, 43)";

    if (currentColor === green) {
      $(".banner__button").css("background-color", red);
    } else {
      $(".banner__button").css("background-color", green);
    }
  });
});
