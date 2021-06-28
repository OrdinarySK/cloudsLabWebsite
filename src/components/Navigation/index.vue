<template>
  <div class="navigation-container">
    <nav class="nav">
        <RouterLink
            v-for="item in items"
            :key="item.link"
            :to="{name: item.name}">
            <span class="title">
                {{ item.title }}
            </span>
        </RouterLink>
    </nav>
  </div>
</template>

<script>
export default {
    data(){
    return {
      items: [
        {
          name: 'Home',
          title: "主页",
        },
        {
          name: 'Notice',
          title: "公告",
        },
        {
          name: 'Member',
          title: "成员",
        },
        {
          name: 'Articles',
          title: "论文",
        },
        {
          name: 'Patent',
          title: "专利",
        },
        {
          name: 'Project',
          title: "项目",
        },
        {
          name: 'Activity',
          title: "活动",
        },
        {
          name: 'JoinUs',
          title: "加入我们",
        },
        {
          name: 'Git',
          title: "获奖信息",//先前为Gitee，后修改为获奖信息
        },
        {
          name: 'Resource',
          title: "资料与链接",
        }
      ]
    }
  },
  components:{
      
  },
}
</script>

<style scoped lang="less">
.navigation-container{
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%);
 background-blend-mode: multiply;
}
.nav{
    width: 70%;
    height: 100%;
    margin: 0 15%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
}
a{
    font-size: 15px;
    font-weight: bold;
    padding: 0 25px;
    display: flex;
    align-items: center;
    color: lighten(lightgray, 5%);
}
span{
  white-space: nowrap;
}
a:hover{
    color: #fff;
    transform: scale(1.3);
}
</style>