<template>
    <div class="content">
        <div class="fydz">
            <div class="flex">
                <div class="flex-1"><img :src="seyy" alt="少儿英语"></div>
            </div>

            <div class="kctj-form">
                <div class="flex">
                    <div class="flex-5"><input type="text" placeholder="姓名"></div>
                    <div class="flex-1"><i class="iconfont">&#xe605;</i></div>
                </div>
                <div class="flex">
                    <div class="flex-5"><input type="text" placeholder="电话"></div>
                    <div class="flex-1"><i class="iconfont">&#xe605;</i></div>
                </div>
                <div class="flex">
                    <div class="flex-5"><input type="text" placeholder="孩子年龄"></div>
                    <div class="flex-1"><i class="iconfont">&#xe605;</i></div>
                </div>
            </div>

            <div class="fydz-btn"><button type="button">预约课程</button></div>
            <h4><a href="javascript:void(0);"  @click="toRedict('/cbkt.html','初本课堂')">返回</a></h4>
        </div>
    </div>
    
</template>

<script>
import seyy from './img/seyy.jpeg';

export default {
  data: function(){
      return {
          seyy:seyy,
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

.kctj-form{
    margin: .5rem;
    background-color: #fff;
    border-radius: 8px;
    padding: .5rem 0;
}
.kctj-form input{
    outline: none;
    line-height: .5rem;
    color: #666;
    border: none;
}
.kctj-form .flex{
    line-height: .5rem;
    padding: .2rem .6rem;
}
.kctj-form i{
    font-size: .6rem;
    color: #999;
    text-align: right;
}
</style>