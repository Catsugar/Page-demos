window.onload=function(){
    var wrap=document.getElementById('wrap'),
	    picbox=document.getElementById('pic'),
        pic=document.getElementById('pic').getElementsByTagName('li'),
        list=document.getElementById('list').getElementsByTagName('li'),
		left=document.getElementById('left'),
		right=document.getElementById('right'),
        index=0,
        timer=null;
	if(pic.length!=list.length){
		return;
	}
	/*箭头切换
	left.onclick=function(){
		clearInterval(timer);
		picbox.style.left=parseInt(picbox.style.left)-560+'px';
	}
	left.onmouseout=function(){
		timer=setInterval(autoplay,2000);
	}*/
	
	
	//鼠标切换
	wrap.onmouseover=function(){  
	    clearInterval(timer);// 鼠标划过整个容器时停止自动播放
    }	
	wrap.onmouseout=function(){  
	    timer=setInterval(autoplay,2000);
    }
	for(var i=0;i<list.length;i++){
		list[i].id=i;
		list[i].onmouseover=function(){
		clearInterval(timer);	
		change(this.id);
		}
	}
   // 自动播放
   if(timer){
	    clearInterval(timer);
		timer=null;
	} 
	timer=setInterval(autoplay,2000);
//*********************************************************主程序结束
//****************定时函数
    function change(a){
	       for(var j=0;j<list.length;j++){
			   list[j].className="";
			   pic[j].style.display="none";
	       }
	       pic[a].style.display="block";
	       list[a].className="on";
           index=a; 
  } 
//******************自动播放
   function autoplay(){
           index++;
		   if(index>list.length-1){
				   index=index-list.length;
		   }
           change(index);
   }
}
//*********************************************************副程序结束