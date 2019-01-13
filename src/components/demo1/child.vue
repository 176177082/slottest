<template>
  <div class="child">
    <h3>这里是子组件</h3>
    <!--<slot>-->
      <!--<h3>ggggggg</h3>-->
    <!--</slot>-->
  </div>
</template>

<script>
  export default {
    name: 'child'
  }
</script>

<style scoped>
  .child{
    background-color: #00bbff;
    width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
</style>
