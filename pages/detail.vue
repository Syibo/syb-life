<template>
  <div class="detail">
    <div class="title">{{ article.title }}</div>
    <div class="dialog_img">
      <img :src="article.picture" />
    </div>
    <!-- <div class="dialog_div" v-html="article.content"></div> -->
    <client-only>
      <mavon-editor v-model="article.content" :subfield="false" defaultOpen="preview"
	 :toolbarsFlag="false" :boxShadow="false" :previewBackground="'#ffffff'" :codeStyle="'atom-one-dark'" />
    </client-only>
    
  </div>
</template>

<script>
import Article from '../components/article'
export default {
  name: 'Detail',
  components: {
    Article,
  },
  data() {
    return {
      article: {},
      markdownOption:{
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        ishljs: true,
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: false, // 全屏编辑
        readmodel: false, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        navigation: true, // 导航目录
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        subfield: false, // 单双栏模式
        preview: false, // 预览
      },
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

<style>
pre {
  padding: 0!important;
}
.v-show-content {
  padding: 0!important;
}
</style>

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
  .v-note-wrapper {
    border: none;
  }
  .v-note-wrapper .v-note-panel .v-note-show .v-show-content, .v-note-wrapper .v-note-panel .v-note-show .v-show-content-html {
    padding: 0;
  }
  /* .dialog_div >>> .ql-video video {
    width: 100%;
    height: 100%;
  } */
</style>