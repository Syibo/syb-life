<template>
  <div class="about">
    about
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