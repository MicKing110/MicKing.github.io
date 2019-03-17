<template>
  <div class="wrapper">
    <div class="logo">
      <a href="http://www.zhongjieguoji.com">
        <img src="../../assets/image/logo.jpg" alt>
      </a>
    </div>
    <div class="nav">
      <ul>
        <li
          @click="tabClick(index)"
          v-for="(item , index) in navList"
          :key="index"
          :class="{active:index == dataIndex}"
        >{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["headData","dataIndex"],
  data() {
    return {
      tabIndex: 0,
      navList: [
        "网站首页",
        "关于我们",
        // "服务范围",
        "工程案例",
        "资质证书",
        // "企业文化",
        "人才招聘 ",
        "联系我们"
      ]
    };
  },
  watch: {
     dataIndex(index) {
       this.$parent.index =index
    }
  },
  computed: {},
  methods: {
    tabClick(index) {
      this.$parent.index =index
      this.$parent.componentId = this.headData[index];
    }
  },
  created() {
  },
  mounted() {
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  width: 1240px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  // background: #0078c1;
  .logo {
    img {
      width: 100px;
      height: 60px;
      cursor: pointer;
    }
  }
  // 导航部分
  .nav {
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        height: 60px;
        line-height: 60px;
        padding: 0 15px;
        cursor: pointer;
        // color:#fff;
      }
      .active {
        // color: #009f40;
        border-bottom: 3px solid #009f40;
      }
    }
  }
}
</style>
