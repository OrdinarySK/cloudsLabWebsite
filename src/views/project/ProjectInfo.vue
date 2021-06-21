<template>
  <div class="project-detail">
      <Content
      :item="items[id].title">
      </Content>
      <div class="main">
          <div class="title">
          <h2 class="titleName">{{items[id].title}}</h2>
          </div>
          <div class="content">
            <p>{{items[id].description}}</p>
            <section class="imgContent" v-for="(singleImg, index) in items[id].imgs" :key="index">
              <img :src="singleImg" alt="">
            </section>
        </div>
      </div>
      
  </div>
</template>

<script>
import Content from '@/components/Content'
export default {
    name: 'ProjectInfo',
    components: {
        Content,
    },
    data() {
        return {
            
            id: '',
            items: {
                dzhjhns: {
                    title: '湖南省地质灾害综合防治信息系统',
                    description: "为科学有效防治地质灾害，提高湖南省地质灾害应急指挥能力，本项目建设目标旨在通过依托全省各级国土资源管理机构，整合地质灾害防治管理信息资源，在湖南省地质灾害综合防治信息系统的总体设计框架下，建设湖南省地质灾害综合防治信息系统。该系统实现纵向与国家、省、市、县四级上下贯通，横向与各级应急办、防汛指挥部、气象局（台）等相关部门互联互通、资源共享、协同服务，为地质灾害应急指挥提供决策支持。",
                    imgs: [require('@/assets/projectImg/湖南地质灾害综合防治信息系统.jpg'), 
                          require('@/assets/projectImg/project/dzhjhns1.png'),
                          require('@/assets/projectImg/project/dzhjhns2.png'),
                          require('@/assets/projectImg/project/dzhjhns3.png')]
                },
                dzhjgzs: {
                    title: '贵州省地质灾害防治指挥平台',
                    description: "贵州省地质灾害防治指挥平台以服务于贵州省地质灾害防治工作为宗旨，围绕贵州省在地质灾害防治方面面临的系列问题，借鉴国内外先进经验，在充分利用、整合已有地质灾害建设成果基础上，综合运用信息化手段、大数据技术、GIS技术、地质灾害空-天-地一体化监测技术、三维可视化技术、云计算技术等，建立从多渠道汇聚而来的地质灾害防治信息的大数据资源池，建立地质灾害监测预警模型，建成地质灾害监测、预警、应急指挥、信息管理、项目管理等全流程的技术支撑平台，实现从数据汇聚、数据管理、动态监测、预警预报、指挥调度、综合防治等全过程信息化、智能化和标准化管理。",
                    imgs: [require('@/assets/projectImg/project/dzhjgzs1.png'),
                          require('@/assets/projectImg/project/dzhjgzs2.png')]
                },
                dzhjhgj: {
                    title: '国家地质灾害气象预警互联子系统',
                    description: '在已有的地质灾害气象预警工作基础之上，利用国家建成的地质环境云平台的硬件条件和网络基础，基于云计算技术，面向国家、省、市、县4级用户，构建精细化地质灾害区域气象预警系统，建立不同层级、不同精细化程度的地质灾害预警子系统。实现气象预警分析从国家级->省级->地市级->县级的“多级递进、逐级精细化”预警，推动县级地质灾害气象预警风险预警系统建设。构建统一的地质灾害气象风险预警成果发布平台，提高地质灾害气象风险预警为社会大众服务的能力。',
                    imgs: [require('@/assets/projectImg/project/dzhjhgj.jpg')                                                
                    ]
                },
                dzhjhbs: {
                    title: '湖北省地质环境综合信息平台',
                    description: '综合全省地质环境业务信息，搭建能够给管理者和决策者提供业务支撑、辅助决策的工作平台和信息汇总平台，实现平台框架建设、综合信息总览、网格化管理建设，并与省级业务支撑平台、移动防灾平台、共享平台、运维平台对接，实现全省地质环境信息的动态展示，从“管成果、严部署、重质量、抓进度”等方面全面查看地质灾害网格化管理工作。提供灵活和全面的工作情况掌握和分析方法，为管理人员对地质环境信息化工作的宏观把握提供有效工具。->省级->地市级->县级的“多级递进、逐级精细化”预警，推动县级地质灾害气象预警风险预警系统建设。构建统一的地质灾害气象风险预警成果发布平台，提高地质灾害气象风险预警为社会大众服务的能力。',
                    imgs: [require('@/assets/projectImg/project/dzhjhbs.png')                                                
                    ]
                },
                dzhjsxs: {
                    title: '山西省地质灾害监测预警系统',
                    description: '基于地质环境信息化建设成果，根据实际工作需求，通过数据集成、应用集成和成果集成，基于三维GIS平台，实现全省地质灾害监测预警各类信息资源及服务资源的充分共享，实现地质灾害监测监控、群测群防、预警预报，为地质灾害防治管理和决策支持提供一体化的工作平台和管理平台，进一步提升地质灾害防治日常管理、信息共享、监测预警能力。->省级->地市级->县级的“多级递进、逐级精细化”预警，推动县级地质灾害气象预警风险预警系统建设。构建统一的地质灾害气象风险预警成果发布平台，提高地质灾害气象风险预警为社会大众服务的能力。',
                    imgs: [require('@/assets/projectImg/project/dzhjsxs1.png'),
                           require('@/assets/projectImg/project/dzhjsxs2.png')                                               
                    ]
                },
                zhyjsjdzgl: {
                    title: '省级地质灾害应急值班管理系统',
                    description: '结合开展应急值班值守工作制度要求及业务工作需要，提供给省、市（州）、县（区）应急中心值班人员使用，为各级值班人员提供便捷的灾情、险情、突发应急事件、避险情况等信息接报、上报的工作平台，完成信息的收发、快速处置及跟踪反馈，能够根据值班工作情况记录值班工作日志，完成值班人员管理、值班排班管理、值班日志管理、值班统计等工作，实现了应急值班管理制度与电子化办公完美结合，极大的提升值班效率和值班规范程度。->省级->地市级->县级的“多级递进、逐级精细化”预警，推动县级地质灾害气象预警风险预警系统建设。构建统一的地质灾害气象风险预警成果发布平台，提高地质灾害气象风险预警为社会大众服务的能力。',
                    imgs: [require('@/assets/projectImg/省级地质灾害应急值班管理系统.jpg'),
                           require('@/assets/projectImg/project/zhyjsjdzgl1.png'),
                           require('@/assets/projectImg/project/zhyjsjdzgl2.png'),
                           require('@/assets/projectImg/project/zhyjsjdzgl3.png'),
                           require('@/assets/projectImg/project/zhyjsjdzgl4.png')                                               
                    ]
                },
                zhyjsjdzzh: {
                    title: '省级地质灾害应急指挥系统',
                    description: '地质灾害应急指挥系统是从险情发现、险情鉴定和险情处置阶段提供信息采集、管理和应用，实现快速防灾、减灾和救灾工作而建立的信息系统。整合全省地质灾害应急事件信息资源，利用云计算、大数据、感知网络、融合通信等现代信息技术，建立现代化省-市-县三级的互联互通的协同会商机制及应急指挥体系，发挥救援指挥神经中枢和信息中心作用，从响应、处置、会商、决策、指挥等全流程的提供决策支持，实现上传下达、综合汇聚、协同会商、专题研判、指挥调度和信息发布等功能，有效应对突发事件，提高应急事件响应速度，为应急指挥决策提供支撑',
                    imgs: [require('@/assets/projectImg/省级地质灾害应急指挥系统.jpg')                                               
                    ]
                },
                dsjxadz: {
                    title: '雄安新区基础地质数据展示子系统开发及空间分析算法研究',
                    description: '基于透明雄安地质信息平台大数据中心建设总体工作部署和业务需求。采用大数据中心服务接口发布的方式，研制开发基于B/S架构的雄安新区基础地质数据展示子系统和土壤地球化学评价。通过基础数据管理、数据统计、地质数据分析评价、地质环境监测等多种数据展示和分析工具，实时监测雄安地质环境状况，为雄安新区政府直观、全面的了解新区的地质条件、地质环境变化特征、城市规划建设和重大工程辅助决策提供翔实的、可靠的基础数据服务。',
                    imgs: [require('@/assets/projectImg/project/dsjxadz.jpg')                                               
                    ]
                },
                dsjxadsj: {
                    title: '雄安新区地质大数据综合展示子系统',
                    description: '雄安新区地质大数据综合展示子系统建设是结合雄安新区的建设规划与发展要求，深度了解地质资源相关行业的服务内容和服务趋势，研究地质数据的统一集成与科学管理方法，通过设计与制定相关技术标准规范，开展系列数据集成和管理系统建设，初步建成地质数据的自动化采集、质检、校验、存储、聚合及服务的基础大数据管理平台。通过大数据管理系统的建设，实现地质数据的统一存储、管理、共享，为雄安新区地质大数据应用提供基础数据与服务支撑，为地质数据资源的开发利用和共享奠定基础。',
                    imgs: [require('@/assets/projectImg/雄安新区地质大数据综合展示子系统.jpg'),
                           require('@/assets/projectImg/project/dsjxadsj1.png'),
                           require('@/assets/projectImg/project/dsjxadsj2.png'),
                           require('@/assets/projectImg/project/dsjxadsj3.jpg')                                         
                    ]
                },
                slsw: {
                    title: '三维电子沙盘指挥系统',
                    description: '三维电子沙盘指挥系统高效融合各类水利资源信息，通过数据中心对其进行整合、分类、关联、存储，实现各类数据信息的三维可视化展示，通过对指定流域、水库、灌区等基本信息的查询，关联展示其相关的数据信息。结合三维模型、三维动画的构建，实现水库及河流水位变化过程、淹没分析、溃堤溃坝分析等动态模拟展示；通过实体沙盘最大程度上模拟现实场景，进行模拟演练，为指挥决策提供决策支撑。',
                    imgs: [require('@/assets/projectImg/三维电子沙盘指挥系统.jpg'),
                           require('@/assets/projectImg/project/slsw.png'),
                                        
                    ]
                },
                slsj: {
                    title: '省级数据同步共享系统',
                    description: '湖北省山洪灾害省级数据同步共享系统，在现有省级山洪灾害监测预警平台的基础上，完善现有数据和接口标准，整合国土气象等部门的信息数据，设计统一的山洪灾害监测预警数据管理体系，提供系列数据清洗、处理及分析机制，建立省、市、县三级山洪预警数据同步及管理平台，实现时间、空间和业务等多维度的查询、统计和分析展示，有效提升数据的集约管理水平；并结合湖北省山洪灾害防治现状及山洪预警服务机制，在现有省级山洪灾害监测预警平台建设的基础上，面向全省范围内各级用户的需求进行系统建设，主要针对山洪灾害各类业务需求，搭建统一的山洪灾害共享服务平台。',
                        imgs: [require('@/assets/projectImg/省级数据同步共享系统.jpg'),
                               require('@/assets/projectImg/project/slsj1.jpg'), 
                            require('@/assets/projectImg/project/slsj2.png'), 
                            require('@/assets/projectImg/project/slsj3.jpg'),                  
                    ]
                }


        }
    }
    },
    created(){
        this.id = this.$route.params.id;
    }
}
</script>

<style scoped lang="less">
.titleName{
    font-size:18px;
    font-weight: 700;
    background: url('../../assets/projectImg/check.jpg') no-repeat left center;
    margin-bottom: 10px;
    margin-top: 20px;
    padding: 0 0 0 10px;
}
.main{
    width: 70%;
    margin: 0 auto;
}
.content{
    
    section{
        width: 800px;
        height: 500px;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
.content{
        width: 100%;
        .imgContent{
            width: 65%;
            margin: 20px auto;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        p{
            white-space: pre-line;
            text-indent: 2em;
            line-height: 1.8em;
        }
    }

</style>