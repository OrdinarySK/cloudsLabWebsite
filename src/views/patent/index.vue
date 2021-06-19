<template>
  <div class="patent-container">
    <Content 
    :item= "item">
    </Content>

    <div class="article-content">
      <div class="left">
        <Aside :memberClass="mClass" ></Aside>
      </div>
      <div class="right">
        <Article :patentClass="myPatent" >

        </Article>

      </div>
    </div>

  </div>
</template>

<script>
import Content from '@/components/Content';
import Aside from '../articles/Aside2';
import Article from './patent-list';

export default {
  components: {
    Content,
    Aside,
    Article
  },
  data() {
    return {
      item: "专利",
      mClass:['发明专利'],
      myPatent:[
        {
          name:'1. 基于大图切割的矢量数据瓦片裁图加速方法',
          id:'ZL201510328502.1'
        },
        {
          name:'2. 用于高频交互环境的网络地图请求快速响应方法',
          id:'ZL201510445959.0'
        },
        {
          name:'3. 空间计算域计算强度样本库自动采集方法',
          id:'ZL201510600367.1'
        },
        {
          name:'4. 集群环境下面向动态空间计算域的地图数据均衡存储方法',
          id:'ZL201510607192.7'
        },
        {
          name:'5. 空间计算域计算强度表面生成方法',
          id:'ZL201510422158.9'
        },
        {
          name:'6. 一种突发地质灾害应急预案数字化系统',
          id:'ZL201310667635.2'
        },
        {
          name:'7. 基于服务器集群网络的预条件共轭梯度区域网平差方法',
          id:'ZL201610119607.0'
        },
        {
          name:'8. 一种基于稀疏块状矩阵压缩存储结构的预条件共轭梯度区域网平差方法',
          id:'ZL201610119561.2'
        },
        {
          name:'9. WebGIS矢量数据高效传输方法',
          id:'ZL201510328632.5'
        }

      ]

    }
  }
}
</script>

<style>

  .article-content{
    display: flex;
    width: 70%;
    height: 100%;
    margin: 0 15% 30px 15%;
    padding-top: 20px;

  }
  .left{
    /*max-width:40%;*/
    /*min-width: 30%;*/
    width:20%;
    /*margin: 0 5px;*/

    /*justify-content:flex-start;*/
    /*flex: 1 1 auto;*/
  }
  .right{
    /*flex:1 1 auto;*/
    width:80%;
    margin: 10px 0 0 15px;
    /*background: blue;*/
  }
</style>