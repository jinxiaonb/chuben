<template>
    <div class="content">
        <div class="fydz">
            <div class="flex">
                <div class="flex-1"><img :src="fydzmap" alt="分园地址"></div>
            </div>
            <h3>分园地址</h3>
            <p>杭州市中山北路611号地铁商务大厦2楼</p>
            <div class="fydz-btn"><button type="button">预约课程</button></div>
            <h4><a href="javascript:void(0);"  @click="toRedict('/about.html','关于我们')">返回</a></h4>
        </div>
    </div>
    
</template>

<script>
import fydzmap from './img/fydzmap.png';

export default {
  data: function(){
      return {
          fydzmap:fydzmap,
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
    color: #666;
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