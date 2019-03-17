<template>
  <div class="wrapper" :style="{backgroundImage:'url(' + img + ')'}">
    <!-- <img class="banner" :src="img" alt="" /> -->
    <p>{{text}}</p>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["img", "text"],
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.wrapper {
   min-width: 1240px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  p {
    text-align: center;
    line-height: 300px;
    font-size: 46px;
    color: #fff;
  }
}
</style>