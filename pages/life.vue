<template>
  <div class="life">
    <div class="life_type">
      <div class="life_item" v-for="(item, index) in typeList" :key="index" @click="selectType(item)">
        <el-tooltip class="item" effect="dark" :content="item.content" placement="top">
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="item.icon"></use>
          </svg>
        </el-tooltip>
      </div>
    </div>
    <div v-for="(item, index) in diaryList" :key="index">
      <Pictrue v-if="item.type === 'cat' || item.type === 'music' || item.type === 'food' || item.type === 'pic'" :content="item"></Pictrue>
      <Article v-else :content="item"></Article>
    </div>
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
import Pictrue from '../components/pictrue'
import axios from 'axios'
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
        { name: 'pic', icon: '#icontupian', content: '一些照片' },
        { name: 'diary', icon: '#iconmiao', content: '杂七杂八' },
        { name: 'music', icon: '#iconMusic', content: '好好听歌' },
        { name: 'cat', icon: '#iconcat', content: '做我的猫' },
        { name: 'tour', icon: '#iconlvyou', content: '到处走走' },
        { name: 'food', icon: '#iconFood-Icons-', content: '认真吃饭' },
      ],
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
        url: '/api/admin/web/diary/page',
      })
    ])
    return {
      diaryList: list.data.data.list,
      total: list.data.data.pagination.total,
      keyWord: type
    }
  },
  async mounted() {

  },
  methods: {
    async selectType(item) {
      this.keyWord = item.name
      const res = await axios({
        method: 'get',
        params: {
          keyWord: this.keyWord,
          page: this.currentPage1,
          size: 10
        },
        url: '/api/admin/web/diary/page',
      })
      this.diaryList = res.data.data.list;
      this.total = res.data.data.pagination.total;
    },
    async handleCurrentChange(val) {
      this.currentPage1 = val;
      const res = await axios({
        method: 'get',
        params: {
          keyWord: this.keyWord,
          page: this.currentPage1,
          size: 10
        },
        url: '/api/admin/web/diary/page',
      })
      this.diaryList = res.data.data.list;
      this.total = res.data.data.pagination.total;
      document.documentElement.scrollTop = 0;
    }
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