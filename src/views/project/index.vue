<!--该视图为项目的主视图文件-->
<template>
  <div class="project-container">
    <!--导航栏组件-->
    <Content
    :item= "item">
    </Content>
    <!--内容部分-->
    <div class="main">
      <!--左侧导航栏-->
      <div class="left">
      <ProAside :memberClass="projectClass"
      @pushInfo="pushInfo"></ProAside>
    </div>
    <!--右侧项目内容栏-->
    <div class="right">
      <ProjectList 
      :lists="lists[game]"></ProjectList>
    </div> 
    </div>
       
  </div>
</template>

<script>
import Content from '@/components/Content'
import ProAside from '@/views/project/ProAside'
import ProjectList from '@/views/project/ProjectList'
export default {
    components: {
      Content,
      ProAside,
      ProjectList,
    },
    data() {
     return {
       item:"项目",
       projectClass: [
         {name: 'dzhj', val: '地质环境'},
         {name: 'zhyj', val: '智慧应急'},
         {name: 'dsj', val: '大数据'},
         {name: 'sl', val: '水利'}
       ],
       game: 'dzhj',
       lists: { 
                dzhj:[
                {id: 'dzhjhns', name: '湖南地质灾害综合防治信息系统', picUrl: require('@/assets/projectImg/湖南地质灾害综合防治信息系统.jpg')},
                {id: 'dzhjgzs',name: '贵州省地质灾害防治指挥平台', picUrl: require('@/assets/projectImg/贵州省地质灾害防治指挥平台.png')},
                {id: 'dzhjhgj',name: '国家地质灾害气象预警互联子系统', picUrl: require('@/assets/projectImg/国家地质灾害气象预警互联子系统.jpg')},
                {id: 'dzhjhbs',name: '湖北省地质环境综合信息平台', picUrl: require('@/assets/projectImg/湖北省地质环境综合信息平台.jpg')},
                {id: 'dzhjsxs',name: '山西省地质灾害监测预警系统', picUrl: require('@/assets/projectImg/山西省地质灾害监测预警系统.jpg')}
                ],
                zhyj:[
                {id: 'zhyjsjdzgl', name: '省级地质灾害应急值班管理系统', picUrl: require('@/assets/projectImg/省级地质灾害应急值班管理系统.jpg')},
                {id: 'zhyjsjdzzh', name: '省级地质灾害应急指挥系统', picUrl: require('@/assets/projectImg/省级地质灾害应急指挥系统.jpg')},         
                ],
                dsj:[
                  {id: 'dsjxadz', name: '雄安新区基础地质数据展示子系统', picUrl: require('@/assets/projectImg/雄安新区基础地质数据展示子系统.jpg')},
                  {id: 'dsjxadsj',name: '雄安新区地质大数据综合展示子系统', picUrl: require('@/assets/projectImg/雄安新区地质大数据综合展示子系统.jpg')}
                ],
                sl:[
                  {id: 'slsw',name: '三维电子沙盘指挥系统', picUrl: require('@/assets/projectImg/三维电子沙盘指挥系统.jpg')},
                  {id: 'slsj',name: '省级数据同步共享系统', picUrl: require('@/assets/projectImg/省级数据同步共享系统.jpg')}
                ]
            }
     }},
     /******获取当前导航栏选择的栏目名称 */
    methods: {
      pushInfo(e){
        console.log(e);
        this.game = e;
      }
    }
}
</script>

<style scoped>
.main{
  display: flex;
  width: 100%;
  height: 100%;
}
.left{
    max-width:40%;
    min-width: 30%;
    margin-left: 0px;
    flex: 0 0 auto;
  }
  .right{
    flex:1 1 auto;
  }
</style>