<template>
    <div class="c-w">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in listImg">
                    <div class="self-slide">
                        <div class="self-common self-left">
                            <div class="flex"><img :src="item.img" alt=""></div>
                            <h3 class="title">{{ item.title }}</h3>
                            <p class="desc">{{ item.desc }}</p>
                        </div>
                        <div class="self-common self-slide">
                            <div class="flex"><img :src="item.img2" alt=""></div>
                            <h3 class="title">{{ item.title2 }}</h3>
                            <p class="desc">{{ item.desc2 }}</p>
                        </div>
                    </div>
                </div>
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
.swiper-container{
    width: 100%;
    height: 8rem;
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
}
.swiper-container .swiper-pagination-bullet{
    width: 0.1rem;
    height: 0.1rem;
    display: inline-block;
    background: #7c5e53;
}

.self-slide{
    overflow: hidden;
}
.self-slide .self-common{
    float: left;
    width: 50%;
    height: 8rem;
}
.self-common .flex{
    width: 50%;
    margin: 0 auto;
}
.self-common img{
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 1rem;
}
.self-common .title{
    text-align: center;
    color: #E91E63;
    line-height: 1.5rem;
    font-size: .35rem;
}
.self-common .desc{
    font-size: .3rem;
    color: #999;
    line-height: .45rem;
    padding: 0 .35rem;
}
</style>

