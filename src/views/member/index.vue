<template>
  <div class="member-container">
    <div class="left">
      <Aside :memberClass="mClass"></Aside>
    </div>
    <div class="right">
      <MemberInfor></MemberInfor>
    </div>
  </div>
</template>

<script>
  import Aside from "./Aside";
  import MemberInfor from "./MemberInfor";
  export default {
    name: "Member",
    data:()=>{
      return {
        mClass:["教授","博士后","博士生","硕士研究生","本科生","已毕业学生"]
      }
    },
    components:{
      Aside,
      MemberInfor
    }
  }
</script>

<style scoped>
 .member-container{
   display: flex;
   width: 100%;
   height: 100%;
 }
  .left{
    max-width:40%;
    min-width: 30%;
    flex: 0 0 auto;
  }
  .right{
    flex:1 1 auto;
  }
</style>