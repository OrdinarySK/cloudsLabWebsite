<template>
  <div class="homepage-container">
    <div class="container">
      <!-- 主页头部 -->
      <div class="page-header">
          <!-- 校徽 -->
          <div class="badge">
            <img class="school-badge" src="http://www.aydesign.com.cn/uploadfile/image/20190319/20190319150740_20221.jpg" alt="">
          </div>
          <!-- 团队名称 -->
          <div class="team-name">
            <h1>生态环境大数据实验室</h1>
            <h1>Ecological Environment Big Data Lab</h1>
            <br>
            <small>School of Information Engineering, China University of Geosciences, Wuhan, Hubei</small>
          </div>
      </div>
      <div class="content">
        <div class="left-content">
          <!-- 轮播图 -->
          <div class="banner">
            <Banner />
          </div>
          <!-- 团队简介 -->
          <div class="introduction">
            <h2>团队简介</h2>
            <hr>
            <p class="introduce">
              {{introduction.introduce}}
              <button class="detail-introduction" @click="handleClick">{{moreText}}<i ref="iconfont" class="iconfont icon-arrow-left-"></i></button>
            </p>
            <div class="detail" v-if="detailShow">
              <section v-for="(detail, detaiIndex) in introduction.details" :key="detaiIndex">
                <p>{{detail.para}}</p>
                <img class="introduction-img" v-if="detail.img" :src="detail.img" alt="">
              </section>
            </div>
          </div>
        </div>
        <div class="right-content">
          <h2>公告</h2>
          <div class="notices">
            <ul>
              <li v-for="(item, index) in items" :key="index" class="single-notice">
                <span class="time">{{item.time}}</span>
                <router-link :to="`/notice/${item.link}`">
                  {{item.title}}
                </router-link>
                <p class="notice-introduction">{{item.introduction}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "./Banner.vue";
import introduction1 from "@/assets/homepage/introduction1.png";
import introduction2 from "@/assets/homepage/introduction2.png";
import introduction3 from "@/assets/homepage/introduction3.png";
import introduction4 from "@/assets/homepage/introduction4.png";
export default {
  components: {
    Banner
  },
  methods: {
    handleClick(){
      this.detailShow = !this.detailShow;
      if(this.detailShow){
        this.$refs.iconfont.className = "iconfont icon-arrow-down-";
        this.moreText = "收起";
      }else{
        this.$refs.iconfont.className = "iconfont icon-arrow-left-";
        this.moreText = "展开";
      }
    }
  },
  data(){
    return {
      // 主页公告右侧数据
      detailShow: false,
      moreText: "展开",
      items: [
        {
          time: "2021.6.17",
          title: "中国地质大学（武汉）地理与信息工程学院生态坏境大数据团队博士后招聘启事",
          introduction: "这里没有简介，点进去看看吧！",
          link: "first-notice"
        },
        {
          time: "2021.6.17",
          title: "生态环境大数据团队招聘专职科研3名",
          introduction: "这里没有简介，点进去看看吧！",
          link: "second-notice"
        },
      ],
      // 团队简介数据
      introduction: {
        introduce: "中国地质大学（武汉）地理与信息工程学院生态环境大数据团队主要从事自然灾害的专业监测、气象预警、应急管理、应急指挥、防汛抗旱、水资源管理、生态环境大数据分析等科研工作。团队已先后承担全国地质灾害气象预警系统、地质灾害气象预警四级互联子系统（国家、省、市、县四级互联）等防灾减灾相关科研项目100多项，研究项目获得过国土资源科学技术奖、中国地理信息产业优秀工程奖、卫星导航定位科技进步奖等重大奖项。其中，在中央电视台发布的全国地质灾害气象预警预报是由该团队提供技术支撑。",
        details: [
          {
            para: "团队主要研究内容有：",
            img: ""
          },
          {
            para: "1. 构建海量、多源、异构的灾害风险监测信息资源高效组织与安全共享方法，实现海量、多模灾害风险监测信息资源的高效检索大数据中心；",
            img: introduction1
          },
          {
            para: "2. 融合卫星定位、多模遥感、气象监测网、大数据、人工智能等最新技术，对自然灾害孕灾过程与未来形势进行实时预测，通过专业模型分析量化人工干预可能对自然灾害孕灾及致灾过程的影响；",
            img: introduction2
          },
          {
            para: "3. 针对自然灾害风险分析中多个因素间的耦合与协同关系，研究灾害系统风险辨识方法，解析灾害风险系统中孕灾环境、致灾因子和承灾体之间的耦合作用机制，实现多情景模式下灾害风险分析的信息融合和数学建模，为风险分析、安全管理和防灾减灾紧急预案提供科学决策支持。",
            img: introduction3
          },
          {
            para: "4. 通过并行算法任务调度研究、并行计算泛型编程框架研究等，提出并构建面向自然风险实时动态监测、预测预警、应急管理、决策支持的大规模多模信息资源高性能处理及服务模式，为自然灾害的防灾减灾和智慧应急提供快速、精准、一体化的解决方案。",
            img: introduction4
          },
        ]
      }
    }
  }
}
</script>

<style scoped lang="less">
@import "//at.alicdn.com/t/font_2461568_tpuidkilz8.css";
.container{
  margin: 0 15%;
  padding-bottom: 30px;
}
.homepage-container{
  padding-top: 15px;
}
.badge{
  overflow: hidden;
  margin: 0 30px;
}
.introduce{
  line-height: 1.9em;
  font-size: 18px;
  font-weight: bold;
}
.detail-introduction{
  margin-top: 5px;
  margin-right: -5px;
  background: transparent;
  outline: 0px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  float: right;
  cursor: pointer;
  color: #0088cc;
}
.iconfont{
    font-size: 16px;
    margin: 0 5px;
  }
.school-badge{
  transform: scale(1.2);
  height: 150px;
  object-fit: cover;
}
h1{
  white-space: pre-line;
}
.team-name{
  padding: 10px 0;
  order: 99;
}
small{
  font-size: 16px;
  color: gray;
}
.page-header{
  border-bottom: 1px solid lightslategray;
  margin: 20px 0 30px 0;
  display: flex;
  flex-wrap: nowrap;
}
.content{
  display: flex;
}
.left-content{
  width: 70%;
  box-sizing: border-box;
}
ul{
  list-style: none;
}
.right-content{
  box-sizing: border-box;
  width: 30%;
  padding: 0 0 0 30px;
}
.banner{
  margin: 0 0 20px 0;
}
hr{
  margin: 20px 0;
}
p{
  line-height: 1.5em;
  white-space: pre-line;
  margin: 10px 0;
  text-indent: 2em;
}
.introduction-img{
  width: 80%;
  margin: 0 auto;
  display: block;
  object-fit: cover;
}
.right-content{
  margin: 5px 0 0 20px;
}
.single-notice{
  margin-bottom: 20px;
}
.notices{
  font-size: 15px;
  .time{
    display: inline-block;
    background: cornflowerblue;
    color: #fff;
    padding: 3px 5px;
    border-radius: 5px;
    font-weight: bold;
  }
  .notice-introduction{
    text-indent: 0;
    margin: 0 0 10px 0;
  }
  padding: 20px 0 0 0;
  width: 100%;
  height: 600px;
  overflow: auto;
  a{
    color: #0088cc;
    font-weight: bold;
    line-height: 2em;
  }
  ul{
    list-style: none;
  };
}
</style>