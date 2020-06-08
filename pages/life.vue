<template>
  <div class="life">
    life
  </div>
</template>

<script>
import Article from '../components/article'
export default {
  name: 'Life',
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