// JavaScript Document
function $(id){
	return typeof id==='string'?document.getElementById(id):id;
}


window.onload=function(){
	//获取鼠标滑过或点击的标签
	var index=0;
	var timer=null;
    var titles=$('title').getElementsByTagName('li');
    var cards=$('content').getElementsByClassName('card');
    var tabs=$('title').getElementsByTagName('a');
	if(titles.length!=cards.length){
		return;}
	for(var i=0;i<titles.length;i++){
	   titles[i].id=i;
	   titles[i].onmouseover=function(){
		   var that=this;
		   //清除定时器
		   if(timer){
			   clearTimeout(timer);
			   timer=null;
		   }
		   //延迟半秒执行
		   timer=setTimeout(function(){
			   for(var j=0;j<titles.length;j++){
			   titles[j].className="";
			   cards[j].style.display="none";
			   tabs[j].style.color="#FFF";
		       }
		       cards[that.id].style.display="block";
		       that.className="select";
		       tabs[that.id].style.color="#C00";
			   },500);
		   }
	   }
	}
