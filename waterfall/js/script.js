
window.onload=function(){
	var oParent=document.getElementById('main');
	console.log(oParent);
	waterfall('main','box');
	var dataInt={'data':[{"src":'01.png'},{"src":'02.png'},{"src":'03.png'},{"src":'04.png'}]};
	window.onscroll=function(){
		if(checkScrollSlide){
			//将数据快渲染到尾部
			var oParent=document.getElementById('main');
			for(var i=0;i<dataInt.data.length;i++){
				var oBox=document.createElement('div');
				oBox.className='box';
				oParent.appendChild(oBox);
				var oPic=document.createElement('div');
				oPic.className='pic';
				oBox.appendChild(oPic);
				var oImg=document.createElement('img');
				oImg.src="images/"+dataInt.data[i].src;
				oPic.appendChild(oImg);
			};
			waterfall('main','box');	
		}
	}
}



function waterfall(parent,box){
	//将main下的所有class为box的元素取出来
    var oParent=document.getElementById(parent);
	console.log(oParent.length);
	//oParent=getByClass(oParent,main);
	var oBoxs=getByClass(oParent,box);
	
	
	//计算列数
	var oBoxW=oBoxs[0].offsetWidth;
		
	var cols=Math.floor(document.documentElement.clientWidth/oBoxW);
	//main设置宽度
	//console.log(oBoxW);
	oParent.style.cssText='width:'+oBoxW*cols+'px;margin:0 auto;';
	var hArr=[];
	for(var i=0;i<oBoxs.length;i++){
		
		if(i<cols){
			hArr.push(oBoxs[i].offsetHeight);
		}else{
			var minH=Math.min.apply(null,hArr);
			var index=getMinhIndex(hArr,minH);
			oBoxs[i].style.position='absolute';
			oBoxs[i].style.top=minH+'px';
			//oBoxs[i].style.left=oBoxW*index+'px';
			oBoxs[i].style.left=oBoxs[index].offsetLeft+'px';
			hArr[index]+=oBoxs[i].offsetHeight;
			
		}
	}
}

function getByClass(parent,clsName){

	var boxArr=new Array();//用来存储获取到所有class为box的元素
	var oElements=parent.getElementsByTagName('*');
	for(var i=0;i<oElements.length;i++){
	  if(oElements[i].className==clsName){
         boxArr.push(oElements[i]);
      }
  }
    return boxArr;
}

function getMinhIndex(arr,val){
	
	for(var i in arr){
		if(arr[i]==val){
			return i;
		}
	}
}

//检测加载数据块的条件
function checkScrollSlide(){
	var oParent=document.getElementById('main');
	//console.log(oParent.length);
	var oBox=getByClass(oParent,'box');
	var lastBoxH=oBoxs[oBoxs.length-1].offsetTop+Math.floor(oBoxs[oBoxs.length-1].offsetHeight/2);
	var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
	var height=document.body.clientHeight||document.documentElement.clientHeight;
	return (lastBoxH<scrollTop+height)?true:false;
}