/*window.onload = function() {
  var _ban = document.getElementById("ban");
  //document.write("sss");
var   noText= function(){
  _ban.value="";
}
  _ban.onkeyup=_ban.onblur=noText;
};*/









window.onload=function(){
  var _ban=document.getElementById("ban");
  _ban.onfocus=function(){
    _ban.blur();
  };
}
