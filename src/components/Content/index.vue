<template>
  <div class="content-container">
      <h1>EEBD Lab</h1>
      <p>
          {{this.item}}
      </p>
      
  </div>
</template>

<script>
export default {
    name: 'Content',
    props: {
        item: String,
    },
}
</script>

<style scoped lang="less">
.content-container{
    width: 100%;
    background-image: linear-gradient(60deg, #3d3393 0%, #2b76b9 37%, #2cacd1 65%, #35eb93 100%);
    padding: 45px 15% 55px 15%;
}
h1{
    font-size: 50px;
    font-weight: bold;
    color:white;
}
p{
    color: white;
    font-size: 24px;
}
</style>