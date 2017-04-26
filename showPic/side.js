window.onload=function(){
/****************************************************/
	var boxes=document.getElementsByClassName('col');
	var imgs=document.getElementsByTagName('img');
	
	for(var i=0;i<boxes.length;i++){
		boxes[i].id=i;
		boxes[i].onmouseover=function(){
			this.getElementsByTagName('div')[0].style.top=0;
			this.style.width=250+"px";
			this.className="col select";
			//this.getElementsByTagName('img')[0].style.display="none";
			//this.getElementsByTagName('img')[0].style.width=400+"px";;
		}
		boxes[i].onmouseout=function(){
			this.getElementsByTagName('div')[0].style.top=250+"px";
			this.style.width=100+"px";
			this.className="col";
			//this.getElementsByTagName('img')[0].style.display="block";
		}
	}
/****************************************************/
}