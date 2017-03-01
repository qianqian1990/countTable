function lineChart(option,canvas){
    var cxt=canvas.getContext('2d'),
        data=option,
        width=canvas.width,
        height=canvas.height,
        stepWidth=(width-80)/(data.x.length-1),
        stepHeight=(height-80)/(data.y.length-1),
        yStart=[40,40],
        yEnd=[40,height-40],
        endDot=height-40,
        yLen=option.y.length- 1,
        yValue=option.y[yLen];

    // 绘制竖线

    cxt.clearRect(0,0,1356,850);
    cxt.moveTo(yStart[0],yStart[1]);
    cxt.lineTo(yEnd[0],yEnd[1]);
    cxt.strokeStyle="#fff";
    cxt.stroke();
    for(var i=0,len=data.x.length;i<len;i++){
        // 文字
        cxt.font="20px 宋体";
        cxt.fillStyle="#fff"
        cxt.fillText(data.x[i],yEnd[0]+55,yEnd[1]+22);
        // 线条
       /* cxt.beginPath();*/

        yStart[0]+=stepWidth;
        yEnd[0]+=stepWidth;
        cxt.stroke();
    }

    // 绘制横线和单位
    var xStart=[40,40],
        xEnd=[width-40,40];

    cxt.font="25px 宋体";
    cxt.fillText(data.yUnit,45,30);

    for(var s=0,len=data.y.length;s<len;s++){
        cxt.font="20px 宋体";
        cxt.fillText(data.y[s],0,endDot-s*stepHeight+5);
        cxt.beginPath();
        cxt.moveTo(xStart[0],xStart[1]);
        cxt.lineTo(xEnd[0],xEnd[1]);
        xStart[1]+=stepHeight;
        xEnd[1]+=stepHeight;
        cxt.strokeStyle="#fff";
        cxt.stroke();
    }

    //绘制矩形
        var xS=100;
        for(var i=0;i<data.x.length;i++){
            var h=data.data.da[i];
            var bb=height-(yStart[1]*2);
            var dataH=bb*(h/yValue);
            var high=height-(yStart[1])-dataH;
            cxt.fillStyle=data.data.color;
            cxt.fillRect(xS,high,40,dataH);
            cxt.font="24px 宋体";
            cxt.fillStyle="#fff";
            cxt.fillText(h,xS,high-3);
            xS+=80;

        }






}