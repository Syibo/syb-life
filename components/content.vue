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
            lll
          </div>

          <h2 class="headIndexMod01" @click="openDiolog">PICKUP</h2>
          <el-row class="row_class" :gutter="20">
            <el-col :xs="24" :sm="12"><div class="col_class" @click="openDiolog">fdgdfge</div></el-col>
            <el-col :xs="24" :sm="12"><div class="col_class">fff</div></el-col>
            <el-col :xs="24" :sm="12"><div class="col_class">fff</div></el-col>
            <el-col :xs="24" :sm="12"><div class="col_class">fff</div></el-col>
          </el-row>

          <h2 class="headIndexMod01">住宅ローンを知る・選ぶ</h2>
          <el-row class="row_class" :gutter="20">
            <el-col :xs="24" :sm="12"><div class="col_class">fff</div></el-col>
            <el-col :xs="24" :sm="12"><div class="col_class">fff</div></el-col>
            <el-col :xs="24" :sm="12"><div class="col_class">fff</div></el-col>
            <el-col :xs="24" :sm="12"><div class="col_class">fff</div></el-col>
          </el-row>
        </div>
      </div>

      <div class="contentsBlock02" style="background: white">
        <div class="bodyIndexBlock01">
          <h2 class="headIndexMod01">住宅ローンを知る・選ぶ</h2>
          <el-row class="row_class" :gutter="20">
            <el-col :xs="24" :sm="12"><div class="col_class row_green">fff</div></el-col>
            <el-col :xs="24" :sm="12"><div class="col_class row_green">fff</div></el-col>
            <el-col :xs="24" :sm="12"><div class="col_class row_green">fff</div></el-col>
            <el-col :xs="24" :sm="12"><div class="col_class row_green">fff</div></el-col>
          </el-row>
        </div>
      </div>

      <div class="contentsBlock02">
        <div class="bodyIndexBlock01">
          <div class="row_fotter">
            <div class="row_fotter_item">HTML</div>
            <div class="row_fotter_item">CSS</div>
            <div class="row_fotter_item">VUE</div>
            <div class="row_fotter_item">JAVASCRIPT</div>
            <div class="row_fotter_item">NODE</div>
            <div class="row_fotter_item">EGG</div>
            <div class="row_fotter_item">KOA</div>
            <div class="row_fotter_item">MYSQL</div>
            <div class="row_fotter_item">REDIS</div>
            <div class="row_fotter_item">MACBOOK</div>
            <div class="row_fotter_item">ELEMENT</div>
            <div class="row_fotter_item">COOL</div>
            <div class="row_fotter_item">LINUX</div>
            <div class="row_fotter_item">EGG</div>
            <div class="row_fotter_item">KOA</div>
            <div class="row_fotter_item">MYSQL</div>
            <div class="row_fotter_item">REDIS</div>
            <div class="row_fotter_item">MACBOOK</div>
            <div class="row_fotter_item">ELEMENT</div>
            <div class="row_fotter_item">COOL</div>
            <div class="row_fotter_item">LINUX</div>
          </div>

          <div class="followusMod01">
              <dl>
                  <dt>FOLLOW US</dt>
                  <dd>
                      <span></span>
                      <span class="tiwwer"></span>
                  </dd>
              </dl>
          </div>

		  <div class="logo_class">
			  <img src="../assets/images/logo_01.svg" />
		  </div>

		  <div class="link0_class">
			  <div>Fin/dについて 免責事項</div>
			  <div>© 2019 HIKARINA INC.</div>
		  </div>
        </div>
      </div>


	  <el-dialog
		title=""
		:visible.sync="dialogVisible"
		:fullscreen="true">
		<div style="height: 1500px">ddd</div>
	  </el-dialog>

      
  </div>
</template>
<script>
export default {
  name: "Content",
  data() {
    return {
		dialogVisible: false
    }
  },
  methods: {
	  openDiolog() {
		  console.log(333333);
		  this.dialogVisible = true;
	  }
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
  .contentsBlock02 .bodyIndexBlock01 .newsBlock01{
    margin-top: -31px;
    padding-bottom: 7px;
    height: 135px;
    overflow: hidden;
    background-color: white;
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
    display: block;
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
  .row_fotter {
    display: flex;
    flex-wrap: wrap;
    margin-top: 74px;
    padding: 0 30px;
  }
  .row_fotter .row_fotter_item {
    padding: 0 20px;
    border-radius: 17.5px;
    -webkit-border-radius: 17.5px;
    -moz-border-radius: 17.5px;
    height: 35px;
    background: #B4F1E2;
    color: #222;
    font-size: 13px;
    font-weight: 600;
    line-height: 35px;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    margin: 10px 0 0 8px;
  }
  .row_fotter .row_fotter_item:hover {
    opacity: .7;
    cursor: pointer;
  }
  .followusMod01 {
    margin-top: 37px;
}
.followusMod01 dt {
    color: #222;
    font-size: 13px;
    font-family: 'Rubik', sans-serif;
    font-weight: 700;
    text-align: center;
    text-indent: 0.05em;
    letter-spacing: 0.05em;
}
.followusMod01 dd {
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 20px;
}
.followusMod01 dd span {
    width: 45px;
    height: 45px;
    background: url(../assets/images//btn_sns_fb_02.svg) no-repeat;
    background-size: 45px 45px;
}
.followusMod01 dd .tiwwer {
    margin-left: 15px;
    width: 45px;
    height: 45px;
    background: url(../assets/images//btn_sns_tw_02.svg) no-repeat;
    background-size: 45px 45px;
}
.logo_class {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 37px;
}
.link0_class {
	margin-top: 37px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
</style>
