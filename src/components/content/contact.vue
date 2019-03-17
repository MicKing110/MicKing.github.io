<template>
  <div class="wrapper">
    <v-banner :img="bannerImg" :text="bannerText"/>
    <div class="body contact">
      <div class="contactText">
        <h4 style=" color: #009f40;">众捷国际环境清洁(北京)有限公司</h4>
        <p>座机: 010-65488518</p>
        <p>手机: 139 1121 1062</p>
        <p>Q Q: 2300013962</p>
        <p>邮箱: zhongjieguoji@163.com</p>
        <p>地址:北京市 朝阳区 双桥路西6号</p>
        <img src="../../assets/image/WechatIMG25.png" width="200px" alt="">
      </div>
      <div class="amap-page-container">
        <el-amap vid="amap" :zoom="zoom" :center="center" class="amap-demo">
          <el-amap-info-window
            :position="currentWindow.position"
            :content="currentWindow.content"
            :visible="currentWindow.visible"
            :events="currentWindow.events">
          </el-amap-info-window>
        </el-amap>
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
      bannerText: "联系我们",
       msg: 'vue-amap向你问好！',
      zoom: 14,
      center: [116.571916,39.887537],
      windows: [
        {
          position: [116.571916,39.887537],
          content: '北京市 朝阳区 双桥路西6号',
          visible: true,
          events: {
            close() {
            }
          }
        }
      ],
      slotWindow: {
        position: [116.571916,39.887537]
      },
      currentWindow: {
        position: [0, 0],
        content: '',
        events: {},
        visible: false
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    switchWindow(tab) {
          this.currentWindow.visible = false;
          this.$nextTick(() => {
            this.currentWindow = this.windows[tab];
            this.currentWindow.visible = true;
          });
        }
  },
  created() {},
  mounted() {
    this.currentWindow = this.windows[0];
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  .contact{
    padding: 50px;
    display: flex;
    justify-content: space-around;
    .contactText{
      h4{
      font-size: 30px;
        line-height: 100px;
      }
      p{
        font-size: 18px;
        line-height: 50px;
      }
    }
    .amap-page-container{
      width: 500px;
      height: 500px;
      border: 1px solid #ccc;
    }
    
  }
}
</style>