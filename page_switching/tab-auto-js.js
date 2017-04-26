// JavaScript Document
function $(id){
	return typeof id==='string'?document.getElementById(id):id;
}
window.onload=function(){
	//获取鼠标滑过或点击的标签
	var that=0; 
	var timer=null;
    var titles=$('title').getElementsByTagName('li');
    var cards=$('content').getElementsByClassName('card');
    var tabs=$('title').getElementsByTagName('a');
	//****************鼠标点击切换
	if(titles.length!=cards.length){
		return;}
	for(var i=0;i<titles.length;i++){
	   titles[i].id=i;
	   titles[i].onmouseover=function(){
		clearInterval(timer);
		change(this.id);
	   }
	   titles[i].onmouseout=function(){  
		   timer=setInterval(autoplay,1000);
	   }
	}
    if(timer){
    clearInterval(timer);
    timer=null;
    } 
    timer=setInterval(autoplay,1000);
	//*********************************************************主程序结束
	
	//定时函数
    function change(a){
	     for(var j=0;j<titles.length;j++){
			   titles[j].className="";
			   cards[j].style.display="none";
			   tabs[j].style.color="#FFF";
	           }
	           cards[a].style.display="block";
	           titles[a].className="select";
	           tabs[a].style.color="#C00";
               that=a; } 
    //自动播放
    function autoplay(){
               that++;
			   if(that>titles.length-1){
				   that=that-titles.length;
			   }
			   //alert(that);
               change(that);
     }
}