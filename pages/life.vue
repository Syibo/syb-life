<template>
  <div class="life">
    <Article :content="item" v-for="(item, index) in diaryList" :key="index"></Article>
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
      diaryList: [],
      total: 0
    }
  },
  async asyncData (context) {
    const [list] = await Promise.all([
      context.$axios({
        method: 'get',
        params: {
          page: 1,
          size: 10
        },
        url: '/api/admin/web/diary/page',
      })
    ])
    return {
      diaryList: list.data.data.list,
      total: list.data.data.pagination.total
    }
  },
  async mounted() {

  }
}
</script>

<style lang="less" scoped>

</style>