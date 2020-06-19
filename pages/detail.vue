<template>
  <div class="detail">
    <div class="title">{{ article.title }}</div>
    <!-- {{ article }} -->
    <div class="dialog_img">
      <img :src="article.picture" />
    </div>
    <div class="dialog_div" v-html="article.content"></div>
  </div>
</template>

<script>
import Article from '../components/article'
export default {
  name: 'Detail',
  components: {
    Article
  },
  data() {
    return {
      article: {}
    }
  },
  async asyncData (content) {
    let id = (content.route.query.id == null ? 1 : content.route.query.id)
    let type = (content.route.query.ty == null ? 'article' : content.route.query.ty)
    const [list] = await Promise.all([
      content.$axios({
        method: 'get',
        params: {
          id,
        },
        url: `/api/admin/web/${type}/info`,
      })
    ])
    return {
      article: list.data.data
    }
  },
  async mounted() {

  }
}
</script>

<style scoped>
  .title {
    font-size: 30px;
    font-weight: 700;
    word-break: break-word;
    color: #404040;
    text-rendering: optimizelegibility;
    padding-bottom: 14px;
    margin-bottom: 15px;
  }
  .dialog_img img {
    width: 100%;
    max-height: 500px;
    object-fit: contain;
    margin: auto;
  }
  .dialog_div {
    width: 100%;
  } 
  .dialog_div >>> p {
    color: #606266;
    line-height: 1.8;
    font-size: 15px;
    margin-bottom: 8px;
  }
  .dialog_div >>> ol {
    background: #21252B;
    border-radius: 5px;
    box-shadow: 0 10px 30px 0 rgba(0,0,0,.4);
    margin-bottom: 1.6em;
    padding: 30px 0 10px 40px;
    color: #666;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    overflow: auto;
  }
  .dialog_div >>> ol::before {
    background: #fc625d;
    border-radius: 50%;
    box-shadow: 20px 0 #fdbc40, 40px 0 #35cd4b;
    content: ' ';
    height: 12px;
    margin-top: -20px;
    margin-left: -20px;
    position: absolute;
    width: 12px;
  }
  .dialog_div >>> ol li {
    list-style-type: decimal;
    background-color: black;
    padding-left: 6px;
    color: #ccc;
    font-size: 14px;
    font-family: Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;
  }
  .dialog_div >>> img {
    width: 100%;
    max-height: 500px;
    object-fit: contain;
    margin: auto;
  }
  .dialog_div >>> h2 {
    margin-bottom: 10px;
  }
  .dialog_div >>> .ql-video {
    width: 100%;
    height: 400px;
  }
  /* .dialog_div >>> .ql-video video {
    width: 100%;
    height: 100%;
  } */
</style>