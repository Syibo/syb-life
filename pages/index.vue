<template>
  <div class="container">
    <Menu :list="list"></Menu>
    <Content :content="content"></Content>
    <Fotter :list="list"></Fotter>
  </div>
</template>

<script>
import Content from '~/components/content.vue'
import Fotter from '../components/fotter.vue'
import Menu from '../components/menu.vue'
import axios from 'axios'

export default {
  components: {
    Content,
    Menu,
    Fotter
  },
  data() {
    return {
      list: [],
      content: {}
    }
  },
  async asyncData (context) {
    // const { data } = await context.$axios({
    //   method: 'get',
    //   url: '/api/admin/web/artType/list',
    // })
    // return { list: data.data }
    const [data, list] = await Promise.all([
      context.$axios.get('/api/admin/web/artType/list'),
      context.$axios.get('/api/admin/web/article/home'),
    ])
    return {
      list: data.data.data,
      content: list.data.data,
    }
  },
  async mounted() {
    const { data } = await axios({
      method: 'get',
      url: '/api/admin/web/artType/list',
    })
    this.list = data.data;
  }
}
</script>

<style scoped>

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
