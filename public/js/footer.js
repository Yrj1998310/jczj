$(function(){
    $.ajax({
        url:"footer.html",
        type:"get",
        //当请求成功后
        success:function(result){
           // console.log(result);
            $(result).replaceAll("#jiao");
            //动态创建一个《link》元素引用header.css，并将《link》自定添加到
            $(`<link rel="stylesheet" href="css/footer.css">`)
            .appendTo("head");
            
        }
    })
})