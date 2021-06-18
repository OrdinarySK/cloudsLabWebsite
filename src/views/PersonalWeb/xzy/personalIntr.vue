<template>
  <div class="personal-intro-container">
    <div class="personal-intro">
      <p class="intro"><a href="http://grzy.cug.edu.cn/luoxiangang" style="text-decoration: none">{{personalInfo[0].name}}</a>，{{personalInfo[0].resume}}</p>
    </div>
    <div class="personal-infor" v-for="(pItem,index) in personalInfo[1]" :key="index">
      <h3 class="experience">{{pItem.title}}</h3>
      <ul class="experience-item" :class="pItem.class">
        <li v-for="(item,idx) in pItem.item" :key="idx">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "personalIntr",
    props:{
      personalInfo:{
        type:Array,
        required:true
      }
    }
  }
</script>

<style scoped>
  .personal-intro-container{
    width:70%;
    margin-top: 19px;
    margin-left: 10px;
  }
  .experience{
    margin-top: 10px;
    color: rgba(0,0,0,.7);
  }
  .personal-infor{
    margin-top: 20px;
  }
  .experience-item{
    margin-left:30px;
    margin-top: 5px;
  }
  .experience-item li{
    margin-top: 8px;
  }
  .personal-intro p{
    word-break: break-all;
  }
  .personal-infor .paper{
     list-style: decimal;
  }
  .personal-infor .dial{
    list-style: none;
  }
</style>