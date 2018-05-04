function transform(){
//转换为字符串
  var str = [1,2,5,10,15];
  var _str = str.toString();
  document.getElementById("x").innerHTML=_str;


//再把字符串转化为Unicode码 ,并输出
  var uni = [];
  for(var i=0; i<_str.length; i++){
     uni = _str.charCodeAt(i);
     document.getElementById("y").innerHTML=uni;<br>
  }

}
