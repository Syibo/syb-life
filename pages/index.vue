<template>
  <div>
    <Article :content="item" v-for="(item, index) in articleList" :key="index"></Article>
    <el-pagination
      :current-page.sync="currentPage1"
      @current-change="handleCurrentChange"
      :page-size="10"
      layout="total, prev, pager, next"
      :total="total">
    </el-pagination>
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
      total: 0,
      keyWord: ''
    }
  },
  async asyncData (content) {
    let type = (content.route.query.type == null ? '' : content.route.query.type);
    const [list] = await Promise.all([
      content.$axios({
        method: 'get',
        params: {
          keyWord: type,
          page: 1,
          size: 10
        },
        url: '/api/admin/web/article/page',
      })
    ])
    return {
      articleList: list.data.data.list,
      total: list.data.data.pagination.total,
      keyWord: type
    }
  },
  watch: {
    $route (to, from) {
      this.$router.go(0)
    }
  },
  created() {
    this.$bus.$on('handClickSeach', (data) => {
      this.currentPage1 = 1;
      this.keyWord = data.keyWord;
      this.handleCurrentChange()
    })
  },
  async mounted() {
    
  },
  methods: {
    async handleCurrentChange(val) {
      this.currentPage1 = val;
      const res = await axios({
        method: 'get',
        params: {
          keyWord: this.keyWord,
          page: this.currentPage1,
          size: 10
        },
        url: '/api/admin/web/article/page',
      })
      this.articleList = res.data.data.list;
      this.total = res.data.data.pagination.total;
      document.documentElement.scrollTop = 0;
    }
  }
}
</script>

<style lang="less" scoped>
.el-pagination {
  text-align: right;
}
</style>
