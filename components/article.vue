<template>
  <div class="artic">
    <div class="have_cont" @click="goDetail(content)">
      <div class="title">{{ content.title }}</div>
      <div class="abstract" v-if='content.content'>
        {{ content.content.substring(0, 120) }}...
      </div>
      <div class="art_bot">
        <span>{{ content.createTime }}</span>
      </div>
    </div>
    <div class="have_img" v-show="content.picture">
      <img :src="content.picture" />
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
    goDetail(c) {
      let ty = 'article'
      if (this.$route.name === 'life') {
        ty = 'diary'
      }
      let routeData = this.$router.resolve({ path: 'detail', query: { id: c.id, ty }});
      window.open(routeData.href, '_blank');
    }
  }
}
</script>

<style lang="less" scoped>
@media screen and (max-width: 767px) {
  .have_img {
    display: none!important;
  }
}
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
