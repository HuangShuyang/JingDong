//秒杀倒计时

//第一步获取Id
var hours  = document.getElementById("hours");
var minute = document.getElementById("minute");
var second = document.getElementById("second");
//第二步设置目标时间
var endTime = new Date("2017/12/30 23:00");
endTime = endTime.getTime();
//第三步：加定时器，获取当前时间的时间戳
setInterval(function(){
    var theTime = new Date();
    theTime = theTime.getTime();
    //第三步：计算时间差，并且换算成天数、小时、分钟、秒
    var currentTime = endTime - theTime;
    var h = parseInt( currentTime % (24*3600*1000) / 3600000 );
    var m = parseInt( currentTime % 3600000 / 60000 );
    var s = parseInt( currentTime % 60000 / 1000 );
    if (h<10){
        h="0"+h;
    }
    if (m<10){
        m="0"+m;
    }
    if (s<10){
        s="0"+s;
    }
//第四步输出结果
    hours.innerText=(h);
    minute.innerText=(m);
    second.innerText=(s);
    document.close();
}, 1000);
//抢购倒计时结束
//促销||公告
function showTab(tabid){
    var father = document.getElementById("container");
    var tabs = father.children;
    for(var i = 0; i < tabs.length; i++){
        if(tabs[i ].getAttribute("id") == tabid){
            tabs[i ].style.zIndex = "1";
        }else{
            tabs[i ].style.zIndex = "0";
        }
    }
}

