window.onload=function(){
	var oLinks=document.getElementById('link');
	var oUl=document.getElementsByTagName('ul')[0];
	var aLi=document.getElementsByTagName('li');
    oUl.innerHTML=oUl.innerHTML+oUl.innerHTML;
    oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';
	   function move(){
        if(oUl.offsetLeft<-oUl.offsetWidth/2){
               oUl.style.left='0';
		}
		if(oUl.offsetLeft>0){
              oUl.style.left=-oUl.offsetWidth/2+'px';
		}
		oUl.style.left=oUl.offsetLeft-2+'px';
	     }
	   

	  var timer=setInterval(move,30);
	oLinks.onmouseover=function(){
		clearInterval(timer);
	}
	oLinks.onmouseout=function(){
		timer=setInterval(move,30);
	}

}