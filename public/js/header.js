$(function(){
    $.ajax({
        url:"header.html",
        type:"get",
        //当请求成功后
        success:function(result){
            // console.log(result);
            $(result).replaceAll("#tou");
            //动态创建一个《link》元素引用header.css，并将《link》自定添加到
            $(`<link rel="stylesheet" href="css/header.css">`)
            .appendTo("head");

        }
    })
})