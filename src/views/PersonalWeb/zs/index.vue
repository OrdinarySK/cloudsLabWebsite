<template>
  <div>
  <Content :item="personalData.name"></Content>
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
  import Aside from "../xzy/aside";
  import PersonalIntr from "../xzy/personalIntr";
  import Content from '@/components/Content';
  export default {
    name: "PersonalWeb",
    data:()=>{
      return {
        personalData:{name:"朱双",imgSrc:require("@/assets/menberImg/daoshi/朱双.jpg")},
        personalInfor:[{name:"朱双",detailUrl:"http://grzy.cug.edu.cn/zhushuang",resume:"博士，讲师，硕士生导师。2012年获华中科技大学学士学位，同年本校硕博连读，2017年获华中科技大学博士学位。2017年7月起就职于中国地质大学（武汉）地理与信息工程学院。主要开展基于水文遥感，深度学习、大数据技术的生态环境监测与预警研究。现主持中国自然科学基金青年基金、中央高校基金等项目，作为技术骨干参与多项国家级项目。"},
                       [{title:"科研项目",class:"program",item:["主持国家青年科学基金项目，变化环境下极端干旱组合遭遇风险与脆弱性评估（51809242），2019.1-2021.12，负责人",
                                                                "主持地调项目，地下水资源信息服务与城市地质服务专题模块升级，2019.1-2019.12，负责人",
                                                                "主持中国地质大学（武汉）中央高校基本科研业务费专项资助，基于隐马尔科夫过程的多站日径流随机模拟，2018.1-2020.12，负责人"]
                       },
                        {title:"部分发表论文",class:"paper",item:[
                                  "Zhu S, Xu Z, Luo X, et al. Quantifying the contributions of climate change and human activities to drought extremes, using an improved evaluation framework[J]. Water Resources Management, 2019: 1-15.(SCIE)",
                                  "Zhu S, Chen S, Luo x, et al. Improved hidden Markov model incorporated with copula for probabilistic seasonal drought forecasting[J]. Journal of Hydrologic Engineering.(SCIE DOI 10.1061/(ASCE)HE.1943-5584.0001901)",
                                  "Zhu S, Xu Z, Luo X, et al. Assessing coincidence probability for extreme precipitation events in the Jinsha River basin[J]. Theoretical and Applied Climatology, 2019: 1-11.(SCIE)",
                                  "Zhu S, Luo X, Xu Z, et al. Seasonal streamflow forecasts using mixture-kernel GPR and advanced methods of input variable selection[J]. Hydrology Research, 2019, 50(1): 200-214.(SCIE)",
                                  "Zhu S, Yuan X, Luo X, et al. Gaussian mixture model coupled recurrent neural networks for wind speed interval forecast[J]. Energy Conversion and Management, 2019, 198: 111772.(SCIE)",
                                  "Zhu S, Yuan X, Luo X, et al. An Improved Long Short-Term Memory Network for Streamflow Forecasting in the Upper Yangtze River [J]. Stochastic Environmental Research and Risk Assessment.(SCIE  Accept)",
                                  "Wang J, Zhu S, Luo X, et al. Refined micro-scale geological disaster susceptibility evaluation based on UAV tilt photography data and weighted certainty factor method in Qingchuan County [J]. Ecotoxicology and Environmental Safety, 2019: 110005. (SCIE)",
                                  "Luo X, Lin F, Zhu S, et al. Mine landslide susceptibility assessment using IVM, ANN and SVM models considering the contribution of affecting factors[J]. PloS one, 2019, 14(4).(SCIE 通讯作者)",
                                  "Luo X, Yuan X, Zhu S, et al. A hybrid support vector regression framework for streamflow forecast[J]. Journal of Hydrology, 2019, 568: 184-193.(SCIE)",
                                  "Zhu S, Zhou J, Ye L, et al. Streamflow estimation by support vector machine coupled with different methods of time series decomposition in the upper reaches of Yangtze River, China[J]. Environmental Earth Sciences, 2016, 75(6): 531.(SCIE)"
                          ]},
                         {title:"联系方式",class:"dial",item:[
                             "电话号码：18171370219","邮箱: zhushuang@cug.edu.cn"
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