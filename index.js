
(function(){
	
	var  provinceNode=document.getElementById('province'),
	cityNode=document.getElementById('city'),
	quNode=document.getElementById('qu');
	//省会的获取
	var provinceStr='请选择你所在的省份';
	for(var i=0;i<province.length;i++){
		provinceStr+='<option  value='+province[i].item_code+'>'+province[i].item_name+'</option>';
	}
	provinceNode.innerHTML=provinceStr;
	//获取城市的数组
    //城市的获取
    var cityArr=[],j=0;
    for(var i=0;i<city.length;i++){
        if(city[i].item_code-provinceNode.value>=100&&city[i].item_code-provinceNode.value<10000){
            cityArr[j++]=city[i];
        }
    }
    var cityStr='请选择你所在的市';
    for(var k=0;k<cityArr.length;k++){
        cityStr +='<option value='+cityArr[k].item_code+'>'+cityArr[k].item_name+'</option>';
    }
    cityNode.innerHTML=cityStr;
    //区县的获取
	var  quArr=[],j=0;
	for(var i=0;i<qu.length;i++){
		if(qu[i].item_code-cityNode.value>=1&&qu[i].item_code-cityNode.value<100)
		quArr[j++]=qu[i];
	}
	var quStr='请选择你所在的区/县';
	for(var k=0;k<quArr.length;k++)
	quStr+='<option value='+quArr[k].item_code+'>'+quArr[k].item_name+'</option>';
	quNode.innerHTML=quStr;
	
    provinceNode.onchange=function (){  //改变省会，市改变
        //城市的获取
        var cityArr=[],j=0;
        for(var i=0;i<city.length;i++){
            if(city[i].item_code-provinceNode.value>=100&&city[i].item_code-provinceNode.value<10000){
                cityArr[j++]=city[i];
            }
        }
        var cityStr='';
        for(var k=0;k<cityArr.length;k++){
            cityStr +='<option value='+cityArr[k].item_code+'>'+cityArr[k].item_name+'</option>';
        }
        cityNode.innerHTML=cityStr;

        //县/区的获取
        var quArr=[],s=0;
        for(var i=0;i<qu.length;i++){
             if(qu[i].item_code-cityNode.value>=1&&qu[i].item_code-cityNode.value<100){
                 quArr[s++]=qu[i];
             }
        }
        var quStr='';
        for(var i=0;i<quArr.length;i++){
            quStr +='<option>'+quArr[i].item_name+'</option>';
        }
        quNode.innerHTML=quStr;
    }


    cityNode.onchange=function (){  //改变市，县/区改变
        var quArr=[],s=0;
        for(var i=0;i<qu.length;i++){
            if(qu[i].item_code-cityNode.value>=1&&qu[i].item_code-cityNode.value<100){
                quArr[s++]=qu[i];
            }
        }
        var quStr='';
        for(var i=0;i<quArr.length;i++){
            quStr +='<option>'+quArr[i].item_name+'</option>';
        }
        quNode.innerHTML=quStr;
    }
	
	
	
	
})()
