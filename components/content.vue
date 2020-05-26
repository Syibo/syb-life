<template>
  <div class="contents">
      <div class="contentsBlock01 header02">
        <header class="headerBlock03">
          <div class="image01">
            <img src="../assets/images/index_img_main_01.png" />
          </div>
        </header>
      </div>

      <div class="contentsBlock02">
        <div class="bodyIndexBlock01">
          <div class="newsBlock01">
            <span class="news"> one is all </span>
            <div class="news_content">
              <div class="news_title"> all is one </div>
              <div class="news_mid">{{ oneData.title }}</div>
              <div class="news_date">{{ oneData.updateTime }}</div>
            </div>
            <div class="swiperNav01">
              <div class="newsPrev01" @click="goPrev"></div>
              <div class="newsNext01" @click="goNext"></div>
            </div>
          </div>

          <h2 class="headIndexMod01">のlife</h2>
          <el-row class="row_class" :gutter="20">
            <el-col :xs="24" :sm="12" v-for="con in 4" :key="con">
              <div class="col_class" @click="openDiolog">
                <div class="col_class_title">关于本站</div>
                <div class="col_class_content">写在前面的话，2020</div>
                <div class="col_class_date">update 2020.02.12</div>
              </div>
            </el-col>
          </el-row>

          <h2 class="headIndexMod01">@talk</h2>
          <el-row class="row_class" :gutter="20">
            <el-col :xs="24" :sm="12" v-for="con in 4" :key="con">
              <div class="col_class" @click="openDiolog">
                <div class="col_class_title">iDeCo（イデコ）を知る</div>
                <div class="col_class_content">iDeCo（イデコ）の手数料・商品比較　どこがおすすめ？</div>
                <div class="col_class_date">UPDATE 2019.11.12</div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>

      <div class="contentsBlock02" style="background: white">
        <div class="bodyIndexBlock01">
          <h2 class="headIndexMod01">住宅ローンを知る・選ぶ</h2>
          <el-row class="row_class" :gutter="20">
            <el-col :xs="24" :sm="12" v-for="con in 4" :key="con">
              <div class="col_class row_green" @click="openDiolog">
                <div class="col_class_title">iDeCo（イデコ）を知る</div>
                <div class="col_class_content">iDeCo（イデコ）の手数料・商品比較　どこがおすすめ？</div>
                <div class="col_class_date">UPDATE 2019.11.12</div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>

	  <el-dialog
		title=""
		:visible.sync="dialogVisible"
		:fullscreen="true">
      <Dialog></Dialog>
	  </el-dialog>

  </div>
