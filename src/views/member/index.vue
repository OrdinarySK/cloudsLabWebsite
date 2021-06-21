<template>
  <div>
    <Content item="成员"></Content>
  <div class="member-container">
    <div class="left">
      <Aside :memberClass="mClass" @handleClick="changePosition"></Aside>
    </div>
    <div class="right">
      <MemberInfor ></MemberInfor>
    </div>
  </div>
  </div>
</template>

<script>
  import Content from '@/components/Content';
  import Aside from "./Aside";
  import MemberInfor from "./MemberInfor";
  export default {
    name: "Member",
    methods:{
      changePosition(p){
        this.position=p;
        let dom=document.getElementById(this.position);
        let top=dom.offsetTop;
        window.scrollTo(0,top)
      }
    },
    data:()=>{
      return {
        position:"teacher",
        mClass:[{category:"导师",id:"teacher"},{category:"博士",id :"doctor"},{category:"18级研究生",id:"s2018"},{category:"19级研究生",id:"s2019"},{category:"20级研究生",id:"s2020"},{category:"21级研究生",id:"s2021"}]
      }
    },
    components:{
      Aside,
      MemberInfor,
      Content
    },
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