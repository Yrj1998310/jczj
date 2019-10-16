var ul = document.getElementsByTagName("nav")[0];
var ol = document.getElementsByTagName("ol")[0];
var olarr = ol.getElementsByClassName("rxtw");
var ularr = ul.getElementsByClassName("hhhh");
var target = 0;
var timer = null;
var leader = 0;
for (var i = 0;i<ularr.length;i++){
olarr[i].index = i; // 绑定索引值
olarr[i].onclick = function () {// 循环绑定事件
target = ularr[this.index].offsetTop; //获取目标位置
clearInterval(timer); // 清除定时器
timer = setInterval(function () {//设置定时器
  var speed = (target-leader)/10;
  speed = speed>0?Math.ceil(speed):Math.floor(speed); // 判断方向
  leader = leader+speed; //下一步到的位置
  console.log(leader);
  window.scrollTo(0,leader); //移动
  if(leader == target){//判断是否到达，到达清除定时器
                  clearInterval(timer);
            }
        },10)
    }

}
var scrollhh = 0;
$("#ding").on("click",function(e){
    e.preventDefault();
   // window.scrollTo(0,0);
   //总距离
   var dist=scrollhh;
   //总步数
   var steps=50;
   //总时间
   var dura=500;
   //每步走多长
   var step=dist/steps;
   //每步间隔时间
   var interval=dura/steps;
   var timer=setInterval(function(){
       window.scrollBy(0,-step);
       steps--;
       if(steps==0){
           clearInterval(timer);
           steps=500;
       }
   },interval);//每隔一步的时间，就移动一步
})


window.onscroll = function() {
        scrollhh = document.body.scrollTOP||document.documentElement.scrollTop;
        var scrollTop = window.scrollY;//滚动距离
console.log(scrollTop)
scrollTop > ularr[0].offsetTop ?ol.style.display="block" : ol.style.display="none"
console.log(ularr[2].offsetTop)
        for(var i = 0; i < ularr.length; i++) {
            if(scrollTop >= ularr[i].offsetTop) {
                //排他 设置高亮
                for(var j = 0; j < olarr.length; j++) {
                    olarr[j].ById = '';
                }
                olarr[i].ById = 'red';
            }
        }
    }