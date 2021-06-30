<template>
  <div  class="footer">
      <div class="context">
          <p>
              <router-link to="/">主页</router-link>
              |
              <router-link to="/notice">公告</router-link>
              |
              <router-link to="/member">成员</router-link>
              |
              <router-link to="/articles">论文</router-link>
              |
              <router-link to="/patent">专利</router-link>
              |
              <router-link to="/project">项目</router-link>
              |
              <router-link to="/activity">活动</router-link>
              |
              <router-link to="/git">获奖信息</router-link>
              |
              <router-link to="/resource">资料与链接</router-link>
              |
              <router-link to="/joinus">加入我们</router-link>
              <br>
              地址：中国湖北武汉市东湖高新区锦程街68号中国地质大学(武汉)地理与信息工程学院 &nbsp; 邮编：430078
              <br>
              版权所有 @ 2021-2022 中国地质大学(武汉) 地理与信息工程学院 生态环境大数据实验室
          </p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Footer',
    data (){
        return {

        }
    }
}
</script>

<style scoped>

.footer{
    height: 70px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 14px;
}
.context{
    width: 100%;
    margin: 0 auto;
    text-align: center;
}
a {
    text-decoration: none;
    color:#0088CC;
}
</style>