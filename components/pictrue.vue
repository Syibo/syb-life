<template>
  <div class="artic">
    <div class="have_cont">
      <div class="title">{{ content.title }}</div>
      <div class="abstract" v-if="content.link">
        <audio :src="content.link" controls="controls">
          Your browser does not support the audio element.
        </audio>
      </div>
      <div class="abstract">
        <div class="abstract_item" v-for="(item, index) in content.picture.split(',')" :key="index">
          <el-image
            :src="item" 
            :preview-src-list="content.picture.split(',')">
          </el-image>
        </div>
      </div>
      <div class="art_bot">
        <span>{{ content.createTime }}</span>
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
  props: {
    content: {
      type: Object,
      default: {},
    }
  },
  async mounted() {

  },
  methods: {

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
    .title:hover {
      text-decoration:underline
    }
    .abstract {
      margin: 0 0 8px;
      font-size: 13px;
      line-height: 24px;
      color: #999;
      display: flex;
      flex-wrap: wrap;
      .abstract_item {
        width: 33%;
        padding-right: 30px;
        margin-bottom: 15px;
        img {
          width: 100%;
        }
      }
      audio {
        width: 100%;
        margin: 10px 0;
      }
    }
    .art_bot {
      margin-right: 10px;
      color: #b4b4b4;
      font-size: 12px;
    }
  }
  .have_cont:hover {
    cursor: pointer;
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
