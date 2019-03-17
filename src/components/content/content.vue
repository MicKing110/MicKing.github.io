<template>
  <div class="wrapper">
    <div class=" content">
        <div class="caseContent">
           <ul>
             <li v-for="(item,index) in AllData" :key="index">
               <img :src="item.image" alt="">
               <div class="caseContentText">
                 <p>{{item.text}}</p>
               </div>
             </li>
           </ul>
        </div>
      </div>
  </div>
</template>

<script>

import bannerImg from "../../assets/image/banner.jpg";
export default {
  components:{
  },
  props:['AllData'],
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){
  }
}
</script>
<style lang="scss" scoped>
.wrapper{
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
          overflow: hidden;
          border: 1px solid #ccc;
          &:hover{
            border-color: #2d8cf0;
          }
          img{
            width: 100%;
            height: 100%;
            transition: all 0.6s;
          }
          img:hover{
             transform: scale(1.5)
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
</style>