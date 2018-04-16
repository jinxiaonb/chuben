<template>
    <div class="c-content">
        <div class="content">
            <div class="flex">
                <div class="flex-1"><a href="javascript:void(0);"><img :src="ad" alt=""></a></div>
            </div>
            <div class="c-intro">
                <div class="intro" v-for="item in basic">
                    <div class="flex-center pad-90"><img :src="item.avator" alt=""></div>
                    <div class="c-desc">
                        <h3 class="name">{{ item.title }}</h3>
                        <p class="desc">{{ item.desc }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import cbr from './img/cbr.jpeg';

export default {
  data: function(){
      return {
          ad:cbr,
          basic:[{
            avator:cbr,
            title:"权威·专家顾问",
            desc:"由浙江省特级教师、原浙师大幼教集团总园长、被坊间誉为“首席园长”的王芳园长掌舵，课程研发专家顾问来自北师大、南师大、华师大、浙师大等国内知名高校。",
          },{
            avator:cbr,
            title:"专业·资深教师",
            desc:"授课教师均为学前教育专业毕业，持幼儿教师资格证，至少拥有2年以上早教经验，全部通过初本幼园的入职培训及考试，熟知2-3岁幼儿身心发展特点和课程实施要领。",
          },{
            avator:cbr,
            title:"专业·资深教师",
            desc:"每班配备两名教师一名保育员，保育员招收亦是经过层层把关与专业培训，可及时响应2-3岁低幼儿童的保育需求，辅助班级教师一起促进每一名孩子的健康成长。",
          },]

          
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
.c-intro{
    box-shadow: 0px 0px 4px #ccc;
    border-radius: 4px;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
}
.intro{
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
    padding-top: 1rem;
}
.flex-center img{
    width: 3rem;
    height: 3rem;
    border-radius: 1.5rem;
}
.c-desc{
    padding: 0 0.6rem;
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



</style>
