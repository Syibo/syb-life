<template>
  <div class="about">
    <h2>-关于这个站点</h2>
    <img src="https://shenyibo.oss-cn-beijing.aliyuncs.com/1591781903%281%29.jpg"/>
    <h3>-记录问题和解决方案</h3>
    <p>
      &nbsp;&nbsp;18年毕业到20年初毕业一年半的时间一直在做前端开发，中间在空闲之余学习了node和python相关的知识，但一直没有去实践，20年初因为疫情在家办公一个多月，就开始慢慢的边找资料边写代码，
      开发中遇到问题，百度一搜一大堆雷同，硬着头皮看半天照着做还不一定能解决，做一个博客记录相关知识和生活。
    </p>
    <h3>-技术栈</h3>
    <p>
      <span class="left">前端：</span>
      <el-link type="primary" href="https://cn.vuejs.org/" target="_blank"> Vue </el-link> 
      <el-link type="primary" href="https://nuxtjs.org/">Nuxt</el-link>
    </p>
    <p>
      <span class="left">后台管理系统：</span>
      <el-link type="primary" href="https://cn.vuejs.org/" target="_blank">Vue</el-link> 
      <el-link type="primary" href="https://element.eleme.cn/#/zh-CN" target="_blank">Element</el-link>
    </p>
    <p>
      <span class="left">服务端：</span>
      <el-link type="primary" href="http://nodejs.cn/" target="_blank">Node</el-link> 
      <el-link type="primary" href="https://eggjs.org/zh-cn/" target="_blank">Egg</el-link> 
      <el-link type="primary" href="https://www.mysql.com/" target="_blank">Mysql</el-link> 
      <el-link type="primary" href="https://redis.io/" target="_blank">Redis</el-link>
    </p>
    <h3>-关于我</h3>
    <p>
     刚进入互联网的小码农一枚，人生三大爱好LOL NBA CODE。
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
    .left {
      display: inline-block;
      width: 120px;
      text-align: right;
      margin-right: 10px;
    }
    a {
      margin-right: 6px;
    }
  }
}
</style>