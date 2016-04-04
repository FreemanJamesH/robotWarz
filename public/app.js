$(function(){

  $('#branding').css({backgroundPosition: 'center 40%'});
  $('#content').css({backgroundPosition: 'center -100%'});
  $('#sec-content').css({backgroundPosition: 'center 120%'});
  $('#footer').css({backgroundPosition: 'center 87%'});
  $('#wrapper').css({overflow: "hidden"});



  var num = 1;

  function startHim() {
    num++;
    $("#sec-content").animate({top: "-=5px"}, 150).animate({top: "+=5px"}, 150);
    $("#content,#branding").animate({top: "-=" + num + "px"}, 150).animate({top: "+=" + num + "px"}, 150);
    if (num < 4) {
      setTimeout(startHim, 300);
    } else {
      setTimeout(bounceHim, 300);
    }
  }

  function bounceHim() {
    $("#sec-content,#branding").animate({top: "-=5px"}, 150).animate({top: "+=5px"}, 150);
    $("#content").animate({top: "-=10px"}, 150).animate({top: "+=10px"}, 150);
    setTimeout(bounceHim, 300);
  }

  function startHim2() {
    num++;
    $("#sec-content2").animate({top: "-=5px"}, 150).animate({top: "+=5px"}, 150);
    $("#content2,#branding2").animate({top: "-=" + num + "px"}, 200).animate({top: "+=" + num + "px"}, 150);
    if (num < 4) {
      setTimeout(startHim2, 300);
    } else {
      setTimeout(bounceHim2, 300);
    }
  }

  function bounceHim2() {
    $("#sec-content2,#branding2").animate({top: "-=5px"}, 150).animate({top: "+=5px"}, 150);
    $("#content2").animate({top: "-=10px"}, 150).animate({top: "+=10px"}, 150);
    setTimeout(bounceHim2, 300);
  }

  $('#start').on('click', function() {
    $("#full-robot").animate({
      left: "0%",
      marginLeft: "400px"
    }, 2000);
    $("#full-robot2").animate({
      right: "18%",
      marginRight: "300%"
    }, 2000);
    setTimeout(startHim, 2000);
    setTimeout(startHim2, 2000);
  });
});
