<template>
  <div class="about">
    <h3>关于这个站点</h3>
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

</style>