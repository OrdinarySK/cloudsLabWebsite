<template>
  <div class="detail-notice">
    <Content
    item="公告">
    </Content>
    <div class="detail-content">
        <h1>{{totalTitle}}</h1>
        <section v-for="(item, index) in items" :key="index">
            <h4 v-if="item.title">{{item.title}}</h4>
            <p v-for="(para, paraIndex) in item.paragraphs" :key="paraIndex">{{para}}</p>
        </section>
    </div>
  </div>
</template>

<script>
import Content from "@/components/Content"
export default {
components: {
    Content
},
data(){
    return {
        totalTitle: "生态环境大数据团队招聘专职科研3名",
        items: [
            {
                title: "",
                paragraphs: [
                    "1. 地质灾害、水文水资源等相关专业博士；",
                    "2. 科研创新能力突出，擅长科研成果的总结，有较强的科研成果转化能力；",
                    "3. 985高校博士优先；",
                    "4. 以第一作者发表T2及以上期刊论文1篇以上。"
                ]
            },
            {
                title: "备注：",
                paragraphs: [
                    "1. 新进专职科研人员管理根据《中国地质大学（武汉）新进专职科研人员聘用管理实施办法（试行）》进行，实行“3年+3年”合约聘期制管理，具有研究生学历和博士学位的人员薪酬标准参照事业编制副教授年薪水平执行，聘期内享受事业编制职工休假、周转房、子女入学、入托福利待遇。聘期届满，考核合格并被聘为副高级及以上职务者，转为事业编制聘用，学校给予一次性奖励。",
                    "2. 专职科研人员的年龄、学历、学位、外语和学术水平原则上按学校要求执行。要求具有博士学位，博士年龄一般不超过31周岁；博士后年龄一般不超过35周岁。"
                ]
            }
        ]
    }
}
}
</script>

<style scoped lang="less">
.detail-notice{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.detail-content{
    width: 60%;
    margin: 50px 20%;
    h1{
        text-align: center;
        margin: 15px 0 50px 0;
    }
    section{
        padding: 10px 0;
    }
    h2{
        margin: 15px 0;
    }
    p{
        white-space: pre-line;
        line-height: 1.8em;
    }
}
</style>