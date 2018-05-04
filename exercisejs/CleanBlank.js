window.onload=function (){
    document.getElementById("aa").innerHTML="jj";
    var _str = document.getElementById("str");
    var _cleank = document.getElementById("cleank");
    _cleank.onclick=function(){
      _str.value=_str.value.replace(/^(\s|\u0A00)+|(\s|\u0A00)+$/g,"");
            var s_str = _str;
          if (! _str.value.replace(/^(\s|\u0A00)+|(\s|\u0A00)+$/g,""))
           {
             alert("输入为空");
           }/*else{
             alert("输入不为空");
           };*/
    };
};
