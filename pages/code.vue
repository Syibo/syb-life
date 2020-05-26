<template>
  <div>
    <Menu :list="list" @type="type"></Menu>
    <div class="contents">
      <div class="contentsBlock">
        <header class="headerBlock">
            <h1>
                {{ $store.state.article.type || 'code' }}
            </h1>
        </header>
      </div>

      <div class="contentsBlockcode">
        <div class="bodyIndexBlock">
          <el-row class="row_class">
            <el-col :xs="24" v-for="(item, index) in articleList" :key="index">
              <code-compenents :content="item"></code-compenents>
            </el-col>
          </el-row>

          <el-pagination
            background
            class="pag"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="page"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="size"
            layout="total, prev, pager, next"
            :total="total">
          </el-pagination>
        </div>
      </div>
    </div>
    <Fotter :list="list" @type="type"></Fotter>
  </div>
</template>

<script>
import CodeCompenents from '~/components/code.vue'
import Fotter from '../components/fotter.vue'
import Menu from '../components/menu.vue'
import axios from 'axios'
export default {
  name: 'Code',
  components: {
      CodeCompenents,
      Menu,
      Fotter
  },
  data() {
    return {
      list: [],
      artType: '',
      page: 1,
      size: 10,
      total: 1,
      articleList: []
    }
  },
  async asyncData (context) {
    const [data, list] = await Promise.all([
      context.$axios.get('/api/admin/web/artType/list'),
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
      list: data.data.data,
      articleList: list.data.data.list,
      total: list.data.data.pagination.total
    }
  },
  async mounted() {
    this.artType = this.$route.query.type;
    // const { data } = await axios({
    //   method: 'get',
    //   params: {
    //     keyWord: this.artType,
    //     page: this.page,
    //     size: this.size
    //   },
    //   url: '/api/admin/web/article/page',
    // })
    // this.articleList = data.data.list;
    // this.total = data.data.pagination.total;
  },
  methods: {
    async type(type) {
      this.artType = type;
      const { data } = await axios({
        method: 'get',
        params: {
          keyWord: this.artType,
          page: this.page,
          size: this.size
        },
        url: '/api/admin/web/article/page',
      })
      this.articleList = data.data.list;
      this.total = data.data.pagination.total;
    },
    handleSizeChange() {

    },
    handleCurrentChange() {

    }
  }
}
</script>

<style scoped>
  .contentsBlock {
    background: #FFF url(../assets/images/bg_home_01.png) repeat 100% 0;
  }
  .headerBlock {
    position: relative;
    margin: 0 auto;
    padding: 142px 0 138px 0;
    width: 100%;
    max-width: 1200px;
    z-index: 2;
  }
  .headerBlock h1 {
    color: #222;
    font-size: 25px;
    font-weight: 700;
    line-height: 1.6;
    text-align: center;
    text-indent: 0.1em;
    letter-spacing: 0.1em;
  }
    .contentsBlockcode {
    padding: 0 calc(5% + 10px) 0 calc(5% + 10px);
    background-color: #e5f8f3;
  }
  .contentsBlockcode .bodyIndexBlock {
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 950px;
    padding: 50px 0 0 0;
    z-index: 2;
  }
  .pag {
    background-color: #e5f8f3;
    float: right;
  }
  .pag .el-pager li {
    background-color: #e5f8f3!important;
  }
  .pag .el-pager li:not(.disabled).active {
    color: black!important;
  }
  .pag .btn-next {
    background-color: #e5f8f3!important;
  }
  .pag .btn-prev {
    background-color: #e5f8f3!important;
  }
</style>
