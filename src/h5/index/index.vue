<template>
    <div class="content">
        <div class="flex">
            <div class="flex-1"><a href="javascript:void(0);" @click="toRedict('/cbyey.html','初本幼儿园')"><img :src="cbyey" alt="初本幼儿园"></a></div>
        </div>
        <div class="flex">
            <div class="flex-1"><a href="javascript:void(0);" @click="toRedict('/cbr.html','初本人')"><img :src="cbr" alt="初本人"></a></div>
            <div class="flex-1"><a href="javascript:void(0);" @click="toRedict('/cby.html','初本园')"><img :src="cby" alt="初本园"></a></div>
        </div>
        <div class="flex">
            <div class="flex-1"><a href="javascript:void(0);" @click="toRedict('/cbkt.html','初本课堂')"><img :src="cbkt" alt="初本课堂"></a></div>
        </div>
        <div class="flex">
            <div class="flex-1"><a href="javascript:void(0);" @click="toRedict('/about.html','关于我们')"><img :src="about" alt="关于我们"></a></div>
            <div class="flex-1"><a href="javascript:void(0);" @click="toRedict('/jzkt.html','家长课堂')"><img :src="jzkt" alt="家长课堂"></a></div>
        </div>
    </div>
    
</template>

<script>
import cbkt from './img/cbkt.png';
import cbr from './img/cbr.png';
import cby from './img/cby.png';
import cbyey from './img/cbyey.png';
import about from './img/about.png';
import jzkt from './img/jzkt.png';

export default {
  data: function(){
      return {
          cbyey:cbyey,
          cbr:cbr,
          cby:cby,
          cbkt:cbkt,
          about:about,
          jzkt:jzkt
      }
  },
  created:function(){
      localStorage.setItem("cb_title","首页");
  },
  methods:{
      toRedict:function(cb_href,cb_title){
          localStorage.setItem("cb_title",cb_title);
          location.href = cb_href;
      }
  }
}
</script>
<style>

.content{
    width: 7.25rem;
    margin: 0 auto;
}
.content .flex{
    margin: 0.25rem 0;
}
.content .flex-1{
    margin: 0 0.125rem;
}
.content img{
    width: 100%;
    height: 100%;
}
</style>
