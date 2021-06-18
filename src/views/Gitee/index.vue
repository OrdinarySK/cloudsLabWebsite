<template>
  <div class="Gitee-container">
    <Content 
    :item= "item">
    </Content>
      <div class="container">
        <section id="introduction">
          <br>
          <div class="page-header">
            <h3>实验室代码仓库</h3> 
          </div>    
        </section>
        <ul style="margin-left:20px;">
          <li v-for = "(item, index) in data" :key= index><a :href="item.url" target="_blank">{{item.name}}</a></li>
        </ul>
        <section id="introduction">
          <br>
          <div class="page-header">
            <h3>实验室成员代码仓库</h3> 
          </div>    
        </section>
        <ul style="margin-left:20px;">
          <li v-for = "(item, index) in peoples" :key= index><a :href="item.url" target="_blank">{{item.name}}</a></li>
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
  data() {
    return {
      item: "Gitee/GiteHub",
      data: [
        {name: '实验室Gitte仓库', url: 'https://gitee.com/cugyspace'},
        {name: '实验室GitHub仓库', url: '#'}
        
      ],
      peoples: [
        {name: '罗凯GitHub', url: 'https://github.com/OrdinarySK'}
      ]
    }
  }
}
</script>

<style scoped>
a{
  font-weight: bold;
  color:cornflowerblue;
}
.page-header{
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 9px;
  margin: 20px 0px 30px;
}
.container{
  width: 70%;
  margin: 0px 15%;
}
</style>