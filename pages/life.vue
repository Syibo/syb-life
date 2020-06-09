<template>
  <div class="life">
    <div class="life_type">
      <div class="life_item" v-for="(item, index) in typeList" :key="index">
        <el-tooltip class="item" effect="dark" :content="item.content" placement="top">
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="item.icon"></use>
          </svg>
        </el-tooltip>
      </div>
    </div>
    <Article :content="item" v-for="(item, index) in diaryList" :key="index"></Article>
  </div>
</template>

<script>
import Article from '../components/article'
export default {
  name: 'Life',
  components: {
    Article
  },
  data() {
    return {
      diaryList: [],
      total: 0,
      typeList: [
        { name: 'pic', icon: '#icontupian', content: '图片' },
        { name: 'Css', icon: '#iconmiao', content: '笔记' },
        { name: 'Javascript', icon: '#iconMusic', content: '好好听歌' },
        { name: 'Vue', icon: '#iconcat', content: '做我的猫' },
        { name: 'Element', icon: '#iconlvyou', content: '到处走走' },
        { name: 'Element', icon: '#iconEggs', content: '认真吃饭' },
      ]
    }
  },
  async asyncData (context) {
    const [list] = await Promise.all([
      context.$axios({
        method: 'get',
        params: {
          page: 1,
          size: 10
        },
        url: '/api/admin/web/diary/page',
      })
    ])
    return {
      diaryList: list.data.data.list,
      total: list.data.data.pagination.total
    }
  },
  async mounted() {

  }
}
</script>

<style lang="less" scoped>
.life {
  .life_type {
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #f9f9f9;
    display: flex;
    .life_item {
      .icon {
        width: 24px;
        height: 24px;
        margin: 0 8px 0 16px;
      }
    }
    .life_item:hover {
      cursor: pointer;
    }
  }
}
</style>