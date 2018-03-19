window.onload=function(){
  var _ban=document.getElementById("ban");
  var noText=function()
{
  _ban.value=null;
}
_ban.onkeyup=_ban.blur=noText;
}














 /*window.onload=function(){
  var _ban=document.getElementById("ban");
  _ban.onfocus=function(){
    _ban.blur();
  };
}
