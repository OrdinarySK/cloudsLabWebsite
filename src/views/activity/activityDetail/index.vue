<template>
  <div class="activityDetail-container">
      <Content 
        :item= "item">
    </Content>
      <div class="activity-content">
          <h1 class="title">{{items[id].title}}</h1>
      <h3 class="description">————{{items[id].description}}</h3>
      <div class="content">
          <section class="imgContent" v-for="(singleImg, index) in items[id].imgs" :key="index">
              <img :src="singleImg" alt="">
          </section>
      </div>
      </div>
  </div>
</template>

<script>
import E1 from "@/assets/activity/ewangcheng/ewangcheng1.jpg";
import E2 from "@/assets/activity/ewangcheng/ewangcheng2.jpg";
import E3 from "@/assets/activity/ewangcheng/ewangcheng3.jpg";
import E4 from "@/assets/activity/ewangcheng/ewangcheng4.jpg";
import Q1 from "@/assets/activity/qiandaohu/qiandaohu1.jpg";
import Q2 from "@/assets/activity/qiandaohu/qiandaohu2.jpg";
import Q3 from "@/assets/activity/qiandaohu/qiandaohu3.jpg";
import Q4 from "@/assets/activity/qiandaohu/qiandaohu4.jpg";
import Q5 from "@/assets/activity/qiandaohu/qiandaohu5.jpg";
import Q6 from "@/assets/activity/qiandaohu/qiandaohu6.jpg";
import Q7 from "@/assets/activity/qiandaohu/qiandaohu7.jpg";
import Q8 from "@/assets/activity/qiandaohu/qiandaohu8.jpg";

// 顶部组件
import Content from '@/components/Content';


export default {
    components: {
        Content
    },
data(){
    return {
        item: "活动",
        id: "",
        items: {
            ewc417: {
                title: "鄂王城之行",
                description: "于4月17日团队前往湖北省大冶市鄂王城遗址进行团建活动",
                imgs: [
                    E1, E2, E3, E4
                ]
            },
            qdh418: {
                title: "千岛湖之旅",
                description: "于4月18日团队前往湖北省黄石市千岛湖景点自由活动",
                imgs: [
                    Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8
                ]
            }
        }
    }
},
created(){
    this.id = this.$route.params.id;
}
}
</script>

<style scoped lang="less">
.content{
    section{
        width: 800px;
        height: 500px;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
.activity-content{
    width: 70%;
    margin: 0 15%;
    .title{
        width: 100%;
        line-height: 80px;
        text-align: center;
    }
    .description{
        width: 100%;
        line-height: 40px;
        text-align: right;
    }
    .content{
        width: 100%;
        .imgContent{
            width: 65%;
            margin: 20px auto;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}
</style>