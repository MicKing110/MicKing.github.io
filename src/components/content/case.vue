<template>
  <div class="wrapper">
    <v-banner :img="bannerImg" :text="bannerText"/>
    <div class="body casewaraper">
      <Tabs>
          <TabPane label="全部">
            <v-content :AllData='caseAll'></v-content>
          </TabPane>
          <TabPane label="石材翻新/养护">
            <v-content :AllData='Stone'></v-content>
          </TabPane>
          <TabPane label="日常保洁/开荒保洁" >
            <v-content :AllData='Cleaning'></v-content>
          </TabPane>
          <TabPane label="外墙清洗" >
            <v-content :AllData='External'></v-content>
          </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
import banner from "../banner/AboutBanner";
import bannerImg from "../../assets/image/About.jpg";
import content from './content'
import mack from '../../assets/js/mock.js'
export default {
  components: {
     
    "v-banner": banner,
    'v-content':content

  },
  props: {},
  data() {
    return {
      bannerImg: bannerImg,
      bannerText: "工程案例",
      Stone:mack.StoneAll,
      Cleaning:mack.CleaningAll,
      External:mack.ExternalAll,
      caseAll:mack.caseAll

    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {
     document.documentElement.scrollTop = 0;
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.wrapper {
  .casewaraper{
    padding: 20px 0;
  }
}
</style>