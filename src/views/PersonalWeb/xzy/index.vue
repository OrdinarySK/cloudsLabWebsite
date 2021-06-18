<template>
  <div>
  <Content item="徐战亚"></Content>
  <div class="member-container">
    <div class="left">
      <Aside :personal-data="personalData"></Aside>
    </div>
    <div class="right">
        <PersonalIntr :personal-info="personalInfor"></PersonalIntr>
    </div>
  </div>
  </div>
</template>

<script>
  import Aside from "./aside";
  import PersonalIntr from "./personalIntr";
  import Content from '@/components/Content';
  export default {
    name: "PersonalWeb",
    data:()=>{
      return {
        personalData:{name:"徐战亚",imgSrc:require("@/assets/menberImg/daoshi/徐战亚.jpg")},
        personalInfor:[{name:"徐战亚",resume:"博士，副教授，硕士生导师，2017-2018年美国乔治梅森大学CSISS（空间信息科学与系统中心）访问学者。2010年7月毕业于中国地质大学（武汉）地图制图学与地理信息工程专业，获得工学博士学位，现为中国地质大学（武汉）地理与信息工程学院副教授。 主要研究方向包括导航与位置服务、遥感大数据与深度学习，具体研究内容为灾害智能感知与风险诊断，应急路网动态构建与导航，基于深度学习的遥感场景识别与目标提取。发表论文30余篇，包括SCI论文10余篇，现为CCF会员。"},
                       [{title:"科研项目",class:"program",item:[
                           "2019年，“城市基础设施极端天气气候事件影响分析“ 省部级课题  主持",
                          "2018年，“基于众源地理数据的城市道路变化提取与更新方法研究” 国家自然科学基金 参与",
                          "2016年，“油气资源综合分析与辅助决策平台建设“   省部级课题  主持",
                          "2016年，“对地观测传感网结点环境下地学工作流的构建方法研究” 国家自然科学基金 参与",
                          "2015年，“移动GIS高效可视化引擎研究与开发“   横向课题    主持",
                          "2015年，“智慧城市运行模拟预测与管理决策支持关键技术研究与示范“ 国家科技支撑 参与",
                          "2014年，“地下水资源数据共享服务关键技术研究“   省部级课题  主持",
                          "2013年，“支持多平台的态势核心引擎“   横向课题    主持",
                          "2012年，“导航电子地图基础服务平台”   省部级课题  参与"]
                       },
                        {title:"部分发表论文",class:"paper",item:[
                            "Xu, Z., Cao, L., Zhong, S., Liu, G., Yang, Y., Zhu, S., ... & Di, L. (2020). Trends in Global Vegetative Drought From Long-Term Satellite Remote Sensing Data.  IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing, 13, 815-826.",
                            "Xu, Z., Luo, X., Zhu, S., Wu, D., & Guo, Q. (2020). A CPS-Improved Data Estimation Model for Flash Flood Early Warning Sensor Network.  In Big Data Analytics for Cyber-Physical Systems (pp. 247-259). Springer, Cham.",
                            "Zhu, S., Xu, Z., Luo, X., Wang, C., & Wu, J. (2020). Assessing coincidence probability for extreme precipitation events in the Jinsha River basin. Theoretical and Applied Climatology, 139(1-2), 825-835.",
                            "Xu Z, Meng S, Zhong S, et al. Study on Temporal and Spatial Adaptability of Crop Classification Models[C]//2019 8th International Conference on Agro-Geoinformatics (Agro-Geoinformatics). IEEE, 2019: 1-7.",
                            "Luo, X., Lin, F., Chen, Y., Zhu, S., Xu, Z., Huo, Z., ... & Peng, J. (2019). Coupling logistic model tree and random subspace to predict the landslide susceptibility areas with considering the uncertainty of environmental features. Scientific reports, 9(1), 1-13.",
                            "Zhu, S., Xu, Z., Luo, X., Wang, C., & Zhang, H. (2019). Quantifying the Contributions of Climate Change and Human Activities to Drought Extremes, Using an Improved Evaluation Framework. Water Resources Management, 33(15), 5051-5065.",
                            "Zhu, S., Yuan, X., Xu, Z., Luo, X., & Zhang, H. (2019). Gaussian mixture model coupled recurrent neural networks for wind speed interval forecast. Energy Conversion and Management, 198, 111772.",
                            "Zhu, S., Luo, X., Xu, Z., & Ye, L. (2019). Seasonal streamflow forecasts using mixture-kernel GPR and advanced methods of input variable selection.  Hydrology Research, 50(1), 200-214.",
                            "Zhong, S., Di, L., Sun, Z., Xu, Z., & Guo, L. (2019). Investigating the long-term spatial and temporal characteristics of vegetative drought in the contiguous United States. IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing, 12(3), 836-848."
                          ]},
                         {title:"联系方式",class:"dial",item:[
                             "电话号码：15871681358","邮箱: xuzhanya@cug.edu.cn"
                           ]}
                       ]
                        ]
      }
    },
    components:{
      Aside,
      PersonalIntr,
      Content
    }
  }
</script>

<style scoped>
  .member-container{
    display: flex;
    width: 100%;
    height: 100%;
  }
  .left{
    max-width:40%;
    min-width: 30%;
    flex: 0 0 auto;
  }
  .right{
    flex:1 1 auto;
  }
</style>