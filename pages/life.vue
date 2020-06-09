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
    <div v-for="(item, index) in diaryList" :key="index">
      <Pictrue v-if="item.type === 'cat' || item.type === 'music'" :content="item"></Pictrue>
      <Article v-else :content="item"></Article>
    </div>
    <el-pagination
      :current-page.sync="currentPage1"
      :page-size="10"
      layout="total, prev, pager, next"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
import Article from '../components/article'
import Pictrue from '../components/pictrue'
export default {
  name: 'Life',
  components: {
    Article,
    Pictrue
  },
  data() {
    return {
      diaryList: [],
      total: 0,
      currentPage1: 1,
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
  .el-pagination {
    text-align: right;
  }
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