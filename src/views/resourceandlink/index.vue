<template>
  <div class="resource-container">
    <Content
    :item="item">
    </Content>
    <div class="container">
      <section id="introduction">
        <br>
        <div class="page-header">
          <h3>学术组织与机构</h3> 
        </div>    
      </section>
      <span>国内</span>
      <ul style="margin-left:20px;">
        <li v-for = "(item, index) in nation" :key= index><a target="_blank" :href="item.url">{{item.name}}</a></li>
      </ul>
      <br>
      <span>国外</span>
      <ul style="margin-left:20px;">
        <li v-for = "(item, index) in world" :key= index><a target="_blank" :href="item.url">{{item.name}}</a></li>
      </ul>
      <section id="introduction">
        <br>
        <div class="page-header">
          <h3>学术博客</h3> 
        </div>    
      </section>
      <ul style="margin-left:20px;">
        <li v-for = "(item, index) in blog" :key= index><a target="_blank" :href="item.url">{{item.name}}</a></li>
      </ul>
      <section id="introduction">
        <br>
        <div class="page-header">
          <h3>论文检索</h3> 
        </div>    
      </section>
      <ul style="margin-left:20px;">
        <li v-for = "(item, index) in paper" :key= index><a target="_blank" :href="item.url">{{item.name}}</a></li>
      </ul>
      <section id="introduction">
        <br>
        <div class="page-header">
          <h3>数据下载网站</h3> 
        </div>    
      </section>
      <ul style="margin-left:20px;">
        <li v-for = "(item, index) in data" :key= index><a target="_blank" :href="item.url">{{item.name}}</a></li>
      </ul>
      <section id="introduction">
        <br>
        <div class="page-header">
          <h3>开源网站</h3> 
        </div>    
      </section>
      <ul style="margin-left:20px;">
        <li v-for = "(item, index) in open" :key= index><a target="_blank" :href="item.url">{{item.name}}</a></li>
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
      item: "资料与链接",
      nation: [
        {name: '遥感协会', url: 'http://www.irsa.cas.cn/xhxb/ygxh/'},
        {name: '中国地理学会', url: 'http://www.gsc.org.cn/'},
      ],
      world: [
        {name: 'IEEE-The worlds largest professional association for the advancement of technology', url: 'https://www.ieee.org/'},
        {name: '国际摄影测量与遥感协会（ISPRS - International Society for Photogrammetry and Remote Sensing）', url: 'https://www.isprs.org/'}
        
      ],
      blog: [
        {name: '阮一峰的网络日志', url: 'http://www.ruanyifeng.com/blog/'},
        {name: '廖雪峰官网', url: 'https://www.liaoxuefeng.com/'},
        {name: '南京大学周志华', url: 'https://cs.nju.edu.cn/zhouzh/'},
        {name: 'ES6参考文档', url: 'https://es6.ruanyifeng.com/'}
      ],
      paper: [
        {name: '谷歌学术', url: 'scholar.google.com'},
        {name: '百度学术', url: 'https://xueshu.baidu.com/'},
        {name: '微软学术', url: 'https://redirect.microsoft/'},
        {name: '中国知网', url: 'https://www.cnki.net/'},
        {name: 'Elsevier ScienceDirect', url: 'http://www.sciencedirect.com/'},
        {name: '中国图书参考咨询联盟', url: 'http://www.ucdrs.superlib.net/'},
        {name: '中国地质大学图书馆', url: 'http://www.lib.cug.edu.cn/'}

      ],
      data: [
        {name: '地理空间数据云', url: 'http://www.gscloud.cn/'},
        {name: '中国气象数据网', url: 'http://data.cma.cn/data/'},
        {name: '中科院资源环境科学与数据中心', url: 'https://www.resdc.cn/lds.aspx'},

      ],
      open: [
        {name: 'GeoServer（开源地图服务器）', url: 'http://geoserver.org/'},
        {name: 'GDAL（开源地理处理库）', url: 'https://gdal.org/'},
        {name: 'OpenLayers（开源地图引擎库）', url: 'https://openlayers.org/'},
        {name: 'Leaflet（开源地图引擎库）', url: 'https://leafletjs.com/'},
        {name: 'GeoTools（Java开源的地理处理库）', url: 'https://docs.geotools.org/'},
      ]
    }
  }
}
</script>

<style scoped>
.page-header{
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 9px;
  margin: 20px 0px 30px;
}
.container{
  width: 70%;
  margin: 0px 15%;
}
span{
  font-weight:bold;
}
a{
  color: #0088CC;
}
</style>