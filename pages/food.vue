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
            <el-col :xs="24" :sm="8" v-for="(item, index) in 5" :key="index">
              <food-compenents></food-compenents>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <Fotter :list="list"></Fotter>
    </div>
</template>

<script>
import Fotter from '../components/fotter.vue'
import Menu from '../components/menu.vue'
import FoodCompenents from '~/components/food.vue'
import axios from 'axios'
export default {
  name: 'Food',
  components: {
      Menu,
      Fotter,
      FoodCompenents
  },
  data() {
    return {
      list: [],
    }
  },
  async asyncData ({$axios, params, error }) {
    const [data, list] = await Promise.all([
      $axios.get('/api/admin/web/artType/list'),
    ])
    return {
      list: data.data.data,
    }
  },
  async mounted() {

  },
  methods: {

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
