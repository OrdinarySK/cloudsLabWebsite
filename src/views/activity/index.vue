<template>
  <div class="activity-container">
    <Content 
    :item= "item">
    </Content>
    <section class="activity-content">
      <ul class="activity-list">
        <li v-for="(activity, index) in activities" :key="index">
          <div class="content">
            <h3><router-link :to="{
                name: 'activityDetail',
                params: {
                  id: activity.id
                }
              }">{{activity.title}}</router-link></h3>
            <p class="date">时间：{{activity.time}}</p>
            <p><router-link :to="{
              name: 'activityDetail',
              params: {
                id: activity.id
              }
            }" :style="{
                'font-weight': 'bold',
              }">查看更多</router-link></p>
          </div>
          <div class="outpage">
            <router-link :to="{
              name: 'activityDetail',
              params: {
                id: activity.id
              }
            }">
              <img :src="activity.img" alt="">
            </router-link>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import Content from '@/components/Content';
import EImg from "@/assets/activity/ewangcheng/ewangcheng1.jpg";
import QImg from "@/assets/activity/qiandaohu/qiandaohu1.jpg";
export default {
  components: {
    Content,
  },
  data () {
    return {
      item : "活动",
      activities: [
        {
          id: "ewc417",
          title: "鄂王城之行",
          time: "2021年4月17日",
          img: EImg
        },
        {
          id: "qdh418",
          title: "千岛湖之旅",
          time: "2021年4月18日",
          img: QImg
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
.activity-content{
  width: 70%;
  margin: 0 15% 30px 15%;
  padding-top: 20px;
}
a{
  color: #0088cc;
  text-decoration: none;
  cursor: pointer;
}
.activity-list{
  list-style: none;
  width: 100%;
  li{
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid lighten(gray, 10%);
    margin-bottom: 20px;
    .content{
      width: 600px;
      height: 180px;
      p{
        line-height: 30px;
      }
      h3{
        line-height: 60px;
      }
    }
    .outpage{
      width: 200px;
      height: 150px;
      float: right;
      a{
        display: block;
        width: 250px;
        height: 150px;
      }
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>