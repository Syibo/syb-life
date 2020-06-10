<template>
  <div class="fotter">
    <div class="fotter_btn">
      <el-popover
        placement="top"
        trigger="hover">
        <div>
        <img src="http://shenyibo.oss-cn-beijing.aliyuncs.com/a4b85644d30139aae26160a39059691.jpg" width="200" height="265">
        </div>
        <svg class="icon" style="width: 40px;height: 40px;margin-right: 20px;cursor: pointer;" slot="reference" aria-hidden="true">
          <use xlink:href="#iconweixin1"></use>
        </svg>
      </el-popover>

      <svg class="icon" style="width: 34px;height: 34px;margin-top: -9px;cursor: pointer;" @click="goGit">
        <use xlink:href="#icongithub"></use>
      </svg>
    </div>

    <div class="fotter_logo">
      <img src="../assets/images/syb_logo.png" />
    </div>

    <div>
      免責事項
    </div>
    <div>
      © 2020.
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      input1: ''
    }
  },
  async mounted() {

  },
  methods: {
    goGit() {
      window.open('https://github.com/Syibo', '_blank');
    }
  }
}
</script>

<style lang="less" scoped>
@media screen and (max-width: 767px) {
  .fotter {
    width: 100%!important;
  }
}
.fotter {
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 10px;
  font-size: 16px;
  box-sizing: content-box;
  width: 1000px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px 0;
  .fotter_btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .fotter_logo {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 15px;
    img {
      width: 150px;
    }
  }
}
</style>
