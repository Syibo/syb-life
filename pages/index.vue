<template>
  <div>
    <Article :content="item" v-for="(item, index) in articleList" :key="index"></Article>
    <el-pagination
      :current-page.sync="currentPage1"
      :page-size="10"
      layout="total, prev, pager, next"
      :total="total">
    </el-pagination>
    <!-- {{articleList}} -->
  </div>
</template>

<script>
import Article from '../components/article'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    Article
  },
  data() {
    return {
      currentPage1: 1,
      articleList: [],
      total: 0
    }
  },
  async asyncData (context) {
    const [list] = await Promise.all([
      context.$axios({
        method: 'get',
        params: {
          keyWord: context.store.state.article.type,
          page: 1,
          size: 10
        },
        url: '/api/admin/web/article/page',
      })
    ])
    return {
      articleList: list.data.data.list,
      total: list.data.data.pagination.total
    }
  },
  async mounted() {

  }
}
</script>

<style lang="less" scoped>
.el-pagination {
  text-align: right;
}
</style>
