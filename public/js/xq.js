
$(".pao").on("click",function(){
    var me=$(document).scrollTop() 
    var to=$(this).parent()
                  .next()
                  .offset().top
    var timer=setInterval(() => {
          var speed= to/200;
          me+=speed
          window.scrollTo(0,me)
          if(me>=to){
            clearInterval(timer)
          }
        }, 10);
})