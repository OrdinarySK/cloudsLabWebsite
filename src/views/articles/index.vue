<template>
  <div class="article-container">
    <Content 
    :item= "item">
    </Content>

    <div class="article-content">
      <div class="left">
        <Aside :memberClass="mClass" @inc="addnumber"></Aside>
      </div>
      <div class="right">
        <Article :article-class="myArticle" :position="clickYear">

        </Article>

      </div>


    </div>




  </div>
</template>

<script>
import Content from '@/components/Content';
import Aside from './Aside2';
import Article from './arctile-list';

export default {
  components: {
    Content,
    Aside,
    Article

  },
  data () {
    return {
      item: "论文",
      clickYear:'2000',
      mClass:['2021', "2020","2019",'2018', '2016','2015', '2014'],
      myArticle:[
        {
          year:2021,
          papers:['1. Zhu S, Xu Z, Luo X, et al. Internal and external coupling of Gaussian mixture model and deep recurrent network for probabilistic drought forecasting[J]. International Journal of Environmental Science and Technology, 2021, 18(5): 1221-1236.',
                  '',
                  '',
                  ''
            ]
        },
        {
          year:2020,
          papers:['1. Zhu S, Xiao Z, Luo X, et al. Multidimensional Response Evaluation of Remote-Sensing Vegetation Change to Drought Stress in the Three-River Headwaters, China[J]. IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing, 2020, 13: 6249-6259.',
                  '2. Luo X, Wang J, Chen G, et al. Research on distribution of suspended sediment concentration in long time series based on mid-resolution imaging spectrometer data and quantile trend analysis[J]. Regional Studies in Marine Science, 2020, 39: 101399.',
                  '3. Xu Z, Cao L, Zhong S, et al. Trends in global vegetative drought from long-term satellite remote sensing data[J]. IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing, 2020, 13: 815-826.',
                  '4. Xu Z, Luo X, Zhu S, et al. A CPS-Improved Data Estimation Model for Flash Flood Early Warning Sensor Network[M]//Big Data Analytics for Cyber-Physical Systems. Springer, Cham, 2020: 247-259.',
                  '5. Zhu S, Luo X, Chen S, et al. Improved hidden Markov model incorporated with copula for probabilistic seasonal drought forecasting[J]. Journal of Hydrologic Engineering, 2020, 25(6): 04020019.',
                  '6. Zhu S, Xu Z, Luo X, et al. Internal and external coupling of Gaussian mixture model and deep recurrent network for probabilistic drought forecasting[J]. International Journal of Environmental Science and Technology, 2021, 18(5): 1221-1236.',
                  '7. Luo X, Li J, Zhu S, et al. Estimating the Impacts of Urbanization in the Next 100 years on Spatial Hydrological Response[J]. Water Resources Management, 2020: 1-20.',
                  '8. Zhu S, Yuan X, Luo X, et al. An Improved Long Short-Term Memory Network for Streamflow Forecasting in the Upper Yangtze River [J]. Stochastic Environmental Research and Risk Assessment.  (SCIE  Accept)'
                ]
        },
        {
          year:2019,
          papers:['1. Wang J, Zhu S, Luo X, et al. Refined micro-scale geological disaster susceptibility evaluation based on UAV tilt photography data and weighted certainty factor method in Mountainous Area[J]. Ecotoxicology and environmental safety, 2020, 189: 110005.',
                  '2. Zhu S, Xu Z, Luo X, et al. Quantifying the contributions of climate change and human activities to drought extremes, using an improved evaluation framework[J]. Water Resources Management, 2019, 33(15): 5051-5065.',
                  '3. Luo X, Lin F, Chen Y, et al. Coupling logistic model tree and random subspace to predict the landslide susceptibility areas with considering the uncertainty of environmental features[J]. Scientific reports, 2019, 9(1): 1-13.',
                  '4. Zhu S, Xu Z, Luo X, et al. Assessing coincidence probability for extreme precipitation events in the Jinsha River basin[J]. Theoretical and Applied Climatology, 2020, 139(1): 825-835.',
                  '5. Zhong S, Di L, Sun Z, et al. Investigating the long-term spatial and temporal characteristics of vegetative drought in the contiguous United States[J]. IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing, 2019, 12(3): 836-848.',
                  '6. Zhu S, Yuan X, Luo X, et al. Gaussian mixture model coupled recurrent neural networks for wind speed interval forecast[J]. Energy Conversion and Management, 2019, 198: 111772.  (SCIE)',
                  '7. Luo X, Lin F, Zhu S, et al. Mine landslide susceptibility assessment using IVM, ANN and SVM models considering the contribution of affecting factors[J]. PloS one, 2019, 14(4).',
                  '8. Wang J, Zhu S, Luo X, et al. Refined micro-scale geological disaster susceptibility evaluation based on UAV tilt photography data and weighted certainty factor method in Qingchuan County [J]. Ecotoxicology and Environmental Safety, 2019: 110005. (SCIE)',
                  '9. Zhu S, Luo X, Xu Z, et al. Seasonal streamflow forecasts using mixture-kernel GPR and advanced methods of input variable selection[J]. Hydrology Research, 2019, 50(1): 200-214. (SCIE)',
                  '10. Luo X, Yuan X, Zhu S, et al. A hybrid support vector regression framework for streamflow forecast[J]. Journal of Hydrology, 2019, 568: 184-193.  (SCIE)',
                  '',
                  '',
                  '',
                  '',
          ]
        },
        {
          year:2018,
          papers:['1. Luo X G, Wang J, Xu Z, et al. Dynamic analysis of urban ground subsidence in Beijing based on the permanent scattering insar technology[J]. Journal of Applied Remote Sensing, 2018, 12(2): 026001.',
            '',
            '',
            ''
          ]
        },

        {
          year:2016,
          papers:['1. Luo X, Tu J, Huang L. Optimization of Express Delivery Routing Problem[J]. Telkomnika, 2016, 14(3A): 380.',
            '2. Huang L, Luo X, Xie Z, et al. Digital Management Mechanism of Sudden Geological Disaster Emergency Plan[J]. Telkomnika, 2016, 14(3A): 145.',
            '3. 黄露, 谢忠, 罗显刚. 3S 技术在突发地质灾害应急管理中的应用[J]. 测绘科学, 2016, 11.',
            '4. 黄露, 谢忠, 罗显刚. 地质灾害监测预警信息共享机制研究[J]. 测绘科学, 2016, 41(5): 15-16.',
            '5. Yang C, Xie Z, Xu Z. An asynchronous Geoprocessing Workflow and its application to an Antarctic ozone monitoring and mapping service[J]. International Journal of Digital Earth, 2016, 9(2): 156-170.',
            '6. Zhu S, Zhou J, Ye L, et al. Streamflow estimation by support vector machine coupled with different methods of time series decomposition in the upper reaches of Yangtze River, China[J]. Environmental Earth Sciences, 2016, 75(6): 531.'
          ]
        },
        {
          year:2015,
          papers:['1. 罗显刚, 彭静. 以GIS开发大赛为依托的信息工程专业本科生创新能力培养研究[J]. 课程教育研究, 2015, 000(002):250-251.',
            '',
            '',
            ''
          ]
        },
        {
          year:2014,
          papers:['1. Lu H, Xian-gang L, Hong-qi C, et al. A Visualization Model of Geological Disaster Emergency Scheme Based on Ontology[J]. The Open Cybernetics & Systemics Journal, 2014, 8(1).',
            '2. Lin F T, Hsu P H. The development of disaster management information systems in Taiwan[C]//The 1st International Conference on Urban Disaster Reduction. 2005.',
            '',
            ''
          ]
        },

      ]


    }
  },
  methods:{
    addnumber(x){
      this.clickYear = x;
      // alert(this.clickYear);

    }
  }
}
</script>

<style scoped>

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