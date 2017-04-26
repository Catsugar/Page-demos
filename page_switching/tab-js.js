// JavaScript Document
function $(id){
	return typeof id==='string'?document.getElementById(id):id;
}


/*function $(id){
	return typeof id==="string"?document.getElementById(id):id;
}*/
window.onload=function(){
	//获取鼠标滑过或点击的标签
	 var titles=$('title').getElementsByTagName('li');
     var cards=$('content').getElementsByClassName('card');
	 var tabs=$('title').getElementsByTagName('a');
	if(titles.length!=cards.length){
		return;}
	for(var i=0;i<titles.length;i++){
	   titles[i].id=i;
	   titles[i].onmouseover=function(){
		 for(var j=0;j<titles.length;j++){
			   titles[j].className="";
			   cards[j].style.display="none";
			   tabs[j].style.color="#FFF";
		   }
		   cards[this.id].style.display="block";
		   this.className="select";
		   tabs[this.id].style.color="#C00";
	   }
	}
	
}