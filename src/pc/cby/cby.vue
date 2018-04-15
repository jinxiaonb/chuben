<template>
    <div class="c-content">
        <div class="content">
            <div class="flex">
                <div class="flex-1"><a href="javascript:void(0);"><img :src="cby" alt="初本园"></a></div>
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
            <div class="mrkc">
                <h3 class="name">每日课程</h3>
                <img :src="mrkc" alt="">
            </div>
        </div>
    </div>
</template>

<script>

import cby from './img/cby.jpeg';
import mrkc from './img/mrkc.jpeg';
import left from './img/left.jpeg';

export default {
  data: function(){
      return {
          basic:[{
            title:"探 索",
            left:left,
            desc:"由浙江省特级教师、原浙师大幼教集团总园长、被坊间誉为“首席园长”的王芳园长掌舵，课程研发专家顾问来自北师大、南师大、华师大、浙师大等国内知名高校。",
          },{
            title:"办学理念",
            left:left,
            desc:"由浙江省特级教师、原浙师大幼教集团总园长、被坊间誉为“首席园长”的王芳园长掌舵，课程研发专家顾问来自北师大、南师大、华师大、浙师大等国内知名高校。",
          },],
          cby:cby,
          mrkc:mrkc
      }
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
    margin-bottom: 0.5rem;
}
.c-intro{
    box-shadow: 0px 0px 4px #ccc;
    border-radius: 4px;
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
.mrkc{
    box-shadow: 0px 0px 4px #ccc;
    border-radius: 4px;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
}
.mrkc .name{
    text-align: center;
    line-height: 2rem;
    font-size: 0.5rem;
    color: #E91E63;
}
</style>
