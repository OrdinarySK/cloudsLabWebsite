<template>
  <div class="Gitee-container">
    <Content 
    :item= "item">
    </Content>
      <div class="container">
        <section class="content" v-for="(data, index) in datas" :key="index">
          <h3>{{data.title}}</h3>
          <ul class="information">
            <li v-for="(content, index) in data.contents" :key="index" class="inf_list">
              <p>{{content}}</p>
            </li>
          </ul>
        </section>
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
      item: "获奖信息",
      datas: [
        {
          title: "导师奖项",
          contents: [
            "罗显刚，2020年度武汉市突出贡献中青年专家，2020年",
            "罗显刚，《高精度北斗洪灾实时动态预测预警关键技术研究》卫星导航定位科学技术奖二等奖，2019年",
            "罗显刚，《汶川地震区重大地质灾害成生规律研究》国土资源科学技术奖二等奖，2018年",
            "罗显刚，《大型遥感一体化服务平台研发与应用》测绘科技进步奖二等奖，2013年",
            "罗显刚，《突破与提升.2012高校GIS论坛》全国GIS高校新锐奖，2012年",
            "罗显刚，《城市空间信息基础设施共享关键技术研究与示范》华夏建设科学技术一等奖，2012年",
            "罗显刚，《对等式结点管理器及对等式结点管理器管理方法》中国专利优秀奖，2012年",
            "罗显刚，《基于大型GIS的地质调查空间数据管理系统》科技进步奖二等奖，2010年",
            "罗显刚，湖北省测绘科技进步奖，湖北省测绘学会，2008年",
            "罗显刚，第一届“全国GIS高校新秀奖”，全国高校GIS论坛，2008年",
            // "罗显刚，《湖北省地质灾害气象预警预报网上发布系统》，湖北省科技进步三等奖，2006年"
          ]
        },
        {
          title: "学生奖项",
          contents: [
            "赵文杰、涂静敏等，全国地质灾害气象警云平台，“互联网+”大赛，一等奖，中国地质大学（武汉）（指导老师：罗显刚），2016年",
            "赵文杰、涂静敏等，全国地质灾害气象警云平台，“互联网+”大赛，铜奖，湖北省教育厅（指导老师：罗显刚、徐战亚、武彦斌），2016年",
            "林霏开，荣获2020年国家奖学金，中国地质大学（武汉）（指导老师：罗显刚、徐战亚、朱双）",
            "郭宇昕、肖尹黎、孔若楠、周密、万杰，“腾讯云杯”2020武汉开放数据应用创新大赛，三等奖，武汉市政服务和大数据管理局（指导老师：罗显刚、徐战亚、朱双）,2020年"
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.container{
  width: 70%;
  margin: 20px 15%;
  line-height: 1.8em;
}
.information{
  margin-left: 40px;
}
</style>