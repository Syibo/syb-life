<template>
  <div class="header">
    <div class="gtu">
      <div class="cyf">
        <div>1</div>
        <div class="mid">2</div>
        <div>3</div>
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
      .mid {
        width: 1000px;
        outline: 1px solid springgreen;
      }
    }
  }
}
</style>
