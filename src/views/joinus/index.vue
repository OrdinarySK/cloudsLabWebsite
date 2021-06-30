<template>
  <div class="joinus-container">
    <Content
      :item="item">
    </Content>
      
    <div class="container">
      <section id="introduction">
      
      <div class="page-header">
        <h3>EEBD简介</h3>
      </div>    
    </section>
    <div>
      <p>{{introduction}}</p>
      <br>
      <ul style="margin-left: 30px;"> 
        <li v-for = "(item,index) in items" :key=index>{{item}}</li>
      </ul>
    </div>
    
    <section id="introduction">
      
      <div class="page-header">
        <h3>申请博士后</h3>
      </div>    
    </section>
    
    <div>
      <span>招收条件</span>
      <ul style="list-style:none;">
        <li v-for = "(item, index) in condition" :key=index>{{index+1+'.'+item}}</li>
      </ul>
    </div>
    <br>
    <div>
      <span>应聘方式</span>
      <br>
      {{contact}}
      <ul style="list-style:none;">
        <li v-for = "(item, index) in ways" :key=index>{{index+1+'.'+item}}</li>
      </ul>
    </div>
    <br>
    <div>
      <span>相关待遇</span>
      <ul style="list-style:none;">
        <li v-for = "(item, index) in wage" :key=index>{{index+1+'.'+item}}</li>
      </ul>
    
    </div>
    <section id="introduction">
      <div class="page-header">
        <h3>申请博士</h3> 
      </div>    
    </section>
    <p>{{doctor}}</p>
    <section id="introduction">
      <div class="page-header">
        <h3>硕士招生</h3> 
      </div>    
    </section>
    {{master}}
    
    <p style="font-weight:bold;">罗显刚 邮箱: billlxg@126.com 联系电话：13995523517</p>
    <p style="font-weight:bold;">徐战亚 邮箱：xuzhanya@cug.edu.cn 联系电话：15871681358</p>
    <p style="font-weight:bold;">朱双 邮箱：zhushuang@cug.edu.cn 联系电话：18171370219</p>
    <section id="introduction">
      <div class="page-header">
        <h3>申请专职科研人员</h3> 
      </div>    
    </section>
    <ul style="list-style:none;">
        <li v-for = "(item, index) in research" :key=index>{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Content from '@/components/Content'
export default {
 components: {
   Content,
 }
 ,
 data () {
   return {
     item : "加入我们",
     introduction: "中国地质大学（武汉）地理与信息工程学院生态环境大数据团队主要从事自然灾害的专业监测、气象预警、应急管理、应急指挥、防汛抗旱、水资源管理、生态环境大数据分析等科研工作。团队已先后承担全国地质灾害气象预警系统、地质灾害气象预警四级互联子系统（国家、省、市、县四级互联）等防灾减灾相关科研项目100多项，研究项目获得过国土资源科学技术奖、中国地理信息产业优秀工程奖、卫星导航定位科技进步奖等重大奖项。其中，在中央电视台发布的全国地质灾害气象预警预报是由该团队提供技术支撑。目前主要研究方向为:",
     items: [
       '生态环境大数据',
       '地质灾害动态预警与人工智能',
       '智慧水利',
       '智慧城市与云计算'
     ],
     condition: [
       '政治立场坚定，热爱祖国，拥护党的路线、方针、政策；热爱党的教育事业，品行端正、身心健康、吃苦耐劳、踏实认真、责任心强，具有良好的学术道德和严谨的科学态度，对科研工作兴趣浓厚，善于思考，积极进取，学风严谨，有责任心，身体健康；',
       '近三年内获得博士学位或应届博士研究生，已有高水平研究成果，年龄不超过35周岁；',
       '具有测绘科学与技术、水文地质学、环境科学等相近或相关学术与专业背景；',
       '具有较强的分析问题和解决问题的能力、文字表达和论文写作能力及团队协作能力；',
       '在站期间，需结合团队研究方向发表SCI学术论文2篇及以上；',
       '必须具备脱产在我校从事博士后研究工作的条件。'
     ],
     ways: [
       '个人申请信（简要说明自己的申请方向及研究计划、教育背景、研究经验及资历等）；',
       '个人详细简历；',
       '提供发表论文清单，博士学位论文摘要和1-3篇代表性论文扫描件，以及其它可以证明本人能力和学术水平的相关资料，博士学位导师的联系方式(电话和电子邮箱)；',
       '学术研究代表成果扫描件（专著需提供专著封面和目录，科研项目需提供项目批件，获奖或专利需提供证书）;',
       '博士毕业证和学位证（如无法提供，请提供答辩通过证明材料）；',
       '初选合格者将通过Email或者电话方式进行初步沟通，并通知本人提供2封专家推荐信（要求其中1封为博士生导师提供）；'
     ],
     contact: "有意应聘者，请准备如下材料并按顺序合并为一个PDF文档，发送至罗显刚教授邮箱billlxg@126.com（邮件主题和PDF文件命名为“姓名+应聘博士后”）。",
     wage: [
       '提供科研条件和经费，鼓励并协助研究人员撰写高水平科技论文、结合团队研究方向申报国家自然科学基金和中国博士后科学基金等科研项目；',
       '工资及福利待遇按国家博士后相关规定和中国地质大学（武汉）博士后工资福利待遇有关规定执行；另团队也会给予一定的福利，具体待遇面谈；',
       '博士后出站后，由合作导师推荐央企或国企工作；特别优秀的博士后，合作导师向相关高校推荐留校任教。'
     ],
     doctor: "如果你觉得自己与众不同，如果你觉得自己非常优秀，如果你觉得自己很适合做研究，如果你觉得自己项目管理和团队协作能力非常强，如果你对我们的研究方向或科研项目有浓厚的兴趣，如果你具有非常好的数学基础和编程功底，你即可直接电话或EMail联系 罗显刚 教授，亦欢迎直接登门造访。",
     master: "欢迎校内外的地信、水文、遥感、测绘、软件工程等相关专业的优秀保研生或优秀考研生随时联系。",
     research: [
       '生态环境大数据团队招聘专职科研3名：',
       '1、地质灾害、水文水资源等相关专业博士；',
       '2、科研创新能力突出，擅长科研成果的总结，有较强的科研成果转化能力；',
       '3、985、211、双一流专业；',
       '4、以第一作者发表T2及以上期刊论文2篇以上。',
       '备注：',
       '1、新进专职科研人员管理根据《中国地质大学（武汉）新进专职科研人员聘用管理实施办法（试行）》进行，实行“3年+3年”合约聘期制管理，具有研究生学历和博士学位的人员薪酬标准参照事业编制副教授年薪水平执行，聘期内享受事业编制职工休假、周转房、子女入学、入托福利待遇。聘期届满，考核合格并被聘为副高级及以上职务者，转为事业编制聘用，学校给予一次性奖励。',
       '2、专职科研人员的年龄、学历、学位、外语和学术水平原则上按学校要求执行。要求具有博士学位，博士年龄一般不超过31周岁；博士后年龄一般不超过35周岁。'
     ]
   
   }
 }
}
</script>

<style scoped>
.container{
  width: 70%;
  margin: 0px 15%;
}
.page-header{
  
  padding-bottom: 9px;
  padding-top: 9px;
  margin: 20px 0px 30px;
}
p{
  white-space: normal;
}

span{
  font-weight:bold;
}
li{
  line-height:25px;
}

section{
  background-color: #468dc7;
  border-radius: 5px;
  color: #eeeeee;
  text-align: center;
  width:65%;
  margin: 0 auto;
}
</style>