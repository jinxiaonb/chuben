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
            $("#title").text(localStorage.getItem("title"));
        }
    });


    $(document).on("touchstart","#leftnav",function(){
        if($(".nav").hasClass("hidden")){
            $(".nav").removeClass("hidden");
        }else{
            $(".nav").addClass("hidden");
        }
    });

    $(window).scroll(function(e){
        $(".nav").addClass("hidden");
    });

    function getPageScroll() {
        var xScroll, yScroll;
        if (self.pageYOffset) {
          yScroll = self.pageYOffset;
          xScroll = self.pageXOffset;
        } else if (document.documentElement && document.documentElement.scrollTop) { // Explorer 6 Strict
          yScroll = document.documentElement.scrollTop;
          xScroll = document.documentElement.scrollLeft;
        } else if (document.body) {// all other Explorers
          yScroll = document.body.scrollTop;
          xScroll = document.body.scrollLeft;  
        }
        arrayPageScroll = new Array(xScroll,yScroll);
        return arrayPageScroll;
    };


    $(document).on("touchstart",".main-nav li",function(){
        var _this = $(this),
        _target = _this.attr("data-target");
        console.log(_target);

        $(".sec-list").addClass("hidden");
        $(_target).removeClass("hidden");
    });


});
