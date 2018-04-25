<template>
    <div class="c-content">
        <div class="content">
            <div class="flex">
                <div class="flex-1"><a href="javascript:void(0);"><img :src="cbkt" alt="初本幼儿园"></a></div>
            </div>

            <div class="brand">
                <h3 class="name">{{ ckjs.name }}</h3>
                <div class="c-desc">
                    <p class="desc">{{ ckjs.desc }}</p>
                </div>
                <div class="c-detail cbkt">
                    <div class="flex" v-for="item in ckjs.list">
                        <div class="flex-1"><img :src="item.img" :alt="item.name"><p>{{item.name}}</p></div>
                        <div class="flex-1"><img :src="item.img1" :alt="item.name1"><p>{{item.name1}}</p></div>
                    </div>
                    <div class="flex">
                        <div class="flex-1"><img :src="ckjs.zlqm.img" :alt="ckjs.zlqm.img"><p>{{ckjs.zlqm.name}}</p></div>
                    </div>
                </div>
            </div>
            <div class="kctj">
                <h3 class="name">{{ kctj.name }}</h3>
                <div class="kctj-form">
                    <div class="flex">
                        <div class="flex-5"><input type="text" placeholder="姓名"></div>
                        <div class="flex-1"><i class="iconfont">&#xe605;</i></div>
                    </div>
                    <div class="flex">
                        <div class="flex-5"><input type="text" placeholder="孩子年龄"></div>
                        <div class="flex-1"><i class="iconfont">&#xe605;</i></div>
                    </div>
                    <div class="flex">
                        <div class="flex-1"><button type="button">{{ kctj.name }}</button></div>
                    </div>
                </div>
            
                <div class="yykc">
                    <div class="flex">
                        <div class="flex-1"><img :src="yykc.img " alt="yykc.name"></div>
                    </div>
                    <div class="flex">
                        <div class="flex-1">
                            <p>{{ yykc.desc }}</p>
                        </div>
                    </div>
                    <div class="flex btn-flex">
                        <div class="flex-1"><button type="button">{{ yykc.name }}</button></div>
                    </div>
                    <h4><a href="javascript:void(0);">返回</a></h4>
                </div>
            </div>
            <h3 class="name">{{ listname }}</h3>
            <app-banner :listImg="listImg"></app-banner>
        </div>
    </div>
</template>

<script>

import Banner from '../common/Banner.vue';
import cbkt from './img/cbkt.png';
import jcsj from './img/jcsj.jpeg';

import klcf from './img/klcf.jpeg';
import ydly from './img/ydly.jpeg';
import tsgjx from './img/tsgjx.jpeg';
import ylsg from './img/ylsg.jpeg';
import yscy from './img/yscy.jpeg';
import lyxg from './img/lyxg.jpeg';
import zlqm from './img/zlqm.jpeg';

import seyy from './img/seyy.jpeg';

export default {
  data: function(){
      return {
          cbkt:cbkt,
          listname:"精彩瞬间",
          listImg:[{
              url:jcsj
          },{
              url:jcsj
          },{
              url:jcsj
          },{
              url:jcsj
          }],
          ckjs:{
              name:"课程特色",
              desc:"吸收蒙特梭利、华德福教育方式的优势，并融合情感教育和传统教育的精髓，打造具备初本幼园特色的课程体系，从八大维度进行幼儿全方位启蒙。",
              list:[{
                  img:klcf,
                  name:"快乐厨房",
                  img1:ydly,
                  name1:"运动乐园"
              },{
                  img:tsgjx,
                  name:"图书馆教学",
                  img1:ylsg,
                  name1:"韵律时光"
              },{
                  img:yscy,
                  name:"艺术创游",
                  img1:lyxg,
                  name1:"礼仪习惯"
              }],
              zlqm:{
                  img:zlqm,
                  name:"智力启蒙"
              }
          },
          kctj:{
              name:"课程推荐"
          },
          yykc:{
              name:"预约课程",
              img:seyy,
              desc:"每班配备两名教师一名保育员，保育员招收亦是经过层层把关与专业培训，可及时响应2-3岁低幼儿童的保育需求，辅助班级教师一起促进每一名孩子的健康成长。"
          }
      }
  },
    components: {
        'app-banner': Banner
    }
}
</script>
<style>

.content{
    width: 7rem;
    margin: 0 auto;
    padding-bottom: 1rem;
}
.content .flex{
    margin: 0.25rem 0;
}
.intro{
    box-shadow: 0px 0px 4px #ccc;
    border-radius: 4px;
    margin-bottom: 0.5rem;
}
.brand{
    box-shadow: 0px 0px 4px #ccc;
    border-radius: 4px;
    margin-bottom: 0.5rem;
    background-color: #fafafa;
}
.kctj{
    box-shadow: 0px 0px 4px #ccc;
    border-radius: 4px;
    background-color: #fafafa;
    padding-bottom: .5rem;
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
.kctj-form button,.yykc button{
    background-image: linear-gradient(-235deg, #FF8960 16%, #FF62A5 100%);
    color: #fff;
    text-align: center;
    width: 100%;
    height: 1rem;
    border-radius: .6rem;
    border:none;
}
.yykc .btn-flex{
    padding:0 .6rem;
    margin: .6rem 0;
}
.yykc{
    background-color: #fff;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    margin: 0 .5rem;
}
.yykc p{
    color: #666;
    line-height: .5rem;
    padding: 0 .5rem;
}
.yykc h4{
    text-align: center;
    height: 1rem;
    color: #999;
}
.yykc h4 a{
    width: 100%;
    height: 100%;
    display: inline-block;
    color: #999;
}
.content img{
    width: 100%;
    height: 100%;
}
.c-detail{
    text-align: center;
}
.cbkt .flex{
    padding-bottom: 1rem;
}
.c-detail p{
    height: 1rem;
    line-height: 1rem;
    color: #9b9b9b;
}
.c-detail img{
    width: 80px;
    height: 60px;
}
.flex-center{
    display: flex;
    justify-content: center;
}
.pad-90{
    padding-top: 1.5rem;
}
.flex-center img{
    width: 3rem;
    height: 3rem;
    border-radius: 1.5rem;
}
.c-desc{
    padding: 0 0.4rem;
    padding-bottom: 1rem;
    line-height: .5rem;
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
.name-right{
    text-align: right;
    line-height: .6rem;
}
.desc-right{
    text-align: right;
    height: .8rem;
}

.btn-order{
    height: 1rem;
    line-height: 1rem;
    background-image: linear-gradient(-235deg, #FF8960 16%, #FF62A5 100%);
    color: #fff;
    text-align: center;
    margin-top: 1rem;
}
.btn-order button{
    color: #fff;
    width: 100%;
    height: 100%;
}
</style>
