<template>
  <div class="header">
    <div class="gtu">
      <div class="cyf">
        <div class="header_left">
          <img src="../assets/images/syb_logo.png" />
        </div>
        <div class="mid">
          <div class="header_item">首页 </div>
          <div class="header_item">code</div>
          <div class="header_item">life</div>
        </div>
        <div class="header_right">3</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      
    }
  },
  async mounted() {

  }
}
</script>

<style lang="less" scoped>
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
        img {
          width: 100px;
        }
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
        width: 220px;
      }
    }
  }
}
</style>
