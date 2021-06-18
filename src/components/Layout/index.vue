<template>
  <div class="layout-container">
    <div class="top">
      <slot name="top"></slot>
    </div>
    <div class="main">
      <slot></slot>
    </div>
    <hr>
    <div class="bottom">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.layout-container{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
hr{
  margin: 20px 0;
}
.top{
  position: relative;
  height: 45px;
  flex: 0 0 auto;
  overflow: hidden;
}
.bottom{
  height: 100px;
  flex: 0 0 auto;
  overflow: hidden;
}
.main{
  flex: 1 1 auto;
  overflow: hidden;
}
</style>