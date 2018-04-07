<template>
  <div class="footer">
      <p><a href="javascript:void(0);">{{ btn }}</a></p>
  </div>
</template>
<script>
export default {
  data(){
      return {
          btn:"预约课程"
      }
  }
}
</script>
<style>
.footer a{
    width: 100%;
    height: 0.96rem;
    line-height: 0.96rem;
    text-align: center;
    color: #fff;
    display: inline-block;
    text-decoration: none;
    position: fixed;
    bottom: 0;
    background-color: #111;
}
</style>
