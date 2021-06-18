<template>
  <div class="personal-infor-container">
    <div class="personal-infor">
      <div class="personal-img">
        <img :src="personalData.imgSrc" alt="">
        <p>{{personalData.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Aside",
    props:{
      personalData:{
        type:Object,
        required:true
      }
    }
  }
</script>
<style scoped>
  .personal-infor-container{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .personal-infor{
    width: 100%;
    overflow: hidden;
  }
  .personal-img{
    width: 100%;
    margin-left:28%;
    margin-top: 20px;
    text-align: center;
  }
  img{
    width:150px;
    height: 200px;
    object-fit: cover;
  }
  .personal-img p{
    margin-top: 12px;
  }

</style>