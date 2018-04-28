new Vue({
    el:"#cbyey",
    data:function(){
        return {
            listname:"我们的荣誉",
            listImg:[{
                url:"/img/cbyey/cbyey.png"
            },{
                url:"/img/cbyey/cbyey.png"
            },{
                url:"/img/cbyey/cbyey.png"
            },{
                url:"/img/cbyey/cbyey.png"
            }],
            basic:{
              name:"王芳园长",
              desc:"初本幼园联合创始人",
              desc1:"我在浙江幼师附属幼儿园工作了35年，在这所在幼教圈地位，可媲美杭二中在高中圈地位的，杭州知名公办幼儿园里，我做了23年的总园长妈妈，带着附幼从最早的4个班幼儿园，发展成为有7个园区的幼教集团。",
              desc2:"直到2018年，我做了一个自己可能之前从未想过的决定，从幕后走向台前，和新通教育集团总裁麻亚炜女士，联合创立了初本幼园。", 
              desc3:"初本幼园名字蕴含我一直以来的办学理念——护其初心，寻其根本，培其元智，展其不凡。这个保育园的存在，一是辅助家长将2-3岁的孩子顺利过渡到幼儿园，同时也是为社会塑造一个爱和接纳的范本，毕竟当下，无论是社会、学校、还是家庭，对科学专业的幼儿教育理念认知和践行是不够的。",
              desc4:"我很庆幸，有一群真正爱孩子和懂孩子的专业人士，选择加入初本幼园的教研团队，和我一同成为孩子启蒙之路上的守护者。",
            },
            brand:{
                name:"品牌介绍",
                desc1:"新通教育集团成立于1996年，至今已经22年，是誉满全国的龙头教育集团。",
                desc2:"初本幼园是新通教育旗下的学前教育品牌，由教育学家王芳与新通集团总裁麻亚炜女士联合创办。",
                desc3:"诚信和专业是初本幼园与新通教育共同坚持的价值观，也是立足市场的根本。",
                desc4:"本着“寻其性，展其能，促其智”的教育目标，初本幼园倡导“爱、接纳、尊重”。",
                desc5:"致力于打造一所在民办学前教育领域的保育园范本",
            },
  
            cbyey:"/img/cbyey/cbyey.png",
            cur:""
        }
    },
    mounted(){
        console.log('mounted',this);
        var swiper = new Swiper('.swiper-container',{
              direction: 'horizontal',
              loop: true,
              
              // 如果需要分页器
              pagination: {
              el: '.swiper-pagination',
              }
        });
        //this.test();
    },
    created:function(){
        //console.log("created");
        localStorage.setItem("title","初本幼儿园");
        //$("#title").text("初本幼儿园");
        var t = this.getUrl().t;
        console.log(t);
        if(t=="intro"){
            this.changeToIntro();
        }else if(t=="brand"){
            this.changeToBrand();
        }else if(t=="hornor"){
            this.changeToHornor();
        }else{

        }
    },

    updated:function(){
        
    },
    methods:{
        getUrl:function(){
            var _search = location.search,
                innerpara = {};

            _search = (_search.indexOf("?") >= 0) ? _search.substring(1) : _search;
            if (_search.indexOf("&") >= 0) {
                _search = _search.split("&");
                var _len = _search.length;
                for (var i = 0; i < _len; i++) {
                    var item = _search[i];
                    item = item.indexOf("=") >= 0 ? item.split("=") : "";
                    innerpara[item[0]] = item[1];
                }
            } else {
                var item = _search.indexOf("=") >= 0 ? _search.split("=") : "";
                innerpara[item[0]] = item[1];
            }
            return innerpara;
            console.log(innerpara);
        },
        changeToIntro:function(){
            $("html,body").animate({scrollTop:280}, 1000);
        },
        changeToBrand:function(){
            // this.cur = "brand";
            // console.log(this.cur);
            // var anchor = this.$el.querySelector("#intro");
            // console.log(anchor.offsetTop);
            // document.body.scrollTop = anchor.offsetTop;
            // document.documentElement.scrollTop = anchor.offsetTop;
            $("html,body").animate({scrollTop:1478}, 1000);
        },
        changeToHornor:function(){
            //2233
            $("html,body").animate({scrollTop:2233}, 1000);
        }
    }
});