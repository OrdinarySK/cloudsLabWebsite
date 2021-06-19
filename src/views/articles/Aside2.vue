<template>
  <div class="member-class-container">
    <ul class="member-class">
      <li v-for="item in memberClass" @click="getYear" :class="item">
        <a href="javascript:;"  @click="getYear" :class="item">{{item}}</a>
        <i class="iconfont icon-you-jiantou"></i>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Aside2",
    props: {
      memberClass: {
        type: Array,
        required: true
      }
    },
    methods: {
      getYear(){
        this.$emit('inc', event.target.className)

      }
    }

  }


</script>
<style scoped>
  @import "//at.alicdn.com/t/font_2468549_qpl9gs7il7d.css";
   .member-class-container{
     width: 100%;
     position: relative;
   }
   .member-class{
     width: 100%;
     padding-left: 0;
     /*margin-left:40%;*/
     margin-top: 30px;
   }
  li{
    list-style: none;
    display: block;
    width: 100%;
    height: 40px;
    font-size: 17px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    text-align: center;
    border-collapse: collapse;
    margin-top: -1px;
    margin-right: 5px;
    color: #333333;
  }
  li:first-child{
    border-top-left-radius: 7px;
    border-top-right-radius:7px;
  }
  li:last-child{
    border-bottom-left-radius: 7px;
    border-bottom-right-radius:7px;
  }
  li:hover{
    background-color: rgba(0,0,0,0.1);
  }
  li a{
    text-decoration: none;
    line-height: 40px;
    color: #0088cc;
  }
   i{
     color: gray;
     float: right;
     margin-top: 13px;
   }


</style>