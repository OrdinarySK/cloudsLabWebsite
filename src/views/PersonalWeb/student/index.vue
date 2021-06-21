<template>
  <div>
  <Content :item="studentData[name].personalData.name"></Content>
  <div class="member-container">
    <div class="left">
        <Aside :personal-data="studentData[name].personalData"></Aside>
    </div>
    <div class="right">
        <student-info :student-info="studentData[name].data"></student-info>
    </div>
  </div>
  </div>
</template>

<script>
  import Aside from "../xzy//aside";
  import Content from '@/components/Content';
  import StudentInfo from "./studentInfo"
  export default{
    name: "PersonalWeb",
    data:()=>{
      return {
        name:"",
        studentData:{
          "zwj":{ personalData:{name:"赵文杰",imgSrc:require("@/assets/menberImg/yanjiusheng/赵文杰.jpg")},
            data:[
              {},
              []
            ]},
          "lfk":{
                 personalData:{name:"林霏开",imgSrc:require("@/assets/menberImg/yanjiusheng/林霏开.jpg")},
                 data:[
                  {name:"林霏开",major:"地图制图学与地理信息工程",researchFields:"滑坡灾害预警预测"},
                  [{title:"已发表论文",class:"paper",item:[
                      "Luo X ,  Lin F ,  Chen Y , et al. Coupling logistic model tree and random subspace to predict the landslide susceptibility areas with considering the uncertainty of environmental features[J]. Scientific Reports, 2019, 9(1).",
                      "Xiangang Luo, Feikai Lin, et al. Mine landslide susceptibility assessment using IVM, ANN and SVM models considering the contribution of affecting factors.[J]. Plos One, 2019."
                                                          ]
                   },{
                   title:"教育背景",class:"education",item:["2014.9-2018.6 中国地质大学（武汉） 本科","2018.9-2021.6 中国地质大学（武汉） 研究生"]
                  },
                    {title:"联系方式",class:"dial",item:["邮箱:641307701@qq.com"]}]
                ]},
          "xzx":{
                 personalData:{name:"肖祖香",imgSrc:require("@/assets/menberImg/yanjiusheng/肖祖香.jpg")},
                 data:[
                  {name:"肖祖香",major:"地图制图学与地理信息工程",researchFields:"干旱评估"},
                  [{title:"已发表论文",class:"paper",item:[
                      "Zhu S, Xiao Z, Luo X, et al. Multidimensional Response Evaluation of Remote-Sensing Vegetation Change to Drought Stress in the Three-River Headwaters, China[J]. IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing, 2020, 13: 6249-6259.",
                      "肖祖香,朱双,罗显刚,娄连惠,李江,罗顺根,操丽.三江源区多尺度水文干旱与植被的响应研究[J].河海大学学报(自然科学版),0,():"]
                   },
                    {title:"教育背景",class:"education",item:["2014.9-2018.6 江西师范大学 本科","2018.9-2021.6 中国地质大学（武汉）研究生"]},
                    {title:"联系方式",class:"dial",item:["邮箱:2317952443@qq.com"]},
                  ]
                ]},
          "ljq":{
                 personalData:{name:"李建庆",imgSrc:require("@/assets/menberImg/yanjiusheng/李建庆.jpg")},
                 data:[
                  {name:"李建庆",major:"地图制图学与地理信息工程",researchFields:"水文过程模拟"},
                  [{title:"已发表论文",class:"paper",item:[
                      "Luo Xiangang, Li Jianqing, Zhu Shuang, Xu Zhanya, Huo Zhibin. Estimating the Impacts of Urbanization in the Next 100 years on Spatial Hydrological Response[J]. Water Resources Management. 2020, 34(5): 1673-1692.",
                      "李建庆, 罗显刚, 朱双, 张炜, 徐战亚, 霍志彬, 田壮, 霍光杰. 北江流域土地利用/覆盖变化对水文过程影响研究[J]. 人民长江. 2020, 51(08): 89-94."
                                    ]
                   },{
                   title:"教育背景",class:"education",item:["2014.9-2018.6 安徽理工大学 本科","2018.9-2021.6 中国地质大学（武汉）研究生"]
                  },
                    {title:"联系方式",class:"dial",item:["邮箱：1576849914@qq.com"]}
                  ]
                ]},
          "cly":{
                 personalData:{name:"曹雷宇",imgSrc:require("@/assets/menberImg/yanjiusheng/曹雷宇.jpg")},
                 data:[
                  {name:"曹雷宇",major:"测绘工程",researchFields:"干旱分析"},
                  [{title:"已发表论文",class:"paper",item:[
                      "Xu Z, Cao L, Zhong S, et al. Trends in global vegetative drought from long-term satellite remote sensing data[J]. IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing, 2020, 13: 815-826."]
                   },{
                   title:"教育背景",class:"education",item:["2014.9-2018.6 华中农业大学 本科","2018.9-2021.6 中国地质大学（武汉）研究生" ]
                  },{
                    title:"联系方式",class:"dial",item:["邮箱：2530642929@qq.com" ]
                  }]
                ]},
          "lg":{
                 personalData:{name:"刘庚",imgSrc:require("@/assets/menberImg/yanjiusheng/刘庚.jpg")},
                 data:[
                  {name:"刘庚",major:"测绘工程",researchFields:"遥感大数据及其应用"},
                  [{title:"已发表论文",class:"paper",item:[
                      'Z.Xuetal.,"Trends in Global Vegetative Drought From Long-Term Satellite Remote Sensing Data," in IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing, vol. 13, pp. 815-826, 2020, doi: 10.1109/JSTARS.2020.2972574.'
                                                            ]
                   },{title:"教育经历",class:"education",item:[
                      "2013.9-2017.6 湖北科技学院 本科", "2018.9-2021.6 中国地质大学（武汉） 研究生"
                    ]
                  },
                    {title:"联系方式",class:"dial",item:["邮箱:965183526@qq.com"]}
                  ]
                ]},
          "cxd":{
            personalData:{name:"陈旭东",imgSrc:require("@/assets/menberImg/yanjiusheng/陈旭东.jpg")},
            data:[
              {name:"陈旭东",major:"测绘工程",researchFields:"时空风速预测"},
              [{title:"教育背景",class:"education",item:["2015.9-2019.6 郑州大学 本科","2019.9-至今 中国地质大学大学（武汉）研究生"]},
                {title:"联系方式",class:"dial",item:["邮箱：2032165994@qq.com"]}]

            ]},
          "Ljq":{
            personalData:{name:"李俊奇",imgSrc:require("@/assets/menberImg/yanjiusheng/李俊奇.jpg")},
            data:[
              {name:"李俊奇",major:"软件工程",researchFields:"基于深度学习的植被干旱预测"},
              [{title:"教育经历",class:"education",item:[
                  "2015.9-2019.6 太原理工大学 本科","2019.9-至今 中国地质大学（武汉）研究生"
                ]
              },{title:"联系方式",class:"dial",item:["邮箱：372692608@qq.com"]}]
            ]},
          "lk":{
            personalData:{name:"罗凯",imgSrc:require("@/assets/menberImg/yanjiusheng/罗凯.jpg")},
            data:[
              {name:"罗凯",major:"测绘工程",researchFields:"生态水文监测站点布设"},
              [{title:"已发表论文",class:"paper",item:[
                 'Luo, Kai, Ting Zhang, and Yanwen Liu. "Design and Implementation of the Water Environment Monitoring and Management System Based on WebGIS for the Four-Lake Basin of Hubei Province." E3S Web of Conferences. Vol. 136. EDP Sciences, 2019.'
                ]
              },{title:"教育经历",class:"education",item:[
               "2014.9-2018.6 湖北科技学院 本科", "2019.9-至今 中国地质大学（武汉） 研究生"
                ]
              },
                {title:"联系方式",class:"dial",item:["邮箱:luokai@cug.edu.cn/1347872987@qq.com"]}]
            ]},
          "wjn":{
            personalData:{name:"魏嘉楠",imgSrc:require("@/assets/menberImg/yanjiusheng/魏嘉楠.jpg")},
            data:[
              {name:"魏嘉楠",major:"测绘工程",researchFields:"水文遥感"},
              [{title:"教育背景",class:"education",item:["2014.9-2018.8 山西农业大学 本科","2019.9-至今 中国地质大学（武汉）研究生"]},
                {title:"联系方式",class:"dial",item:["邮箱：760371482@qq,.com"]}]
            ]},
          "lx":{
            personalData:{name:"刘晓",imgSrc:require("@/assets/menberImg/yanjiusheng/刘晓.jpg")},
            data:[
              {name:"刘晓",major:"地图制图学与地理信息系统",researchFields:"城市热岛与城市化"},
              [{title:"教育背景",class:"education",item:["2015.9-2019.6 安徽理工大学 本科","2019.9-至今 中国地质大学（武汉）研究生"]},
                {title: "联系方式",class:"dial",item:["邮箱：1051663041@qq.com"]}]
                ]
            },
          "krn":{
            personalData:{name:"林孔若楠",imgSrc:require("@/assets/menberImg/yanjiusheng/孔若楠.jpg")},
            data:[
              {name:"孔若楠",major:"地图制图学与地理信息工程",researchFields:"滑坡易发性评价"},
              [{title:"教育背景",class:"education",item:["2016.9-2020.6 中国地质大学（武汉）本科","2020.9-至今 中国地质大学（武汉）研究生"]},
                {title:"联系方式",class:"dial",item:["邮箱：809853237@qq.com"]}]
            ]},
          "gyx":{
            personalData:{name:"郭宇昕",imgSrc:require("@/assets/menberImg/yanjiusheng/郭宇昕.jpg")},
            data:[
              {name:"郭宇昕",major:"资源与环境",researchFields:"滑坡预测"},
              [{title:"教育背景",class:"education",item:["2016.9-2020.6 中国地质大学（武汉）本科","2020.9-至今 中国地质大学（武汉） 研究生"]},
                {title:"联系方式",class:"dial",item:["邮箱：1355228539@qq.com"]}]
            ]},
          "zm":{
            personalData:{name:"周密",imgSrc:require("@/assets/menberImg/yanjiusheng/周密.jpg")},
            data:[
              {name:"周密",major:"地图制图学与地理信息工程",researchFields:"基于空间相似性的滑坡敏感性评价"},
              [ {title:"教育背景",class:"education",item:["2016.9-2020.6 昆明理工大学 本科","2020.9-至今 中国地质大学（武汉）研究生"]},
                {title:"联系方式",class:"dial",item:["邮箱：thewhispergis@foxmail.com"]}]
            ]},
          "xym":{
            personalData:{name:"谢玉明",imgSrc:require("@/assets/menberImg/yanjiusheng/谢玉明.jpg")},
            data:[
              {name:"谢玉明",major:"电子信息",researchFields:"本体、知识图谱"},
              [{title:"教育背景",class:"education",item:["2014.9-2018.6 湖南大学 本科","2020.9-至今 中国地质大学（武汉） 研究生"]},
                {title:"联系方式",class:"dial",item:["邮箱：670101965@qq.com"]}]
            ]},
          "ll":{
            personalData:{name:"李论",imgSrc:require("@/assets/menberImg/yanjiusheng/李论.jpg")},
            data:[
              {name:"李论",major:"地图制图学与地理信息工程",researchFields:"基于深度学习的流域水文预报"},
              [{title:"教育背景",class:"education",item:["2016.9-2020.6 华北水利水电大学 本科","2020.9-至今 中国地质大学（武汉） 研究生"]},
                {title:"联系方式",class:"dial",item:["邮箱：971647828@qq.com"]}]
            ]},
          "xyl":{
            personalData:{name:"肖尹黎",imgSrc:require("@/assets/menberImg/yanjiusheng/肖尹黎.jpg")},
            data:[
              {name:"肖尹黎",major:"资源与环境",researchFields:"滑坡位移预测"},
              [{title:"教育背景",class:"education",item:["2016.9-2020.6 武汉工程大学 本科","2020.9-至今 中国地质大学（武汉）研究生"]},
                {title:"联系方式",class:"dial",item:["邮箱：799534951@qq.com"]}]
            ]},
          "xg":{
            personalData:{name:"夏广",imgSrc:require("@/assets/menberImg/yanjiusheng/夏广.jpg")},
            data:[
              {name:"夏广",major:"电子信息",researchFields:""},
              [{title:"教育背景",class:"education",item:["2016.9-2020.6 湖北工程学院 本科","2021.5-至今 中国地质大学（武汉）研究生"]},
                {title:"联系方式",class:"dial",item:["邮箱：1304882283@qq.com"]}]
            ]}
        }
      }
    },
    components:{
      Aside,
      StudentInfo,
      Content
    },
    created() {
       this.name=this.$route.params.name;
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