</template>
<script>
import Dialog from './dialog.vue'
import axios from 'axios'
export default {
  name: "Content",
  components: {
    Dialog
  },
  data() {
    return {
      dialogVisible: false,
      oneData: {
        title: '你要力图使哀怨对你毫无作用。自己能获取的，就不要哀求他人。',
        updateTime: '2020-02-20',
      },
      oneAll: [],
      inx: 0,
    }
  },
  mounted() {
    this.getOneData()
  },
  methods: {
	  openDiolog() {
		  this.dialogVisible = true;
    },
    async getOneData() {
      const { data } = await axios({
        method: 'get',
        url: '/api/admin/web/news/list',
      })
      this.oneAll = data.data;
      console.log(this.oneAll)
    },
    goPrev() {
      if (this.inx < 0) {
        this.inx = this.oneAll.length - 1
      }
      this.oneData = this.oneAll[this.inx];
      this.inx--;
    },
    goNext() {
      if (this.inx >= this.oneAll.length) {
        this.inx = 0
      }
      this.oneData = this.oneAll[this.inx];
      this.inx++;
    },
  }
}
</script>
<style scoped>
  .contentsBlock01 {
    background: #FFF url(../assets/images/bg_home_01.png) repeat 100% 0;
  }
  .headerBlock03 {
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 980px;
    z-index: 2;
  }
  .headerBlock03 .image01{
    padding-top: 220px;
    line-height: 0;
    text-align: center;
    width: 76%;
    margin: 0 auto;
  }
  .headerBlock03 .image01 img {
    width: 100%;
    height: auto;
  }
  .contentsBlock02 {
    padding: 0 calc(5% + 10px) 0 calc(5% + 10px);
    background-color: #e5f8f3;
  }
  .contentsBlock02 .bodyIndexBlock01 {
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 950px;
    padding: 1px 0 75px 0;
    z-index: 2;
  }
  .contentsBlock02 .bodyIndexBlock01 .newsBlock01 {
    margin-top: -31px;
    padding-bottom: 7px;
    height: 135px;
    overflow: hidden;
    background-color: white;
    display: flex;
    border-radius: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 8px #B8E8DC;
    -webkit-box-shadow: 0px 8px #B8E8DC;
    margin-bottom: 40px;
  }
  .contentsBlock02 .bodyIndexBlock01 .newsBlock01:hover {
    cursor: pointer;
  }
  .contentsBlock02 .bodyIndexBlock01 .newsBlock01:hover .news_mid{
    color: #25C49F;
  }
  .contentsBlock02 .bodyIndexBlock01 .newsBlock01 .news {
    display: -webkit-flex;
    display: flex;
    align-items: center;
    padding: 0 0 0 48px;
    background: url(../assets/images/icn_headindex_01.svg) no-repeat 30px 50%;
    background-size: 9px 13px;
    width: 188px;
    font-size: 15px;
    font-family: 'Rubik', sans-serif;
    font-weight: 700;
    letter-spacing: 0.05em;
  }
  .contentsBlock02 .bodyIndexBlock01 .newsBlock01 .news_content {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
  }
  .contentsBlock02 .bodyIndexBlock01 .newsBlock01 .news_content .news_title {
    color: #25C49F;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.05em;
    margin-bottom: 6px;
  }
  .contentsBlock02 .bodyIndexBlock01 .newsBlock01 .news_content .news_mid {
    font-size: 14px;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: 0.02em;
  }
  .contentsBlock02 .bodyIndexBlock01 .newsBlock01 .news_content .news_date {
    margin-top: 6px;
    color: #888;
    font-size: 13px;
    font-family: 'Rubik', sans-serif;
    letter-spacing: 0.05em;
  }
  .contentsBlock02 .bodyIndexBlock01 .newsBlock01 .swiperNav01 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75px;
    flex-direction: column;
  }
  .contentsBlock02 .bodyIndexBlock01 .newsBlock01 .swiperNav01::after {
    content: " ";
    position: absolute;
    top: 35px;
    right: 17px;
    display: block;
    width: 40px;
    height: 1px;
    background: #E8E8E8;
  }
  .contentsBlock02 .bodyIndexBlock01 .newsBlock01 .swiperNav01 .newsPrev01 {
    width: 25px;
    height: 25px;
    background-image: url(../assets/images/icn_slider_up_01.svg);
    background-size: 20px 20px;
    background-position: center center;
    background-repeat: no-repeat;
    text-indent: -9999px;
    overflow: hidden;
    z-index: 99999999;
    margin-bottom: 15px;
  }
  .contentsBlock02 .bodyIndexBlock01 .newsBlock01 .swiperNav01 .newsPrev01:hover,
  .contentsBlock02 .bodyIndexBlock01 .newsBlock01 .swiperNav01 .newsNext01:hover {
    opacity: 0.6;
  }
  .contentsBlock02 .bodyIndexBlock01 .newsBlock01 .swiperNav01 .newsNext01 {
    width: 25px;
    height: 25px;
    background-image: url(../assets/images/icn_slider_down_01.svg);
    background-size: 20px 20px;
    background-position: center center;
    background-repeat: no-repeat;
    text-indent: -9999px;
    overflow: hidden;
    z-index: 99999999;
  }
  .contentsBlock02 .bodyIndexBlock01 .headIndexMod01 {
    margin-top: 73px;
    margin-bottom: 27px;
    padding: 0 0 0 17px;
    background: url(../assets/images/icn_headindex_01.svg) no-repeat 0 0.35em;
    background-size: 9px 13px;
    font-size: 18px;
    font-family: 'Rubik', sans-serif;
    font-weight: 700;
    letter-spacing: 0.05em;
  }
  .row_class .col_class {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 160px;
    padding: 41px 40px 54px 40px;
    border-radius: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 8px #B8E8DC;
    -webkit-box-shadow: 0px 8px #B8E8DC;
    margin-bottom: 40px;
  }
  .row_class .col_class .col_class_title {
    padding: 0 0 0 13px;
    background: url(../assets/images/icn_headindex_01.svg) no-repeat 0 0.35em;
    background-size: 6px 8px;
    color: #25C49F;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.05em;
    margin-top: 20px;
  }
  .row_class .col_class .col_class_content {
    margin-top: 17px;
    color: #222;
    font-size: 15px;
    font-weight: 600;
    line-height: 1.47;
    letter-spacing: 0.08em;
  }
  .row_class .col_class .col_class_date {
    margin-top: 17px;
    color: #888;
    font-size: 13px;
    font-family: 'Rubik', sans-serif;
    letter-spacing: 0.05em;
  }
  .row_class .row_green {
    background: #E5F8F3 url(../assets/images/bg_indexlist_01.svg) no-repeat 100% 0;
  }
  .row_class .col_class:hover {
    box-shadow: 0px 8px #3AD6B2;
    -webkit-box-shadow: 0px 8px #3AD6B2;
    -moz-box-shadow: 0px 8px #3AD6B2;
    cursor: pointer;
  }
  .row_class .col_class::before {
    content: " ";
    position: absolute;
    bottom: 18px;
    right: 18px;
    display: block;
    border-radius: 100%;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    width: 40px;
    height: 40px;
    background: #3AD6B2;
    z-index: 1;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    -webkit-transform: scale(0);
    -o-transform: scale(0);
    transform: scale(0);
  }
  .row_class .col_class::after {
    content: "";
    position: absolute;
    bottom: 20px;
    right: 20px;
    display: block;
    width: 36px;
    height: 36px;
    background: url(../assets/images/icn_indexlist_01.svg) no-repeat;
    background-size: 36px 36px;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    z-index: 5;
  }
  .row_class .col_class:hover::after {
    background: url(../assets/images/icn_indexlist_01_on.svg) no-repeat;
    background-size: 36px 36px;
      z-index: 5;
  }
  .row_class .col_class:hover::before{
    -webkit-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
</style>
