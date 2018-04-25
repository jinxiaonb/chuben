$(document).ready(function(){
    var  idealViewWidth = window.screen.width;
    var  BASICVALUE = 750;
    document.documentElement.style.fontSize = (idealViewWidth / BASICVALUE) * 100 + 'px';


    $.ajax({
        type:"get",
        url:"/pages/header.html",
        dataType: "html",
        success:function(res){
            $("#header").html(res);
        }
    });
});
