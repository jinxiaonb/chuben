<template>
    <div class="c-content">
        <div class="content">
            <div class="flex">
                <div class="flex-1"><a href="javascript:void(0);"><img :src="cbyey" alt="初本幼儿园"></a></div>
            </div>
            <div class="intro">
                <div class="flex-center pad-90"><img :src="cbyey" alt=""></div>
                <div class="c-desc">
                    <h3 class="name">{{ basic.name }}</h3>
                    <p class="desc">{{ basic.desc1 }}</p>
                    <p class="desc">{{ basic.desc2 }}</p>
                    <p class="desc">{{ basic.desc3 }}</p>
                    <p class="desc">{{ basic.desc4 }}</p>
                    <h3 class="name-right">{{ basic.name }}</h3>
                    <p class="desc-right">{{ basic.desc }}</p>
                </div>
            </div>

            <div class="brand">
                <div class="flex">
                    <div class="flex-1"><a href="javascript:void(0);"><img :src="cbyey" alt="初本幼儿园"></a></div>
                </div>
                <h3 class="name">{{ brand.name }}</h3>
                <div class="c-desc">
                    <p class="desc">{{ brand.desc1 }}</p>
                    <p class="desc">{{ brand.desc2 }}</p>
                    <p class="desc">{{ brand.desc3 }}</p>
                    <p class="desc">{{ brand.desc4 }}</p>
                    <p class="desc">{{ brand.desc5 }}</p>
                </div>
            </div>
            <h3 class="name">{{ listname }}</h3>
            <app-banner :listImg="listImg"></app-banner>
        </div>
        <div class="btn-order"><button type="button">预约课程</button></div>
    </div>
</template>

<script>

import Banner from '../common/Banner.vue';
import cbyey from './img/cbyey.png';

export default {
  data: function(){
      return {
          listname:"我们的荣誉",
          listImg:[{
              url:cbyey
          },{
              url:cbyey
          },{
              url:cbyey
          },{
              url:cbyey
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

          cbyey:cbyey
      }
  },
    components: {
        'app-banner': Banner
    }
}
</script>
<style>

.content{
    width: 7rem;
    margin: 0 auto;
}
.content .flex{
    margin: 0.25rem 0;
}
.intro{
    box-shadow: 0px 0px 4px #ccc;
    border-radius: 4px;
    margin-bottom: 0.5rem;
}
.brand{
    box-shadow: 0px 0px 4px #ccc;
    border-radius: 4px;
    margin-bottom: 0.5rem;
}
.content img{
    width: 100%;
    height: 100%;
}
.flex-center{
    display: flex;
    justify-content: center;
}
.pad-90{
    padding-top: 1.5rem;
}
.flex-center img{
    width: 3rem;
    height: 3rem;
    border-radius: 1.5rem;
}
.c-desc{
    padding: 0 0.6rem;
    padding-bottom: 1rem;
    line-height: .55rem;
}
.c-desc p{
    color: #666;
}
.name{
    text-align: center;
    line-height: 1rem;
    font-size: 0.5rem;
    color: #E91E63;
    padding: .5rem 0 .3rem 0;
}
.name-right{
    text-align: right;
    line-height: .6rem;
}
.desc-right{
    text-align: right;
    height: .8rem;
}

.btn-order{
    height: 1rem;
    line-height: 1rem;
    background-image: linear-gradient(-235deg, #FF8960 16%, #FF62A5 100%);
    color: #fff;
    text-align: center;
    margin-top: 1rem;
}
.btn-order button{
    color: #fff;
    width: 100%;
    height: 100%;
}
</style>
