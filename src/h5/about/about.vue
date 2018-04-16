<template>
    <div class="content">
        <div class="flex">
            <div class="flex-1"><a href="javascript:void(0);" @click="toRedict('/fydz.html','分园地址')"><img :src="fydz" alt="分园地址"></a></div>
            <div class="flex-1"><a href="javascript:void(0);" @click="toRedict('/jtjs.html','集团介绍')"><img :src="jtjs" alt="集团介绍"></a></div>
        </div>
    </div>
    
</template>

<script>
import fydz from './img/fydz.png';
import jtjs from './img/jtjs.png';

export default {
  data: function(){
      return {
          fydz:fydz,
          jtjs:jtjs,
      }
  },
  created:function(){
      localStorage.setItem("cb_title","关于我们");
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