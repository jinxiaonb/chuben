<template>
    <div class="content">
        <div class="fydz">
            <h3>集团介绍</h3>
            <p>新通教育集团成立于1996年，至今已经22年，是誉满全国的龙头教育集团。</p>
            <p>初本幼园是新通教育旗下的学前教育品牌，由教育学家王芳与新通集团总裁麻亚炜女士联合创办。</p>
            <p>诚信和专业是初本幼园与新通教育共同坚持的价值观，也是立足市场的根本。</p>
            <p>本着“寻其性，展其能，促其智”的教育目标，初本幼园倡导“爱、接纳、尊重”。</p>
            <p>致力于打造一所在民办学前教育领域的保育园范本</p>
            <div class="fydz-btn"><button type="button">预约课程</button></div>
            <h4><a href="javascript:void(0);"  @click="toRedict('/about.html','关于我们')">返回</a></h4>
        </div>
    </div>
    
</template>

<script>
export default {
  data: function(){
      return {
      }
  },
  created:function(){
    
  },
  methods:{
      toRedict:function(cb_href, cb_title){
          localStorage.setItem("cb_title", cb_title);
          location.href = cb_href;
      }
  }
}
</script>

<style>
body{
    background: #dadada;
}

.content .flex-1{
    margin: 0 0.125rem;
}
.content img{
    width: 100%;
    height: 100%;
}
.fydz{
    background-color: #fff;
    opacity: 1;
    width: 6rem;
    margin: .8rem auto;
    border-radius: 8px;
    text-align: center;
}
.fydz h3{
    line-height: 2rem;
    font-size: .4rem;
    color: #4A4A4A;
    letter-spacing: 0.32px;
}
.fydz p{
    font-size: .28rem;
    padding: 0 .5rem;
    line-height: .45rem;
    color: #666;
    text-align: left;
}
.fydz-btn{
    margin: 1rem .5rem .5rem .5rem;
}
.fydz-btn button{
    background-image: linear-gradient(-235deg, #FF8960 16%, #FF62A5 100%);
    color: #fff;
    height: 1rem;
    line-height: 1rem;
    width: 100%;
    border: none;
    border-radius: .4rem;
    outline: none;
}
.fydz h4{
    height: 1rem; 
}
.fydz a{
    color: #999;
}
</style>