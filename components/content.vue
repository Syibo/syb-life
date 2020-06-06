<template>
  <div class="content">
    <div class="main">
      <div class="main_left">
        <section>
          <nuxt />
        </section>
      </div>
      <div class="main_right">gg</div>
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
.content {
  background-color: #f9f9f9;
  margin-top: 56px;
  .main {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: calc(100vh - 120px);
    padding-top: 10px;
    font-size: 16px;
    box-sizing: content-box;
    width: 1000px;
    padding-left: 16px;
    padding-right: 16px;
    margin-left: auto;
    margin-right: auto;
    outline: 1px solid red;
    .main_left {
      flex-shrink: 0;
      width: 730px;
      margin-bottom: 24px;
      margin-right: 10px;
      min-height: 100px;
      section {
        background-color: #fff;
        border-radius: 4px;
        margin-bottom: 10px;
        padding: 24px;
      }
    }
    .main_right {
      flex-shrink: 0;
      width: 260px;
      background-color: white;
      min-height: 100px;
    }
  }
}
</style>
