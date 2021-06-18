<template>
  <div class="notice-container">
    <Content
      item="公告">
    </Content>
    <div class="notice-content">
      <ul class="notice-list">
        <li v-for="(item, index) of items" :key="index" class="title-content">
            <h3><router-link :to="`/notice/${item.link}`">{{item.title}}</router-link></h3>
            <p>{{item.introduction}}<router-link :to="`/notice/${item.link}`">显示详情</router-link></p>
            <hr>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Content from '@/components/Content'
export default {
  components: {
    Content,
  },
  data(){
    return{
      items: [
        {
          title: "中国地质大学（武汉）地理与信息工程学院生态坏境大数据团队博士后招聘启事",
          introduction: "这里没有简介，点进去看看吧！",
          link: "first-notice"
        },
        {
          title: "生态环境大数据团队招聘专职科研3名",
          introduction: "这里没有简介，点进去看看吧！",
          link: "second-notice"
        },
      ],
    }
  }
}
</script>

<style scoped lang="less">
.notice-content{
  width: 70%;
  margin: 0 15% 30px 15%;
  padding-top: 20px;
}
.notice-list{
  width: 100%;
  list-style: none;
}
.title-content{
  width: 100%;
  padding: 20px 0 40px 0;
  p a{
    display: inline-block;
    float: right;
  }
  hr{
    margin-top: 60px;
  }
}
h3{
  margin-bottom: 20px;
}
a{
    color: #0088cc;
    cursor: pointer;
    font-weight: bold;
}
a:hover{
  color: darken(#0088cc, 15%);
}
</style>