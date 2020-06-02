<template>
  <div>
    <Menu :list="list" @type="type"></Menu>
    <div class="contents">
      <div class="contentsBlock">
        <header class="headerBlock">
            <h1>
                cat
            </h1>
        </header>
      </div>

      <div class="contentsBlockcode">
        <div class="bodyIndexBlock">
            <el-timeline>
                <el-timeline-item timestamp="2018/4/12" placement="top" v-for="item in catList" :key="item.createTime">
                  <el-card>
                      <h4 style="margin-bottom: 10px">{{ item.title }}</h4>
                      <div class="demo-image__preview">
                        <el-image 
                          style="width: 30%;"
                          :src="item.picture" 
                          :preview-src-list="srcList">
                        </el-image>
                      </div>
                  </el-card>
                </el-timeline-item>
            </el-timeline>
        </div>
      </div>
    </div>
    <Fotter :list="list" @type="type"></Fotter>
    </div>
</template>

<script>
import Fotter from '../components/fotter.vue'
import Menu from '../components/menu.vue'
import axios from 'axios'
export default {
  name: 'Cat',
  components: {
      Menu,
      Fotter
  },
  data() {
    return {
      list: [],
      srcList: [],
      catList: []
    }
  },
  async asyncData (context) {
    const [data, list] = await Promise.all([
      context.$axios.get('/api/admin/web/artType/list'),
      context.$axios.get('/api/admin/web/cat/list'),
    ])
    let srcList = []
    let catList = list.data.data;
    for (let i = 0; i < catList.length; i++) {
        srcList.push(catList[i].picture)
    }
    return {
      list: data.data.data,
      catList,
      srcList,
    }
  },
  async mounted() {

  },
  methods: {
    async type(type) {
      this.artType = type;
      this.page = 1;
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
