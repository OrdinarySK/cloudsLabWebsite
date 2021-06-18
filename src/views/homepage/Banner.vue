<template>
<!-- 轮播图组件 -->
  <div class="banner-container" ref="banner" 
  @mouseleave="start"
  @mouseenter="stop">
      <ul class="banner" ref="bannerList" @transitionend="handleTransitionEnd"
        :style="{marginLeft}"
      >
          <li v-for = "(item, index) of imgs" 
          :key="index">
            <img :src="item.src" alt="">
          </li>
      </ul>
      <div class="left" @click="switchTo(now - 1)"><i class="iconfont icon-arrow-left"></i></div>
      <div class="right" @click="switchTo(now + 1)"><i class="iconfont icon-arrow-right"></i></div>
      <ul class="point">
          <li v-for="(img,idx) of imgs" 
          :key="idx" 
          :class="{active:idx===now}"
          @click="switchTo(idx)"></li>
      </ul>
  </div>
</template>

<script>
import banner1 from "@/assets/homepage/banner1.jpg";
import banner2 from "@/assets/homepage/banner2.jpg";
import banner3 from "@/assets/homepage/banner3.jpg";
export default {
    data(){
        return{
            innerWidth: 0,
            now: 0,
            imgs:[
                {
                    src: banner1,
                },
                {
                    src: banner2,
                },
                {
                    src: banner3,
                },
            ],
            switching: false,
            oUl : null
        }
    },
    mounted(){
        this.innerWidth = this.$refs.banner.clientWidth;
    },
    created(){
        window.addEventListener("resize", this.handleResize);
        this.start();
    },
    destroyed() {
        window.removeEventListener("resize", this.handleResize)
    },
    methods: {
        stop(){
            clearInterval(this.timer)
        },
        //start每隔3s调用一次，无限循环的调用setInterval
        start(){
            this.timer=setInterval(()=>{
                this.switchTo(this.now + 1);
            },3000);
        },
        handleResize(){
            this.innerWidth = this.$refs.banner.clientWidth;
        },
        switchTo(target){
            if(target > 2){
                target = 0;
                this.now = target;
            }else if(target < 0){
                target = 2;
                this.now = target;
            }else{
                this.now = target;
            }
        },
        handleTransitionEnd(){
            this.switching = false;
        },
    },
    computed:{
        marginLeft(){
            return -this.now * this.innerWidth + "px";
        },
    }
}
</script>

<style scoped>
@import "//at.alicdn.com/t/font_2461568_r7i5ly8dr5.css";
.banner-container{
    position: relative;
    width: 100%;
    overflow: hidden;
}
.banner{
    width: 300%;
    display: flex;
    flex-wrap: nowrap;
    list-style: none;
}
img{
    width: 100%;
    object-fit: cover;
}
.left, .right{
    width: 30px;
    height: 30px;
    border: 3px solid #fff;
    border-radius: 50%;
    text-align: center;
    line-height: 30px;
    color: #fff;
    font-weight: bolder;
    cursor: pointer;
    position: absolute;
    order: 99;
    top: calc(50% - 15px);
}
.iconfont{
    color: inherit;
    font-size: 25px;
}
.left{
    left: 10px;
}
.right{
    right: 10px;
}
.point{
    position: absolute;
    display: flex;
    flex-wrap: nowrap;
    order: 99;
    width: 50px;
    height: 10px;
    justify-content: space-around;
    bottom: 20px;
    left: calc(50% - 25px);
}
.point li{
    list-style: none;
    width: 10px;
    height: 10px;
    background-color: lightgray;
    border-radius: 50%;
}
.active{
    background: #fff !important;
}
</style>