<template>
    <div class="c-w">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="str in listImg" :style="{ backgroundImage: 'url(' + str.url + ')' }"></div>
            </div>
            <div class="swiper-pagination swiper-pagination-white"></div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

import cbyey from '../cbyey/img/cbyey.png';
export default {
  props: ['listImg'],
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
  }
}
</script>
<style>
.c-w{
    margin: 0 0.25rem;
}
.swiper-container{
    width: 100%;
    height: 4rem;
}
.swiper-container .swiper-wrapper{
    width: 100%;
    height: 100%;
}
.swiper-container .swiper-slide{
    background-position: cente;
    background-size: cover;
    width: 100%;
    height: 100%;
}
.swiper-slide img{
    width: 100%;
    height: 100%;
}
.swiper-container .swiper-pagination-bullet{
    width: 0.1rem;
    height: 0.1rem;
    display: inline-block;
    background: #7c5e53;
}
</style>

