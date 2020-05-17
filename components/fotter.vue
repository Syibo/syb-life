<template>
<div class="contents">
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
			  <img src="../assets/images/syb_logo.png" width="152" height="84" />
		  </div>

		  <div class="link0_class">
			  <div>Fin/dについて 免責事項</div>
			  <div>© 2019 HIKARINA INC.</div>
		  </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Fotter",
}
</script>
<style scoped>
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
    .row_fotter {
    display: flex;
    flex-wrap: wrap;
    margin-top: 74px;
    padding: 0 30px;
    justify-content: center;
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
