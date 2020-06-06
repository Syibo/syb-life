<template>
  <div>
    <Article v-for="(item, index) in 12" :key="index"></Article>
  </div>
</template>

<script>
import Article from '../components/article'
export default {
  name: 'Home',
  components: {
    Article
  },
  data() {
    return {
      
    }
  },
  async mounted() {

  }
}
</script>

<style lang="less" scoped>

</style>
