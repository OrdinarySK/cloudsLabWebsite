<template>
  <div class="memberInfor-container">
    <div class="memberInfor" v-for="(item,index) in member" :key="index" :id="item.category">
       <h1>{{item.degree}}</h1>
       <div class="infor">
         <div class="detail" v-for="(member,idx) in item.deMember" :key="idx">
           <img :src="member.picSrc" alt="">
<!--           <div class="img" :style="{backgroundImage:url(member.picSrc)}"></div>-->
           <router-link :to="member.route" ><p class="name">{{member.name}}</p></router-link>
           <p class="des">{{member.des}}</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "MemberInfor",
    data:()=>{
      return {
        member:[{ category:"teacher",
                  degree:"导师",
                  deMember:[{name:"罗显刚", route:"/teacher/lxg",picSrc:require('@/assets/menberImg/daoshi/罗显刚.jpg'),des:"博士生导师"},
                            {name:"徐战亚", route:"/teacher/xzy",picSrc:require('@/assets/menberImg/daoshi/徐战亚.jpg'),des:"硕士生导师"},
                            {name:"朱双", route:"/teacher/zs",picSrc:require('@/assets/menberImg/daoshi/朱双.jpg'),des:"硕士生导师"}]},
                { category:"doctor",
                  degree: "博士研究生",
                 deMember: [{
                  name:"赵文杰",route:"/student/zwj",picSrc: require('../../assets/menberImg/yanjiusheng/赵文杰.jpg'),des:"生态环境大数据"
                 }]},
                // { category:"s2018",
                //   degree:"18级研究生",
                //   deMember:[{name:"林霏开", route:"/student/lfk",picSrc:require('../../assets/menberImg/yanjiusheng/林霏开.jpg'),des:"滑坡灾害预警预测"},
                //             {name:"肖祖香", route:"/student/xzx", picSrc:require('../../assets/menberImg/yanjiusheng/肖祖香.jpg'),des:"干旱评估"},
                //             {name:"李建庆",  route:"/student/ljq",picSrc:require('../../assets/menberImg/yanjiusheng/李建庆.jpg'),des:"水文过程模拟"},
                //             {name:"曹雷宇", route:"/student/cly",picSrc:require('../../assets/menberImg/yanjiusheng/曹雷宇.jpg'),des:"干旱分析"},
                //             {name:"刘庚", route:"/student/lg",picSrc:require('../../assets/menberImg/yanjiusheng/刘庚.jpg'),des:"遥感大数据及其应用"},
                //
                //   ]},
          {category:"sp",
            degree:"在读硕士研究生",
            deMember: [{name:"陈旭东", route:"/student/cxd",picSrc:require('../../assets/menberImg/yanjiusheng/陈旭东.jpg'),des:"时空风速预测"},
              {name:"李俊奇", route:"/student/Ljq", picSrc:require("../../assets/menberImg/yanjiusheng/李俊奇.jpg"),des:"基于深度学习的植被干旱预测"},
              {name:"罗凯", route:"/student/lk", picSrc:require('../../assets/menberImg/yanjiusheng/罗凯.jpg'),des:"生态水文监测站点布设"},
              {name:"魏嘉楠", route:"/student/wjn",picSrc:require('../../assets/menberImg/yanjiusheng/魏嘉楠.jpg'),des:"水文遥感"},
              {name:"刘晓", route:"/student/lx",picSrc:require('../../assets/menberImg/yanjiusheng/刘晓.jpg'),des:"城市热岛、城市化"},
              {name:"郭宇昕", route:"/student/gyx",picSrc:require('../../assets/menberImg/yanjiusheng/郭宇昕.jpg'),des:"滑坡预测"},
              {name:"孔若楠", route:"/student/krn",picSrc:require('../../assets/menberImg/yanjiusheng/孔若楠.jpg'),des:"滑坡易发性评价"},
              {name:"周密",route:"/student/zm",picSrc:require('../../assets/menberImg/yanjiusheng/周密.jpg'),des:"基于空间相似性的滑坡敏感性评价"},
              {name:"李论",route:"/student/ll", picSrc:require('../../assets/menberImg/yanjiusheng/李论.jpg'),des:"基于深度学习的流域水文预报"},
              {name:"谢玉明", route:"/student/xym",picSrc:require('../../assets/menberImg/yanjiusheng/谢玉明.jpg'),des:"本体、知识图谱"},
              {name:"肖尹黎",route:"/student/xyl",picSrc:require('../../assets/menberImg/yanjiusheng/肖尹黎.jpg'),des:"滑坡位移预测"},
              {name:"夏广",route:"/student/xg",picSrc:require('../../assets/menberImg/yanjiusheng/夏广.jpg'),des:""}]
          },
          // { category:"s2020",
          //   degree:"20级研究生",
          //   deMember: [  {name:"郭宇昕", route:"/student/gyx",picSrc:require('../../assets/menberImg/yanjiusheng/郭宇昕.jpg'),des:"滑坡预测"},
          //     {name:"孔若楠", route:"/student/krn",picSrc:require('../../assets/menberImg/yanjiusheng/孔若楠.jpg'),des:"滑坡易发性评价"},
          //     {name:"周密",route:"/student/zm",picSrc:require('../../assets/menberImg/yanjiusheng/周密.jpg'),des:"基于空间相似性的滑坡敏感性评价"},
          //     {name:"李论",route:"/student/ll", picSrc:require('../../assets/menberImg/yanjiusheng/李论.jpg'),des:"基于深度学习的流域水文预报"},
          //     {name:"谢玉明", route:"/student/xym",picSrc:require('../../assets/menberImg/yanjiusheng/谢玉明.jpg'),des:"本体、知识图谱"},
          //     {name:"肖尹黎",route:"/student/xyl",picSrc:require('../../assets/menberImg/yanjiusheng/肖尹黎.jpg'),des:"滑坡位移预测"},
          //    ]
          // },
          // { category:"s2021",
          //   degree:"21级研究生",
          //   deMember: [{name:"夏广",route:"/student/xg",picSrc:require('../../assets/menberImg/yanjiusheng/夏广.jpg'),des:""}]},
          { category:"ss",
            degree:"已毕业研究生",

            deMember: [
              {name:"林霏开", route:"/student/lfk",picSrc:require('../../assets/menberImg/yanjiusheng/林霏开.jpg'),des:"就职于阿里"},
              {name:"肖祖香", route:"/student/xzx", picSrc:require('../../assets/menberImg/yanjiusheng/肖祖香.jpg'),des:"就职于广东国地"},
              {name:"李建庆",  route:"/student/ljq",picSrc:require('../../assets/menberImg/yanjiusheng/李建庆.jpg'),des:"就职于阿里"},
              {name:"曹雷宇", route:"/student/cly",picSrc:require('../../assets/menberImg/yanjiusheng/曹雷宇.jpg'),des:"就职于字节跳动"},
              {name:"刘庚", route:"/student/lg",picSrc:require('../../assets/menberImg/yanjiusheng/刘庚.jpg'),des:"就职于华为"},
              {name:"孟书令",route:"/student/msl",picSrc:require('../../assets/menberImg/yibiye/男.jpg'),des:"就职于顺丰科技"},
              {name:"张孝祥",route:"/student/zxx",picSrc:require('../../assets/menberImg/yibiye/男.jpg'),des:"就职于京东"},
              {name:"吴迪",route:"/student/wd",picSrc:require('../../assets/menberImg/yibiye/男.jpg'),des:"就职于小米"},
              {name:"涂静敏",route:"/student/tjm",picSrc:require('../../assets/menberImg/yibiye/女.jpg'),des:"武大读博"}
              ]}
        ]
      }
    }
  }
</script>

<style scoped>
  .memberInfor-container{
    width:70%;
    height: 100%;
    overflow: auto;
  }
 .memberInfor{
   margin-top: 15px;
   width: 100%;
 }
  .memberInfor h1{
    color:#5a5a5a;
    width: 100%;
    /*height: 70px;*/
    line-height: 70px;
    border-bottom:1px solid rgba(0,0,0,0.1);
  }
  .memberInfor .infor{
    display: flex;
    width:100%;
    flex-wrap: wrap;
    /*margin-top: 10px;*/
  }
  .memberInfor .infor .detail{
    width: 150px;
    margin-right: 30px;
    margin-top: 30px;
  }
  .memberInfor .infor .detail img{
    width: 150px;
    height: 200px;
    object-fit: cover;
  }
  .memberInfor .infor .detail p{
    text-align: center;
    width: 100%;
    font-size: 17px;
    /*vertical-align: center;*/
    word-wrap:break-word;
  }
  .name{
    color: #905050;
  }
  .name:hover{
    color: red;
  }
  .des{
    color:rgba(0,0,0,0.5);
  }
</style>