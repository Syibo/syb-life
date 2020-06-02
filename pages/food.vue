<template>
  <div>
    <Menu :list="list"></Menu>
    <div class="contents">
      <div class="contentsBlock">
        <header class="headerBlock">
            <h1>
                food
            </h1>
        </header>
      </div>

      <div class="contentsBlockcode">
        <div class="bodyIndexBlock">
          <el-row class="row_class" :gutter="20">
            <el-col :xs="24" :sm="8" v-for="(item, index) in food" :key="index" @click.native="openDia(item)">
              <food-compenents :content="item"></food-compenents>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <Fotter :list="list"></Fotter>
    <el-dialog
      title=""
      :visible.sync="dialogVisible"
      :fullscreen="true">
        <Dialog :content="dialogData"></Dialog>
      </el-dialog>
    </div>
</template>

<script>
import Fotter from '../components/fotter.vue'
import Menu from '../components/menu.vue'
import FoodCompenents from '~/components/food.vue'
import Dialog from '../components/dialog.vue'
import axios from 'axios'
export default {
  name: 'Food',
  components: {
      Menu,
      Fotter,
      FoodCompenents,
      Dialog
  },
  data() {
    return {
      list: [],
      food: [],
      total: 0,
      dialogVisible: false,
      dialogData: {}
    }
  },
  async asyncData (context) {
    const [data, list] = await Promise.all([
      context.$axios.get('/api/admin/web/artType/list'),
      context.$axios({
        method: 'get',
        params: {
          page: 1,
          size: 10
        },
        url: '/api/admin/web/food/page',
      })
    ])
    return {
      list: data.data.data,
      food: list.data.data.list,
      total: list.data.data.pagination.total
    }
  },
  async mounted() {

  },
  methods: {
    openDia(item) {
      this.dialogData = item;
      this.dialogVisible = true;
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
