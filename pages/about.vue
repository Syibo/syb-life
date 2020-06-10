<template>
  <div class="about">
    <h2>关于这个站点</h2>
    <img src="https://shenyibo.oss-cn-beijing.aliyuncs.com/1591781903%281%29.jpg"/>
    <h3>-单纯为了学习</h3>
    <p>
      &nbsp;&nbsp;18年毕业到20年初毕业一年半的时间一直在做前端开发，中间在空闲之余学习了node和python相关的知识，但一直没有去实践，20年初因为疫情在家办公一个多月，就开始慢慢的边找资料边写代码，
      开发中遇到问题，百度一搜一大堆雷同，谷歌娘一搜全是E文，硬着头皮看半天照着做还不一定能解决，做一个博客记录相关知识和生活。
    </p>
    <h3>-技术栈</h3>
    <p>
      前端: <el-link type="primary">Vue</el-link> <el-link type="primary">Nuxt</el-link>
    </p>
    <p>
      CMS: <el-link type="primary">Vue</el-link> <el-link type="primary">Element</el-link>
    </p>
    <p>
      服务端: <el-link type="primary">Node</el-link> <el-link type="primary">Egg</el-link> <el-link type="primary">Mysql</el-link> <el-link type="primary">Redis</el-link>
    </p>
    <h3>-关于我</h3>
    <p>
     刚进入互联网的小码农一枚，三大爱好LOL NBA CODE,偶尔在祖国的某处消失一下。
    </p>
  </div>
</template>

<script>
import Article from '../components/article'
export default {
  name: 'About',
  components: {
    Article
  },
  data() {
    return {
      article: {}
    }
  },
  async asyncData (content) {
    
  },
  async mounted() {

  }
}
</script>

<style lang="less" scoped>
.about {
  h2 {
    margin-bottom: 25px;
  }
  img {
    width: 100%;
  }
  h3 {
    margin: 15px 0;
  }
  p {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
}
</style>