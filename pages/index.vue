<template>
  <div class="container">
    <Content></Content>
    <div>{{ list }}</div>
  </div>
</template>

<script>
import Menu from '~/components/menu.vue'
import Content from '~/components/content.vue'
import axios from 'axios'

export default {
  components: {
    Menu,
    Content
  },
  data() {
    return {
      list: []
    }
  },
  async asyncData ({$axios}) {
    const { data } = await $axios({
      method: 'get',
      url: '/api/admin/web/article/artNum',
    })
    return { list: data.data }
  },
  async mounted() {
    const { data } = await axios({
      method: 'get',
      url: '/api/admin/web/article/artNum',
    })
    console.log(data)
    this.list = data.data;
  }
}
</script>

<style>

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
