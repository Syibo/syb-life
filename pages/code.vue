<template>
  <div class="contents">
    <div class="contentsBlock">
        <header class="headerBlock">
            <h1>
                Html
            </h1>
        </header>
      </div>

      <div class="contentsBlockcode">
        <div class="bodyIndexBlock">'
          <el-row class="row_class">
            <el-col :xs="24" v-for="item in 10" :key="item">
              <code-compenents></code-compenents>
            </el-col>
          </el-row>
        </div>
    </div>
  </div>
</template>

<script>
import CodeCompenents from '~/components/code.vue'
export default {
  name: 'Code',
  components: {
      CodeCompenents
  },
  data() {
    return {

    }
  },
  async asyncData ({ params }) {

  },
  async mounted() {

  }
}
</script>

<style>
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
    padding: 1px 0 0 0;
    z-index: 2;
  }
</style>
