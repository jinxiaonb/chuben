<template>
    <div id="header" class="header">
      <ul>
          <li><a href="javascript:void(0);">{{ index }}</a></li>
          <li><a href="javascript:void(0);">{{ cbr }}</a></li>
          <li><a href="javascript:void(0);">{{ cby }}</a></li>
          <li><a href="javascript:void(0);">{{ cbkt }}</a></li>
          <li><a href="javascript:void(0);">{{ jzkt }}</a></li>
          <li><a href="javascript:void(0);">{{ about }}</a></li>
      </ul>
    </div>
</template>

<script>
export default {
  data(){
		return {
            index:"首页",
            cbr:"初本人",
            cby:"初本园",
            cbkt:"初本课堂",
            jzkt:"家长课堂",
            about:"关于我们"
        }	
	}
}
</script>
<style>
    .header{
        color: #333;
        font-size: 0.24rem;
        height: 0.80rem;
        line-height: 0.80rem;
        border-bottom: 1px solid #dedede;
    }

    .header ul{
        overflow: hidden;
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .header ul li{
        float: left;
        width: 1.25rem;
        text-align: center;
    }
    .header a{
        text-decoration: none;
        color: #333;
        width: 100%;
        height: 100%;
        display: inline-block;
    }
</style>


