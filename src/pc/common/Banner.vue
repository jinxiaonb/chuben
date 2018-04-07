<template>
  <div class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="str in listImg" :style="backgroundImage:'url('+str.url+')'"></div>
      </div>
      <div class="swiper-pagination swiper-pagination-white"></div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swper.min.css';
export default {
  pros:['listImg'],
  mounted(){
      console.log('mounted',this);
      var swiper = new Swiper('.swiper-container',{
          pagination:'.swiper-pagination',
          paginationClickable:true,
          loop:true,
          speed:600,
          autoplay:4000,
          onTouchEnd:function(){
              swiper.startAutoplay();
          }
      });
  }
}
</script>
<style>
.swiper-container{
    width: 100%;
    height: 2.4rem;
}
</style>

