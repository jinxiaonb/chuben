<template>
    <div class="content">
        <div class="flex">
            <div class="flex-1"><a href="javascript:void(0);"><img :src="cbyey" alt="初本幼儿园"></a></div>
        </div>
        <div class="flex">
            <div class="flex-1"><a href="javascript:void(0);"><img :src="cbr" alt="初本人"></a></div>
            <div class="flex-1"><a href="javascript:void(0);"><img :src="cby" alt="初本园"></a></div>
        </div>
        <div class="flex">
            <div class="flex-1"><a href="javascript:void(0);"><img :src="cbkt" alt="初本课堂"></a></div>
        </div>
        <div class="flex">
            <div class="flex-1"><a href="javascript:void(0);"><img :src="gywm" alt="关于我们"></a></div>
            <div class="flex-1"><a href="javascript:void(0);"><img :src="jzkt" alt="家长课堂"></a></div>
        </div>
    </div>
    
</template>

<script>
import cbkt from './img/cbkt.png';
import cbr from './img/cbr.png';
import cby from './img/cby.png';
import cbyey from './img/cbyey.png';
import gywm from './img/gywm.png';
import jzkt from './img/jzkt.png';

export default {
  data: function(){
      return {
          cbyey:cbyey,
          cbr:cbr,
          cby:cby,
          cbkt:cbkt,
          gywm:gywm,
          jzkt:jzkt
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
