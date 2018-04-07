<template>
    <div class="content">
        <p>{{ greeting }} world !</p>
    </div>
    
</template>

<script>
export default {
  data: function(){
      return {
          greeting:'Hello'
      }
  }
}
</script>
<style>

.content ul li{
    background-color: #f0f0f0;
}
</style>
