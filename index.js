$(".connect4").click(function (e) {
    e.preventDefault();
    $(".aboutProject").text(
      "Connect Four is a two-player connection game in which the players first choose a color and then take turns dropping colored discs from the top into a seven-column, six-row vertically suspended grid. The pieces fall straight down, occupying the next available space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs. Connect Four is a solved game. The first player can always win by playing the right moves."
    );
    $(".projectName div").css("background", "transparent");
    $(".connect4").css("background-color", "purple");
  });
  
  $(".placement").click(function (e) {
    e.preventDefault();
    $(".aboutProject").text(
      "Placement Management System is a portal made to manage placements of my college, here you can see placement list, prepare for placememt and add your queries about placement"
    );
    $(".projectName div").css("background", "transparent");
    $(".placement").css("background-color", "purple");
  });
  
  $(".social-site").click(function (e) {
    e.preventDefault();
    $(".aboutProject").text(
      "This is a Social site for the writers, the main objective of this site it to connect those who like to write. It has all the features that a social site must have for example: - you can upload your thoughts, like comment, share. You can also earn form this site, there is a feature for money transaction on our site. You can donate and redeem money. We call it AC  1AC = Rs.1"
    );
    $(".projectName div").css("background", "transparent");
    $(".social-site").css("background-color", "purple");
  });
  