var data=['钟晓生','非天夜翔','水千丞','尼罗','淮上','微笑的猫','河汉','缘何故'],
    timer=null,
    flag=0;

 window.onload=function(){
     var play=document.getElementById('play'),
        stop=document.getElementById('stop');

    // 开始抽奖
    play.onclick=playFun;
    stop.onclick=stopFun;

       //键盘事件
       document.onkeyup=function(){
       	event=event||window.event;
       	console.log(event.keyCode);
       	if (event.keyCode==13){
       		if (flag==0){
       			playFun();
       			flag=1;

       		}else{
       			stopFun();
       			flag=0;

       		}

       	}

       	}
       
   }
 function playFun(){
 	    
 		var title=document.getElementById('title');
 		 var play=document.getElementById('play');
 		clearInterval(timer);
 	    timer=setInterval(function (){
 	    
 	    	var random=Math.floor(Math.random()*data.length);
 	    	title.innerHTML=data[random];
 	   	    },50);
 	        play.style.background='#999';

 }
         function stopFun() {
           clearInterval(timer);
           var play =document.getElementById('play');
           play.style.background='#036';
		 }

