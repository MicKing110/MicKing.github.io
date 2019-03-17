<template>
  <div class="wrapper">
    <v-banner :img="bannerImg" :text="bannerText"/>
    <!-- 服务范围 -->
    <div class="main">
      <div class="mainCon">
        <h4>服务范围</h4>
        <p>Scope and service</p>
      </div>
      <div class="ScopeContent content">
        <ul>
          <li v-for="(item,index) in serviceList" :key="index"  @click="severListClick">
            <a href="javascript:;">
              <img :src="item.imagesUrl" alt title="石材结晶">
              <h5>{{item.title}}</h5>
              <p>{{item.text}}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
     
    <!-- 工程案例 -->
    <div class="main">
      <div class="mainCon">
        <h4>工程案例</h4>
        <p>Engineering case</p>
        <span @click="MoreClick()">查看更多>></span>
      </div>
      <div class=" content">
        <v-content :AllData='indexCase' ></v-content>
      </div>
    </div>
     <!-- 关于我们 -->
    <div class="main">
      <div class="mainCon">
        <h4>关于我们</h4>
        <p>About Us</p>
      </div>
      <div class="newContent content">
        <div class="newContentright_About">
          <p>
            众捷国际环境清洁（北京）有限公司成立于2014年，是一家集商业、写字楼、小区、酒店、公寓、政府机关、工厂的环境清洁、石材翻新、外墙清洗粉刷、大型餐饮、城市园林绿化、虫害防治等一体的综合性环境清洁服务公司。
            公司实行现代化管理模式，为下岗职工和农村剩余劳动力提供就业机会。
          </p>
          <p>
            公司组织机构健全，管理制度完善，运行廉洁高效。公司下设保洁部、工程部、市场部、品质部、财务部等职能机构；公司大力实施人才战略，各部门管理人员和技术人员均受过不同程度的专业技术培训。公司注重企业文化，始终强调管理和服务的重要性，积极探索市场变幻，多方面、立体式进行自我完善与发展。
            公司现有员工500多人，管理人员30多人以及国际一流的专业清洁设备、产品，全体员工在“为客户提供方便、快捷、高品质的清洁服务”目标的指导和共同努力下，先后承接了诸多知名楼盘和品牌的日常保洁、楼宇开荒、外墙清洗、石材翻新、外景灯具安装、绿化及养护工程等项目，得到各项目管理部的大力好评，今后公司会进一步适应现代的要求，与国际接轨，以专业创造品质，满足广大客户对清洁水平的更高要求。
          </p>
          <p>公司自成立以来，坚持勇于开拓、创新、信守合同、以服务质量争市场为立身之本，注重培养员工素质与专业技能，在竞争激烈的市场中，以优质高效的服务、专业的技术技能，以赢得客户的长久信赖与支持为目标。</p>
          <p>众捷将以更加至诚，更加专业，更高服务的标准回报客户，回报社会。</p>
        </div>
        <div class="newContentLeft" style="text-align:right">
          <img src="../../assets/image/index/WechatIMG19.jpeg" alt>
        </div>
      </div>
    </div>
    <!-- <div class="main">
      <div class="mainCon">
        <h4>我们的资质认证</h4>
        <p>一张张证书,是您的保障,更是对我们做事情的态度</p>
      </div>
      <div class="content">
        <ul>

        </ul>
      </div>
    </div> -->
  </div>
</template>

<script>
import banner from "../banner/AboutBanner";
import bannerImg from "../../assets/image/banner.jpg";
import content from './content'
import mack from '../../assets/js/mock.js'
import indexMack from '../../assets/js/indexMock.js'
export default {
  components: {
    "v-banner": banner,
    'v-content':content
  },
  props: {},
  data() {
    return {
      bannerImg: bannerImg,
      bannerText: "内容",
      indexCase:mack.indexCase,
      serviceList:indexMack.list
    };
  },
  watch: {},
  computed: {},
  methods: {
    MoreClick(){
      this.$parent.contentClick("case")
    },
    severListClick(){
       this.$parent.contentClick("case")
    }
  },
  created() {},
  mounted() {
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  .main {
    min-width: 1240px;
    .mainCon {
      position: relative;
      padding: 15px 0;
      text-align: center;
      background: url("../../assets/image/bg.jpg");
      box-shadow: 0 0 15px #ccc;
      h4 {
        width: 100%;
        font-size: 38px;
      }
      p {
        width: 100%;
        font-size: 22px;
      }
      span{
        position: absolute;
        right: 100px;
        bottom: 20px;
      }
    }
    // 新闻动态
    .newContent {
      display: flex;
      .newContentLeft {
        width: 620px;
        height: 400px;
        img {
          width: 95%;
          margin: 0 auto;
          height: 100%;
        }
      }
      .newContentright_About {
        width: 620px;
        p {
          font-size: 14px;
          line-height: 24px;
          text-indent: 2em;
        }
      }
      .newContentright {
        width: 620px;
        ul {
          li {
            padding: 10px 0;
            border-bottom: 1px dashed #ccc;
            h6 {
              font-size: 18px;
              line-height: 20px;
            }
            i {
              font-style: normal;
              font-size: 12px;
              line-height: 16px;
            }
            p {
              line-height: 22px;
              font-size: 14px;
            }
          }
        }
      }
    }
    // 服务范围
    .ScopeContent {
      ul {
        display: flex;
        justify-content: space-around;
        li {
          width: 260px;
          height: 330px;
          border: 1px solid #ccc;
          background: url("../../assets/image/cont_back.gif") no-repeat;
          background-size: 100% 100%;
          a {
            display: block;
            width: 100%;
            text-align: center;
            img {
              width: 175px;
              height: 175px;
              border-radius: 50%;
              margin: 14px 0;
            }
            h5 {
              padding-top: 12px;
              line-height: 30px;
              font-size: 18px;
            }
            p {
              padding: 0 10px;
              font-size: 14px;
            }
          }
        }
        li:hover {
          background-image: url("../../assets/image/cont_backHover.gif");
          a {
            color: #fff;
          }
        }
      }
    }
    // 案例
    .caseContent{
      ul{
        display: flex;
        flex-wrap: wrap;
        margin-left: -40px;
        li{
          position: relative;
          width: 386px;
          height: 240px;
          margin: 0 0 40px 40px;
          cursor: pointer;
          img{
            width: 100%;
            height: 100%;
          }
          .caseContentText{
            display: none;
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            background-color: rgba(0,0,0,0.5);
            p{
              color: #fff;
              text-align: center;
              line-height: 30px;
            }
          } 
        }
        li:hover .caseContentText{
          display: block;
        }
      }
    }
  }
}
</style>