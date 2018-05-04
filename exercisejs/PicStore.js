  //DOM加载完毕后，让多个函数同时载入
 function addLoadEvent(func) {
    var oldonload = window.onload;
    //如果需要载入的函数不存在，则载入参数函数。
    if (typeof window.onload != 'function') {
      window.onload = func;
    } else {
      //如果存在，则载入该函数，并把参数函数放在其后载入。
      window.onload = function() {
        oldonload();
        func();
      }
    }
  }

  //封装一个insertAfter函数
  function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
      parent.appendChild(newElement);
    }else{

      parent.insertBefore(newElement, targetElement.nextSibling);
    }
  }

  //创建占位符
  function preparePlaceHolder() {
    if(!document.getElementById)return false;
    if(!document.getElementById("gallary"))return false;
    if(!document.createElement)return false;
    if(!document.createTextNode)return false;
    _img = document.createElement("img");
    _img.setAttribute("id", "placeholder");
    _img.setAttribute("class", "PlaceHolder");
    _img.setAttribute("alt","这里是占位照片1");
    _img.setAttribute("src", "../pic/AsaTeacher1.jpg");
    var gallary = document.getElementById("gallary");
    insertAfter(_img, gallary);
    var Des = document.createElement("p");
    Des.setAttribute("id", "tt");
    var _Des = document.createTextNode("this will be changed");
    Des.appendChild(_Des);
    insertAfter(Des, _img);
  }

  //遍历<a>标签，并赋予他们事件onclick
  function prepareGallary() {
    if(!document.getElementsByTagName)return false;
    if(!document.getElementById)return false;
    if(!document.getElementById("gallary"))return false;
    var Ga = document.getElementById("gallary");
    var TagA = Ga.getElementsByTagName("a");
    for (var i = 0; i < TagA.length; i++) {
      //var TagA.onclick=showpic()
       TagA[i].onclick = function() {
        return showpic(this);
      }
      //TagA[i].onkeypress = TagA[i].onclick;
    }

  }

  function showpic(whichpic) {
    if(!document.getElementById("placeholder"))return false;
    var _picstore = whichpic.getAttribute("href");
    var place = document.getElementById("placeholder");
    place.setAttribute("src", _picstore);
    if (this.getAttribute("title")) {
      var Txt = this.getAttribute("title");
    } else {
      var Txt = "";
    }
    var _palce = document.getElementById("tt");
    if (_palce.firstChild.nodeType == 3) {
      _palce.firstChild.nodeValue = Txt;
    }else{
      return false;
    }
    return false;
  }

  addLoadEvent(preparePlaceHolder);
  addLoadEvent(prepareGallary);
