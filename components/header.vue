<template>
  <div class="header">
    <div class="gtu">
      <div class="cyf">
        <div class="header_left" @click="goHome">
          <img src="../assets/images/syb_logo.png" />
        </div>
        <div class="mid">
          <!-- <div class="header_item">home</div> -->
          <div class="header_item" @click="goHome">code</div>
          <div class="header_item" @click="goLife">life</div>
          <div class="header_item" @click="goAbout">about</div>
        </div>
        <div class="header_right">
            <el-input
              placeholder="请输入内容"
              suffix-icon="el-icon-search"
              size="mini"
              style="width: 260px"
              v-model="input1">
            </el-input>
        </div>
      </div>
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
    goHome() {
      this.$router.push({ path: '/' })
    },
    goLife() {
      this.$router.push({ path: '/life' })
    },
    goAbout() {
      this.$router.push({ path: '/about' })
    }
  }
}
</script>

<style lang="less" scoped>
@media screen and (max-width: 767px) {
	.header_left {
    display: none;
  }
  .header_right {
    display: none;
  }
  .cyf {
    min-width: 12px!important;
    width: 100%;
  }
}
.header {
  width: 100%;
  .gtu {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0,0,0,.05);
    z-index: 100;
    .cyf {
      height: 56px;
      min-width: 1200px;
      max-width: 1440px;
      margin: 0 auto;
      transition: transform .3s cubic-bezier(.645,.045,.355,1);
      display: flex;
      align-items: center;
      justify-content: space-around;
      .header_left {
        width: 220px;
        text-align: center;
        img {
          width: 100px;
          margin: auto;
        }
      }
      .header_left:hover {
        cursor: pointer;
      }
      .mid {
        flex: 1;
        display: flex;
        .header_item {
          font-size: 17px;
          color: #333;
          padding: 0 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          height: 56px;
        }
        .header_item:hover {
          background-color: #f2f2f2;
        }
      }
      .header_right {
        width: 480px;
      }
    }
  }
}
</style>
