<template>
  <div class="wrapper">
    <v-banner :img="bannerImg" :text="bannerText"/>
    <div class="body Qualifications">
      <ul>
        <li v-for="(itme,index) in imageAll" :key='index'>
          <div>
            <img :src="itme.image" alt="">
          </div>
          <p>{{itme.text}}</p>
        </li>
      </ul>
      <div class="pageNum">
         <Page :total="pageNum" @on-change='pageData' />
      </div>
      
    </div>
  </div>
</template>

<script>
import { Page } from 'iview';
import banner from "../banner/AboutBanner";
import bannerImg from "../../assets/image/About.jpg";

import mack from '../../assets/js/mock.js'
export default {
  components: {
    "v-banner": banner,
  },
  props: {},
  data() {
    return {
      bannerImg: bannerImg,
      bannerText: "资质证书",
      imageAll:mack.imageAll,
      pageNum:20
    }
  },
  watch: {},
  computed: {},
  methods: {
    pageData(index){
      if(index == 1)
      {
          this.imageAll=mack.imageAll
      }else if(index == 2){
          this.imageAll=mack.imageAll2
      }
    }
  },
  created() {
    this.pageNum=20;
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.wrapper {
  .Qualifications{
    ul{
      padding: 20px 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li{
        margin-top: 20px;
        cursor: pointer;
        div{
          width: 280px;
          height: 340px;
          border: 1px solid #ccc;
          display: flex;
          justify-content: center;
          align-content: center;
          img{
            max-width: 270px;
            height: 330px;
          }
        }

          p{
            width: 100%;
            text-align: center;
            line-height: 28px;
          }
        div:hover{
          border-color: #2d8cf0;
        }
      }
      
    }
    .pageNum{
      width: 200px;
      margin: 0 auto;
    }
  }
}
</style>