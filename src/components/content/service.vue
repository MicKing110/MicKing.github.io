<template>
  <div class="wrapper">
    <v-banner :img="bannerImg" :text="bannerText"/>
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
      bannerText: "服务范围"
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
}
</style>