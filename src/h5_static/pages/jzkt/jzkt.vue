<template>
    <div class="c-content">
        <div class="content">
            <div class="flex">
                <div class="flex-1"><a href="javascript:void(0);"><img :src="jzkt" alt="家长课堂"></a></div>
            </div>
            <div class="intro">
                <div class="flex c-intro" v-for="item in basic">
                    <div class="flex-3"><img :src="item.left" alt="初本园"></div>
                    <div class="c-desc flex-5">
                        <h3 class="name">{{ item.title }}</h3>
                        <p class="desc">{{ item.desc }}</p>
                    </div>
                </div>
            </div>
            <div class="zjtd">
                <h3 class="main-title">专家团队</h3>
                <app-banner :listImg="listImg"></app-banner>
            </div>
            
            <div class="stkc">
                <h3 class="main-title">试听课程</h3>
                <div class="stkc-video">
                    <video  controls="controls" id="stkc-movie">
                        <source :src="movieogg" type="video/ogg">
                        <source :src="moviemp4" type="video/mp4">
                    </video>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Banner2 from '../common/Banner2.vue';
import jzkt from './img/jzkt.jpeg';
import left from './img/left.jpeg';

import movieogg from './video/movie.ogg';
import moviemp4 from './video/movie.mp4';


export default {
  data: function(){
      return {
          jzkt:jzkt,
          movieogg:movieogg,
          moviemp4:moviemp4,
          basic:[{
            title:"课程体系",
            left:left,
            desc:"由浙江省特级教师、原浙师大幼教集团总园长、被坊间誉为“首席园长”的王芳园长掌舵，课程研发专家顾问来自北师大、南师大、华师大、浙师大等国内知名高校。",
          }],
          listImg:[{
              title:"专家",
              desc:"由浙江省特级教师、原浙师大幼教集团总园长、被坊间誉为“首席园长”的王芳园长掌舵，课程研发专家顾问来自北师大、南师大、华师大、浙师大等国内知名高校。",
              img:jzkt,
              title2:"顾问",
              desc2:"由浙江省特级教师、原浙师大幼教集团总园长、被坊间誉为“首席园长”的王芳园长掌舵，课程研发专家顾问来自北师大、南师大、华师大、浙师大等国内知名高校。",
              img2:jzkt
          },{
              title:"专家",
              desc:"由浙江省特级教师、原浙师大幼教集团总园长、被坊间誉为“首席园长”的王芳园长掌舵，课程研发专家顾问来自北师大、南师大、华师大、浙师大等国内知名高校。",
              img:jzkt,
              title2:"顾问",
              desc2:"由浙江省特级教师、原浙师大幼教集团总园长、被坊间誉为“首席园长”的王芳园长掌舵，课程研发专家顾问来自北师大、南师大、华师大、浙师大等国内知名高校。",
              img2:jzkt
          },{
              title:"专家",
              desc:"由浙江省特级教师、原浙师大幼教集团总园长、被坊间誉为“首席园长”的王芳园长掌舵，课程研发专家顾问来自北师大、南师大、华师大、浙师大等国内知名高校。",
              img:jzkt,
              title2:"顾问",
              desc2:"由浙江省特级教师、原浙师大幼教集团总园长、被坊间誉为“首席园长”的王芳园长掌舵，课程研发专家顾问来自北师大、南师大、华师大、浙师大等国内知名高校。",
              img2:jzkt
          },{
              title:"专家",
              desc:"由浙江省特级教师、原浙师大幼教集团总园长、被坊间誉为“首席园长”的王芳园长掌舵，课程研发专家顾问来自北师大、南师大、华师大、浙师大等国内知名高校。",
              img:jzkt,
              title2:"顾问",
              desc2:"由浙江省特级教师、原浙师大幼教集团总园长、被坊间誉为“首席园长”的王芳园长掌舵，课程研发专家顾问来自北师大、南师大、华师大、浙师大等国内知名高校。",
              img2:jzkt
          }],
          
      }
  },
    components: {
        'app-banner': Banner2
    }
}
</script>
<style>

.content{
    width: 7rem;
    margin: 0 auto;
    padding-bottom: 1rem;
}
.content .flex{
    margin: 0.25rem 0;
}
.content img{
    width: 100%;
    height: 100%;
}
.intro{
    margin-bottom: 0.5rem;
}
.c-intro{
    box-shadow: 0px 0px 4px #ccc;
    border-radius: 4px;
}
.c-desc{
    padding: 0 0.3rem;
    padding-bottom: 1rem;
    line-height: .55rem;
}
.c-desc p{
    color: #666;
}
.c-desc .name{
    line-height: 1rem;
    font-size: .5rem;
    color: #E91E63;
}
.zjtd{
    box-shadow: 0px 0px 4px #ccc;
    border-radius: 4px;
}
.main-title {
    text-align: center;
    color: #E91E63;
    font-size: .35rem;
    line-height: 2rem;
}
.stkc .main-title{
    font-size: .5rem;
}
.stkc video{
    width: 7rem;
}
</style>
