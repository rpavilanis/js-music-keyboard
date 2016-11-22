$(document).ready( function() {

  $( "body" ).keydown(function(event) {
    switch(event.keyCode) {
      case 67:
        var audio = document.getElementsByTagName("audio")[0];
        audio.play();
        break;
      case 68:
        var audio = document.getElementsByTagName("audio")[1];
        audio.play();
        break;
      case 69:
        var audio = document.getElementsByTagName("audio")[2];
        audio.play();
        break;
      case 70:
        var audio = document.getElementsByTagName("audio")[3];
        audio.play();
        break;
      case 71:
        var audio = document.getElementsByTagName("audio")[4];
        audio.play();
        break;
      case 65:
        var audio = document.getElementsByTagName("audio")[5];
        audio.play();
        break;
      case 66:
        var audio = document.getElementsByTagName("audio")[6];
        audio.play();
        break;

    }
  //   if (event.keyCode == 67) {
  //       var audio = document.getElementsByTagName("audio")[0];
  //       audio.play();
  //     }
  //     else if (event.keyCode == 68) {
  //       var audio = document.getElementsByTagName("audio")[1];
  //       audio.play();
  //     }
  //     else if (event.keyCode == 69) {
  //       var audio = document.getElementsByTagName("audio")[2];
  //       audio.play();
  //     }
  //     else if (event.keyCode == 70) {
  //       var audio = document.getElementsByTagName("audio")[3];
  //       audio.play();
  //     }
  //     else if (event.keyCode == 71) {
  //       var audio = document.getElementsByTagName("audio")[4];
  //       audio.play();
  //     }
  //     else if (event.keyCode == 65) {
  //       var audio = document.getElementsByTagName("audio")[5];
  //       audio.play();
  //     }
  //     else if (event.keyCode == 66) {
  //       var audio = document.getElementsByTagName("audio")[6];
  //       audio.play();
  //     }
  });

  $( '.c' ).click(function(event) {
   var audio = document.getElementsByTagName("audio")[0];
   audio.play();
  });

  $( '.d' ).click(function(event) {
    var audio = document.getElementsByTagName("audio")[1];
    audio.play();
  });

  $( '.e' ).click(function(event) {
    var audio = document.getElementsByTagName("audio")[2];
    audio.play();
  });

  $( '.f' ).click(function(event) {
    var audio = document.getElementsByTagName("audio")[3];
    audio.play();
  });

  $( '.g' ).click(function(event) {
    var audio = document.getElementsByTagName("audio")[4];
    audio.play();
  });

  $( '.a' ).click(function(event) {
    var audio = document.getElementsByTagName("audio")[5];
    audio.play();

  });$( '.b' ).click(function(event) {
    var audio = document.getElementsByTagName("audio")[6];
    audio.play();

});
 });
