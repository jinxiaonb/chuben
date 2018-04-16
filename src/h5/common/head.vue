<template>
    <div id="header" class="header">
        <div class="search">
            <div class="flex-1 t-center"><i class="iconfont" @click="leftnav">&#xe6d1;</i></div>
            <div class="flex-4" id="title">{{ cb_title }}</div>
            <div class="flex-1 t-center"><i class="iconfont">&#xe607;</i></div>
        </div>
        <div class="nav" v-bind:class="isHidden?'hidden':''">
            <div class="flex-1">
                <ul class="main-nav">
                    <li><a href="javascript:void(0);"><i class="iconfont">&#xe600;</i></a></li>
                    <li><a href="javascript:void(0);"><i class="iconfont">&#xe600;</i></a></li>
                    <li><a href="javascript:void(0);"><i class="iconfont">&#xe600;</i></a></li>
                    <li><a href="javascript:void(0);"><i class="iconfont">&#xe600;</i></a></li>
                    <li><a href="javascript:void(0);"><i class="iconfont">&#xe600;</i></a></li>
                    <li><a href="javascript:void(0);"><i class="iconfont">&#xe600;</i></a></li>
                    <li><a href="javascript:void(0);"><i class="iconfont">&#xe600;</i></a></li>
                </ul>
            </div>
            <div class="flex-4 left-nav">
                <div class="sec-list">
                    <h3><strong>首页</strong><span>HOME</span></h3>
                    <ul class="sec-nav">
                        <li><a href="javascript:void(0);" @click="selectCur"><i class="iconfont flex-1">&#xe600;</i><span class="flex-4">园长寄语</span></a></li>
                        <li><a href="javascript:void(0);"><i class="iconfont flex-1">&#xe600;</i><span class="flex-4">品牌介绍</span></a></li>
                        <li><a href="javascript:void(0);"><i class="iconfont flex-1">&#xe600;</i><span class="flex-4">我们的荣誉</span></a></li>
                    </ul>
                </div>
                <div class="sec-list">
                    <h3><strong>初本人</strong></h3>
                    <ul class="sec-nav">
                        <li><a href="javascript:void(0);"><i class="iconfont flex-1">&#xe600;</i><span class="flex-3">教育团队</span><em class="flex-1">8</em></a></li>
                    </ul>
                </div>
                <div class="sec-list">
                    <h3><strong>初本园</strong></h3>
                    <ul class="sec-nav">
                        <li><a href="javascript:void(0);"><i class="iconfont flex-1">&#xe600;</i><span class="flex-4">探索</span></a></li>
                        <li><a href="javascript:void(0);"><i class="iconfont flex-1">&#xe600;</i><span class="flex-4">办园理念</span></a></li>
                        <li><a href="javascript:void(0);"><i class="iconfont flex-1">&#xe600;</i><span class="flex-4">每日课表</span></a></li>
                    </ul>
                </div>
                <div class="sec-list">
                    <h3><strong>初本课堂</strong></h3>
                    <ul class="sec-nav">
                        <li><a href="javascript:void(0);"><i class="iconfont flex-1">&#xe600;</i><span class="flex-4">课程体系</span></a></li>
                        <li><a href="javascript:void(0);"><i class="iconfont flex-1">&#xe600;</i><span class="flex-4">课程推荐</span></a></li>
                        <li><a href="javascript:void(0);"><i class="iconfont flex-1">&#xe600;</i><span class="flex-4">精彩瞬间</span></a></li>
                    </ul>
                </div>
                <div class="sec-list">
                    <h3><strong>家长课堂</strong></h3>
                    <ul class="sec-nav">
                        <li><a href="javascript:void(0);"><i class="iconfont flex-1">&#xe600;</i><span class="flex-4">课程体系</span></a></li>
                        <li><a href="javascript:void(0);"><i class="iconfont flex-1">&#xe600;</i><span class="flex-4">专家团队</span></a></li>
                        <li><a href="javascript:void(0);"><i class="iconfont flex-1">&#xe600;</i><span class="flex-4">试听课程</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data(){
		return {
            isHidden:true,
            cb_title:"首页",
            index:"首页",
            cbr:"初本人",
            cby:"初本园",
            cbkt:"初本课堂",
            jzkt:"家长课堂",
            about:"关于我们"
        }	
    },
    mounted:function(){
        var _this = this;
        if(localStorage.getItem("cb_title")){
            _this.cb_title = localStorage.getItem("cb_title");
        }
    },
    methods:{
        leftnav:function(){
            console.log("....");
            let _this = this;
            _this.isHidden = !_this.isHidden;
        },
        selectCur:function(){
            console.log("....");
        }
    }
}
</script>
<style>
    .search{
        display: flex;
        background-color: #3F51B5;
        color: #fff;
        font-size: 0.36rem;
        height: 0.96rem;
        line-height: 0.86rem;
    }
    .search i{
        font-size: 0.48rem;
    }
   
    .nav{
        width: 6rem;
        display: flex;
        background-color: #fafafa;
        position: absolute;
        border-bottom: 1px solid #dedede;
        z-index: 101;
    }
    .nav .main-nav li{
        text-align: center;
        height: 1.20rem;
        line-height: 1.20rem;
    }
    .main-nav i{
        font-size: 0.48rem;
    }
   
    .nav a{
        text-decoration: none;
        color: #666;
        width: 100%;
        height: 100%;
        display: inline-block;
    }
    .left-nav{
        border-right: 1px solid #dedede;
    }
    .sec-list{
        padding-left: 0.4rem;
        border-left: 1px solid #dedede;
    }
    .sec-list h3 {
        font-size: 0.24rem;
        padding: 0.4rem 0;
    }
    .sec-nav span,.sec-nav em{
        font-size: 0.24rem;
    }
    .sec-nav li{
        height:1rem;
        line-height: 1rem;
    }
    .sec-nav a{
        display: flex;
    }
    .sec-list i{
        font-size: 0.48rem;
        color: #999;
    }
    .sec-nav em{
        color: #00f;
    }

</style>


