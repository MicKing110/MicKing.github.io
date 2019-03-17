<template>
  <div class="wrapper">
    <v-banner :img="bannerImg" :text="bannerText"/>
    <div class="body recruitwrapper ">
      <div v-for="(item,index) in recruitData" :key='index'  class="recruitCon">
         <h4>{{item.title}}</h4>
        <p>岗位职责:</p>
        <ul>
          <li v-for="(items,indexs) in item.list" :key='indexs'>{{indexs+1}}、{{items}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import banner from "../banner/AboutBanner";
import bannerImg from "../../assets/image/About.jpg";
export default {
  components: {
    "v-banner": banner
  },
  props: {},
  data() {
    return {
      bannerImg: bannerImg,
      bannerText: "人才招聘",
      recruitData:[

        {
          title:'诚聘保洁员',
          list:[
            '本公司长期招聘保洁员',
            '男女不限，年龄18-55周岁，身体健康。',
            '工资2500-4000元每月，每周休息4-6天'
          ],
        },
        {
          title:'招聘现场主管',
          list:[
            '年龄45岁以下;',
            '高中以上文化程度;',
            '具有同行业的清洁管理工作经验，工作两年以上;',
            '面试时请带好身份证原件、学历证书原件，一寸相片3张;'
          ],
        },{
          title:'诚聘项目经理',
          list:[
            '负责完成公司赋予的任务，并对本部的清洁卫生及合同的其它工作项目负责。;',
            '合理调配、指导、督促、检查下属员工的工作。',
            '及时向下属员工传达各项工作指令，向上级主管部门回馈信息上传下达。',
            '负责按保洁质量标准检查本部工作，发现问题及时处理、改进并记录。',
            '负责组织召开员工会议，及时纠正并讲解员工在规章制度等方面的问题。',
            '负责制定、修订、完善日、周、月、年保洁工作计划并检查、督促、实施。',
            '负责员工推荐、奖惩、辞退，参与编写培训教材，指导领班工作和培训员工。',
            '负责安排、实施临时任务，处理保洁工作中的突发事件。',
          ],
        },
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.wrapper {
  .recruitwrapper{
    padding: 50px;
  }
  .recruitCon{
    padding-bottom: 40px;
    h4{
      font-size: 24px;
      font-weight: bold;
      line-height: 50px;
    }
    p{
      font-size: 18px;
      line-height: 40px;
    }
    ul{
      li{
        font-size: 14px;
        line-height: 30px;
        text-indent: 2em;
      }
    }
  }
}
</style>