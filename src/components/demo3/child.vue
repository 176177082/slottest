<template>
  <div class="child">

    <h3>这里是子组件</h3>

    <slot  v-bind:data="data"></slot>
  </div>
</template>

<script>
  export default {
    name: 'child',
    data: function () {
      return {
        data: ['zhangsan', 'lisi', 'wanwu', 'zhaoliu', 'tianqi', 'xiaoba']
      }
    }
  }
</script>

<style scoped>
  .child{
    background-color: #00bbff;
    width: 100%;
    padding: 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
</style>
