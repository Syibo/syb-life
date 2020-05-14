<template>
<div>
  <div class="trigger01" @click="openMenu">
	<a href="#" :class="menuGive ? 'active' : ''">
		<span :style="{background: menuGive ? 'white' : '#29C4A0'}"></span>
		<span :style="{background: menuGive ? 'white' : '#29C4A0'}"></span>
	</a>
  </div>
  <div class="menuG">
      <div class="vessel">
          <div class="inner">
              <div class="bg01">
                  <span class="line01"></span>
                  <span class="line02"></span>
                  <span class="line03"></span>
                  <div class="vessel_logo">
                      <div class="logo01">
                          <img src="../assets/images/logo_01_w.svg">
                      </div>
                      <p class="tagline01">
                          <span>お金のこと、</span>
                          <br>
                          <span>はじめての人が始めやすく</span>
                      </p>
                  </div>
              </div>

              <div class="bg02">
                  <ul class="categoryList01">
                      <li> <span>投資・投信積立を始める</span> </li>
                      <li> <span>投資信託の選び方・セレクション</span> </li>
                      <li> <span>iDeCo（イデコ）を知る</span> </li>
                      <li> <span>NISA/つみたてNISAを知る</span> </li>
                      <li> <span>ネット証券の比較</span> </li>
                      <li> <span>ネット証券のサービス</span> </li>
                      <li> <span>ネット証券の始め方・使い方</span> </li>
                      <li> <span>ロボアド・スマホ証券</span> </li>
                  </ul>

                  <div class="tagListMod01">
                      <div class="vessel">
                          <ul>
                              <li>株式投資</li>
                              <li>ロボアド</li>
                              <li>口コミ</li>
                              <li>楽天証券</li>
                              <li>住信SBIネット銀行</li>
                              <li>外貨預金</li>
                              <li>iDeCo（イデコ）</li>
                              <li>知る/始める</li>
                              <li>株式投資</li>
                              <li>ロボアド</li>
                              <li>口コミ</li>
                              <li>楽天証券</li>
                              <li>住信SBIネット銀行</li>
                              <li>外貨預金</li>
                              <li>iDeCo（イデコ）</li>
                              <li>知る/始める</li>
                          </ul>
                      </div>
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
              </div>
          </div>
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
		menuGive: false
    }
  },
  methods: {
	  openMenu() {
		  if (this.menuGive) {
			  document.getElementsByClassName('menuG')[0].style.left = '-380px';
		  	  this.menuGive = false;
		  } else {
			  document.getElementsByClassName('menuG')[0].style.left = 0;
		  	  this.menuGive = true;
		  }
	  },
	  closeMenu() {
		  
	  }
  }
}
</script>
<style>
.menuG {
    position: fixed;
    top: 0;
    left: 0;
    width: 380px;
    height: 100%;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    background: #3AD6B2;
}
.trigger01 {
	width: 55px;
	height: 55px;
	cursor: pointer;
	position: fixed;
	top: 10px;
	left: 20px;
	z-index: 10;
}
.trigger01 a {
    position: relative;
    display: inline-block;

    width: 17px;
    height: 11px;
    color: #3E3E3E;
    text-decoration: none;
    word-wrap: break-word;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    cursor: pointer;
}
.trigger01 a span {
	display: inline-block;
	background: red;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    width: 100%;
    height: 3px;
    background: #FFF;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
}
.trigger01 a span:nth-of-type(1) {
    position: absolute;
    top: 0;
    left: 0;
}
.trigger01 a span:nth-of-type(2) {
    position: absolute;
    bottom: 0;
    left: 0;
}
.trigger01 a.active span:nth-of-type(1) {
    top: 0;
    -webkit-transform: translateY(4px) rotate(-45deg);
    transform: translateY(4px) rotate(-45deg);
}
.trigger01 a.active span:nth-of-type(2) {
    bottom: 0;
    -webkit-transform: translateY(-4px) rotate(45deg);
    transform: translateY(-4px) rotate(45deg);
}
@media screen and (max-width: 767px) {
	.menuG {
		left: -380px;
	}
    .trigger {
        visibility: visible;
    }
	.menuG .close {
		visibility: visible;
	}
}
.vessel {
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
}
.menuG > .vessel::-webkit-scrollbar {
	width: 2px;
}
.menuG > .vessel::-webkit-scrollbar-track {
	background: transparent;
}
.menuG > .vessel::-webkit-scrollbar-thumb {
	background: #25C49F;
}
.bg01 {
    background: #29C4A0;
    height: 280px;
    padding: 40px 35px;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    position: relative;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    justify-content: left;
}
.line01::before {
    content: "";
    position: absolute;
    bottom: 130px;
    right: 85px;
    width: 3px;
    height: 35px;
    background: #8EE0CD;
    transform: skewX(-31deg);
}
.line02::before {
    content: "";
    position: absolute;
    width: 3px;
    height: 35px;
    background: #AEEEDF;
    left: 100px;
    bottom: -18px;
    transform: skewX(-31deg);
}
.line03::before {
    content: "";
    position: absolute;
    width: 3px;
    height: 35px;
    background: #FFF;
    right: 50px;
    bottom: 50px;
    transform: skewX(-31deg);
}
.vessel_logo {
    padding-bottom: 5px;
}
.logo01{
    padding-left: 7px;
    line-height: 0;
}
.logo01 img {
    width: 121px;
    height: 53px;
}
.tagline01 {
    margin: 11px 0 0 7px;
    color: #1C987B;
    font-size: 12px;
    font-weight: 600;
    line-height: 1.9;
    letter-spacing: 0.02em;
    text-align: left;
}
.tagline01 span{
    background: #fff;
    padding: 2px 3px;
    border-radius: 2px;
}

.bg02 {
    background: #3AD6B2;
    padding: 47px 36px 100px 50px;
}
.categoryList01 {
    padding-left: 0;
}
.categoryList01 li {
    position: relative;
    font-size: 14px;
    font-weight: 600;
    position: relative;
    color: #fff;
    z-index: 2;
}
.categoryList01 li:not(:first-child) {
    margin-top: 26px;
}
.categoryList01 li:hover {
    cursor: pointer;
}

.categoryList01 li span {
    display: inline-block;
    padding: 0 0 0 15px;
    background: url(../assets/images/icn_link_w_01.svg) no-repeat 0 0.4em;
    background-size: 7px 9px;
}
.categoryList01 li::before {
    content: " ";
    position: absolute;
    top: -10px;
    left: -16px;
    display: block;
    border-radius: 100%;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    width: 40px;
    height: 40px;
    background: rgba(241, 252, 252, 0.7);
    z-index: 1;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    -webkit-transform: scale(0);
    -o-transform: scale(0);
    transform: scale(0);
}
.tagListMod01 {
    margin-top: 99px;
}
.tagListMod01 > .vessel {
    margin: -10px 0 0 -8px;
}
.tagListMod01 > .vessel ul {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
}
.tagListMod01 > .vessel ul li {
    color: #fff;
    display: block;
    padding: 0 15px;
    border-radius: 15px;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    height: 30px;
    background: #29C4A0;
    font-size: 12px;
    line-height: 30px;
    margin: 10px 0 0 8px;
}
.tagListMod01 > .vessel ul li:hover {
    opacity: 0.7;
    cursor: pointer;
}
.followusMod01 {
    margin-top: 97px;
}
.followusMod01 dt {
    color: #FFF;
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
</style>
