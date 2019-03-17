<template>
  <div class="home">
    <!-- <div class="oDiv"></div> -->
      <v-head :headData="componentData"  :dataIndex="index" />
    <component :is="componentId" @contentClick="contentClick" ></component>
    <v-foot/>
  </div>
</template>

<script>
import head from '@/components/head/head' // 头部
import foot from '@/components/foot/foot' // 尾部
import index from '@/components/content/index' // home首页
import About from '@/components/content/About' // 关于我们
import Service from '@/components/content/service' // 服务范围
import Case from '@/components/content/case' // 工程案例
import Qualifications from '@/components/content/Qualifications' // 资质证书
import Culture from '@/components/content/Culture' // 资质证书
import Recruit from '@/components/content/recruit' // 人才招聘
import Contact from '@/components/content/contact' // 联系我们

export default {
  name: 'home',
  components: {
    'v-head': head,
    'v-foot': foot,
    'index': index,
    'About': About,
    'case': Case,
    'Service': Service,
    'Recruit': Recruit,
    'Contact': Contact,
    'Qualifications': Qualifications,
    'Culture': Culture
  },
  data () {
    return {
      index:0,
      componentId: 'index',
      componentData: ['index', 'About', 'case', 'Qualifications', 'Recruit', 'Contact']
    }
  },
   methods: {
    contentClick(indexName) {
      let that=this;
      this.componentData.forEach((item,dataIndex)=>{
          if(item == indexName)
          {
            that.index=dataIndex
            that.componentId=indexName
          }
      })
    }
  },
  watch: {
    index(index) {
       this.$parent.dataIndex =index
    }
  },
}
</script>
<style lang="scss">
  .home{
    .oDiv{
      height: 60px;
    }
    .headNav{
      position: fixed;
      left: 0;
      top: 0;
      background: #fff;
      width: 100%;
    }
    .banner{
      width: 100%;
    }
  }
</style>
