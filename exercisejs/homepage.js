$(document).ready(function() {
  $("#code").mouseover(function() {
    $("p.top>span").css("opacity", 1);
  });

  $("#code").mouseleave(function() {
    $("p.top>span").css("opacity", 0);
  });

  $(".hint").click(function() {
    $("#hint-first").css("opacity",1);
    $(".Yes").css("opacity",1);
    $(".No").css("opacity",1);
    //点击hint之后执行的事件
    //点击yes事件
    $(".Yes").click(function() {

    //$("#hint-first").css("opacity", 0);
      $("#hint-second").css("opacity", 1);
      $("#hint-third").css("opacity", 0);
      $(".Yes").css("opacity",0);
      $(".No").css("opacity",0);
    });
    //点击no事件
    $(".No").click(function() {
    //  $("#hint-first").css("opacity", 0);
      $("#hint-third").css("opacity", 1);
      $("#hint-second").css("opacity", 0);
      $(".Yes").css("opacity",0);
      $(".No").css("opacity",0);
    });
  });
});
/*
if($("div#hint-second").attr("positon")="relative"){
      $("div#hint-third").css("position","absolute");
    }else if
    ($("div#hint-third").attr("positon")="relative"){
      $("div#hint-second").css("position","absolute");
    }
*/
