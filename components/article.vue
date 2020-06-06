<template>
  <div class="artic">
    <div class="have_cont">
      <div class="title">《纸短情长》民国60余封情书</div>
      <div class="abstract">
        你要做一个不动声色的大人了。不准情绪化，不准偷偷想念，不准回头看。去过自己另外的生活。你要听话，不是所有的鱼都会生活在同一片海里。 -- 村上
      </div>
      <div class="art_bot">
        <span>2020-01-23</span>
      </div>
    </div>
    <div class="have_img">
      <img src="https://upload-images.jianshu.io/upload_images/16647262-ab50d40ea017230a.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" />
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
.artic {
  display: flex;
  width: 100%;
  margin: 0 0 15px;
  padding: 15px 2px 20px 0;
  border-bottom: 1px solid #f0f0f0;
  min-height: 140px;
  align-items: center;
  .have_cont {
    display: flex;
    flex-direction: column;
    flex: 1;
    .title {
      margin: -7px 0 4px;
      display: inherit;
      font-size: 18px;
      font-weight: 700;
      line-height: 1.5;
      color: #333;
    }
    .abstract {
      margin: 0 0 8px;
      font-size: 13px;
      line-height: 24px;
      color: #999;
    }
    .art_bot {
      margin-right: 10px;
      color: #b4b4b4;
    }
  }
  .have_img {
    width: 150px;
    margin-left: 20px;
    img {
      width: 100%;
    }
  }
}
</style>
