<template>
  <div class="about">
    <h3>-关于这个站点</h3>
    <!-- <img src="https://shenyibo.oss-cn-beijing.aliyuncs.com/20200527/2356.jpg"/>
    <h3>-记录问题解决方案</h3> -->
    <p>
      &nbsp;&nbsp;18年毕业到20年初毕业一年半的时间一直在做前端开发，中间在空闲之余学习了node和python相关的知识，但一直没有去实践，20年初因为疫情在家办公一个多月，就开始慢慢的边找资料边写代码，
      做一个博客(ui参考简书&SegmentFault)记录相关知识和生活。
    </p>
    <h3>-技术栈</h3>
    <div class="skil">
      <h4 class="left">前端：</h4>
      <p class="info">
        <el-link type="primary" href="https://nuxtjs.org/">Nuxt</el-link>
      </p>
      <div class="demo-image__preview">
        <el-image 
          v-for="item in srcList"
          :key="item"
          style="width: 220px; height: 100%;padding: 0 5px"
          :src="item" 
          :preview-src-list="srcList">
        </el-image>
      </div>
    </div>

    <div class="skil">
      <h4 class="left">后台管理系统： <el-link type="primary" href="http://cms.shenyibo.life/" target="_blank">传送门</el-link> </h4>
      <p class="info">
        <el-link type="primary" href="https://cn.vuejs.org/">Vue</el-link>
        <el-link type="primary" href="https://element.eleme.cn/#/zh-CN">Element</el-link>
      </p>
      <div class="demo-image__preview">
        <el-image 
          v-for="item in srcList1"
          :key="item"
          style="width: 220px; height: 100%;padding: 0 5px"
          :src="item" 
          :preview-src-list="srcList1">
        </el-image>
      </div>
    </div>

    <div class="skil">
      <h4 class="left">服务端：</h4>
      <ol class="ol_cla">
        <li>基础：<el-link type="primary" href="https://eggjs.org/zh-cn/" target="_blank">Egg</el-link> </li>
        <li>数据模型：<el-link type="primary" href="https://typeorm.io/#/" target="_blank">typeorm</el-link> </li>
        <li>数据库：<el-link type="primary" href="https://www.mysql.com/" target="_blank">Mysql</el-link>  </li>
        <li>缓存：<el-link type="primary" href="https://redis.io/" target="_blank">Redis</el-link> </li>
        <li>网络：<el-link type="primary" href="https://www.npmjs.com/package/axios" target="_blank">Axios</el-link> </li>
        <li>文件管理：<el-link type="primary" href="https://www.npmjs.com/package/egg-oss" target="_blank">Egg-oss</el-link> </li>
        <li>鉴权：<el-link type="primary" href="https://www.npmjs.com/package/egg-jwt" target="_blank">Egg-jwt</el-link> </li>
        <li>验证码：<el-link type="primary" href="https://www.npmjs.com/package/svg-captcha" target="_blank">Svg-captcha</el-link> </li>
      </ol>
    </div>
    <h3>-关于我</h3>
    <p>
      &nbsp;&nbsp;江西九江，主要从事前端开发工作，是一位热衷代码，热爱生活的95后，喜欢Nba，Lol，Vue，Node，Flutter。
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
      article: {},
      srcList: [
        'https://shenyibo.oss-cn-beijing.aliyuncs.com/static/2356.jpg',
        'https://shenyibo.oss-cn-beijing.aliyuncs.com/static/45679.jpg',
        'https://shenyibo.oss-cn-beijing.aliyuncs.com/static/ffujm.jpg'
      ],
      srcList1: [
        'https://shenyibo.oss-cn-beijing.aliyuncs.com/static/home.jpg',
        'https://shenyibo.oss-cn-beijing.aliyuncs.com/static/fffa.jpg',
        'https://shenyibo.oss-cn-beijing.aliyuncs.com/static/log.jpg',
      ]
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
  .skil {
    margin-bottom: 10px;
    padding-left: 15px;
    .info {
      margin: 5px 0;
    }
    .demo-image__preview {
      min-height: 115px;
    }
    .ol_cla {
      padding-left: 10px;
      margin-top: 10px;
      font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    }
  }
}
</style>
