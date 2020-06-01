<template>
<div class="dialog">
  <div class="dialog_date">
	  {{ content.createTime }}
  </div>
  <div class="dialog_title">
	  {{ content.title }}
  </div>
  <div class="dialog_place">
	  {{ content.place }}
  </div>
  <div class="dialog_itemImg" v-if="showp && content.picture">
	  <img :src="content.picture" />
  </div>
  <div class="dialog_div" v-html="content.content"></div>
  <!-- <p class="dialog_content">
	  奈良県吉野郡東吉野村。<br>
限界集落のこの山村で、私設図書館を開いた夫婦・青木真兵さんと海青子さん。<br>
ふだんは東吉野村でしか味わえない「ルチャ・リブロ」を、<br>
2日間限定、出張バージョンでお楽しみいただきます。<br>
  </p>
  <p class="dialog_content">
	  「ルチャ・リブロ」の厳選図書の閲覧はもちろん、<br>
手作りの機関誌『ルッチャ』、<br>
青木夫妻の初めての著書『彼岸の図書館――ぼくたちの「移住」のかたち』（夕書房）など、<br>
関連書籍やグッズの販売も。<br>
  </p> -->
</div>
</template>

<script>
export default {
  name: "Dialog",
  props: {
      content: {
          type: Object,
          default: {},
	  },
	  showp: {
		  type: Boolean,
		  default: true
	  }
  },
  data() {
    return {

    }
  },
}
</script>
<style scoped>
.dialog {
    width: 60%;
    max-width: 1000px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
	  align-items: center;
    flex-direction: column;
	  padding-top: 70px;
}
@media screen and (max-width: 767px) {
	.dialog {
      width: 100%;
      margin-left: 0;
      margin-right: 0;
      display: flex;
      align-items: center;
      flex-direction: column;
      padding-top: 70px;
  }
}
.dialog .dialog_date {
	  font-size: 15px;
    color: #999;
    line-height: 1.6;
    letter-spacing: 2px;
    margin-bottom: 16px;
}
.dialog .dialog_title {
	  font-size: 26px;
    line-height: 1.8;
    color: #102618;
    font-weight: 600;
    font-style: normal;
    letter-spacing: 2px;
}
.dialog .dialog_place {
    font-size: 16px;
    margin-top: 12px;
	  line-height: 1.8;
    color: #102618;
}
.dialog_itemImg {
	margin-top: 56px;
	margin-bottom: 60px;
}
.dialog_itemImg img {
  max-width: 1000px;
  width: 100%;
}
.dialog_div {
  width: 100%;
}
.dialog_div >>> p {
  text-indent: 2em;
  line-height: 2.4;
  font-size: 15px;
}
.dialog_div >>> .ql-syntax {
  background: #21252b;
  border-radius: 5px;
  box-shadow: 0 10px 30px 0 rgba(0,0,0,.4);
  margin-bottom: 1.6em;
  padding: 30px 0 10px 15px;
  color: white;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  overflow: hidden;
}
.dialog_div >>> .ql-syntax::before {
  background: #fc625d;
  border-radius: 50%;
  box-shadow: 20px 0 #fdbc40, 40px 0 #35cd4b;
  content: ' ';
  height: 12px;
  margin-top: -20px;
  position: absolute;
  width: 12px;
}
</style>
