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
        personalData:{name:"罗显刚",imgSrc:require("@/assets/menberImg/daoshi/罗显刚.jpg")},
        personalInfor:[{name:"罗显刚",detailUrl:"http://grzy.cug.edu.cn/luoxiangang",resume:"男，民盟，地图制图学与地理信息工程专业博士，中国地质大学（武汉）博士生导师，长江大学客座教授，华中科技大学智慧水利研究中心常务副主任，国家GIS技术工程中心生态环境大数据研究团队负责人，国家公共安全科学技术预测预警委员会委员，云上贵州“防灾减灾创新中心”智库专家，武汉市有突出贡献的中青年专家，东湖新技术开发区“3551光谷人才”。主要研究方向为生态环境大数据、地质灾害动态预警与人工智能、智慧水利、智慧城市与云计算等。主持、参加科研课题40余项，其中包括多项863项目、国家重大专项、重点基金等项目。在国内外专业期刊和会议上发表四十余篇论文，主编或参与编写专著、教材近10本。\n"},
                       [{title:"科研项目",class:"program",item:["中国地质环境监测院项目每年的“全国地质灾 害气象预警预报软件系统”开发与升级维护",
                                                         "国土资源部油气中心项目“油气资源“一张 图”数据管理平台建设”",
                                                         "中国地质环境监测院项目“汶川地震区重大 地质灾害系统建设”",
                                                         "水文地质环境地质实验室研究项目“地下水 信息共享服务关键技术研究”",
                                                         "国土资源部公益性行业专项项目“突发地质灾害应急响应支撑关键技术研究”",
                                                         "地调局实验室开放式基金项目“三维地质网 络地球关键技术研究”",
                                                         "国家 863 高技术项目“面向网络 的三维空间信息服务技术研究与软件开发”",
                                                         "海南省“三防”电子沙盘指挥系统",
                                                         "湖南省地质灾害综合防治信息系统",
                                                         "湖北省三峡库区地质灾害监测预警平台",
                                                         "湖北省省级数据同步共享服务平台",
                                                         "湖北省地质环境综合信息平台"]
                       },
                        {title:"部分发表论文",class:"paper",item:[
                                            "Zhu S, Xu Z, Luo X, et al. Internal and external coupling of Gaussian mixture model and deep recurrent network for probabilistic drought forecasting[J]. International Journal of Environmental Science and Technology, 2021（SCI）",
                                            "Zhu S, Luo X, Yuan X, et al. An improved long short-term memory network for streamflow forecasting in the upper Yangtze River[J]. Stochastic Environmental Research and Risk Assessment, 2020（SCI）",
                                            "Zhu S, Luo X, Chen S, et al. Improved hidden Markov model incorporated with copula for probabilistic seasonal drought forecasting[J]. Journal of Hydrologic Engineering, 2020（SCI）",
                                            "Zhu S, Xiao Z, Luo X, et al. Multidimensional Response Evaluation of Remote-Sensing Vegetation Change to Drought Stress in the Three-River Headwaters, China[J]. IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing, 2020（SCI）",
                                            "Luo X, Wang J, Chen G, et al. Research on distribution of suspended sediment concentration in long time series based on mid-resolution imaging spectrometer data and quantile trend analysis[J]. Regional Studies in Marine Science, 2020（SCI）",
                                            "Xu Z, Luo X, Zhu S, et al. A CPS-Improved Data Estimation Model for Flash Flood Early Warning Sensor Network[M]//Big Data Analytics for Cyber-Physical Systems. Springer, Cham, 2020（SCI）",
                                            "Luo X, Li J, Zhu S, et al. Estimating the Impacts of Urbanization in the Next 100 years on Spatial Hydrological Response[J]. Water Resources Management, 2020（SCI）",
                                            "Xiangang Luo, Feikai Lin, Yihong chen, Shuang Zhu, Zhanya Xu*, coupling logistic model tree and random subspace to predict the landslide susceptibility areas with considering the uncertainty of environmental features, Scientific Reports, 2019(SCI)",
                                            "Shuang Zhu , Xiaohui Yuan, Zhanya Xu, Xiangang Luo⁎ , Hairong Zhang,Gaussian mixture model coupled recurrent neural networks for wind speed interval forecast,Energy Conversion and Management, 2019（SCI）",
                                            "Jingjing Wang, Shuang Zhu, Xiangang Luo∗, Gang Chen , Zhanya Xu , Refined micro-scale geological disaster susceptibility evaluation based on UAV tilt photography data and weighted certainty factor method in Mountainous County,Ecotoxicology and Environmental Safety, 2020（SCI）",
                                            "Shuang Zhu, Zhanya Xu, Xiangang Luo*, Chao Wang, Jiang Wu. Assessing coincidence probability for extreme precipitation events in the Jinsha River basin,Theoretical and Applied Climatology, 2019（SCI）",
                                            "Xiangang Luo, Feikai Lin, Shuang Zhu*, Mengliang Yu, Mine landslide susceptibility assessment using IVM, ANN and SVM models considering the contribution of affecting factors, PLOS ONE, 2019（SCI）",
                                            "Shuang Zhu,Zhanya Xu, Xiangang Luo*, Chao Wang, Quantifying the Contributions of Climate Change and Human Activities to Drought Extremes, Using an Improved Evaluation Framework,Water Resources Management,2019（SCI）",
                                            "Shuang Zhu, Xiangang Luo*, Zhanya Xu, Lei Ye, Seasonal streamflow forecasts using mixture-kernel GPR and advanced methods of input variable selection, Hydrology Research,2019(SCI)" ,
                                            "Xian Gang Luo, Jingjing Wang, Zhanya Xu*, Shuang Zhu, Lingsheng Meng, Jiakui Liu, Yi Cui,Dynamic analysis of urban ground subsidence in Beijing based on the permanent scattering InSAR technology,Journal of Applied Remote Sensing,2018（SCI）",
                                            "Xiangang Luo, XiaohuiYuan⁎, ShuangZhu, ZhanyaXua, LingshengMeng, JingPeng,A hybrid support vector regression framework for streamflow forecast,Journal of Hydrology,2018（SCI）",
                                            // "Lu Huang, Xiangang Luo*, ZhongXie, Luyang Xiang, Jingmin Tu. Digital Management Mechanism of Sudden Geological Disaster Emergency Plan, Telecommunication Computing Electronics and Control, 2016",
                                            // "Xiangang Luo*, Jingmin Tu, Lu Huang, Optimization of Express Delivery Routing Problem, Telecommunication Computing Electronics and Control, 2016"
                                                ]},
                         {title:"联系方式",class:"dial",item:[
                             "电话号码：13995523517","邮箱: billlxg@126.com"
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