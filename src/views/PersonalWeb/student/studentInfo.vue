<template>
  <div class="personal-intro-container">
    <div class="personal-intro">
      <p class="intro"><span v-if="studentInfo[0].name"><span>{{studentInfo[0].name}}</span>,目前所学专业为<span>{{studentInfo[0].major}}</span>,研究方向<span v-if="studentInfo[0].researchFields">为{{studentInfo[0].researchFields}}</span ><span v-else>暂定</span>。</span><span v-else>暂无信息</span></p>
    </div>
    <div class="personal-infor" v-for="(pItem,index) in studentInfo[1]" :key="index">
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
      studentInfo:{
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