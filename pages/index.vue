<template>
  <div class="container">
    <div>
      <!-- <logo /> -->
<!--       <h1 class="title">
        nuxt-sbb
      </h1> -->
      <h2 class="subtitle">
        My wicked Nuxt.js project
      </h2>
      <div v-for="(item, index) in list" :key="index">
        {{ item.link }}
      </div>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import axios from 'axios'

export default {
  components: {
    Logo
  },
  data() {
    return {
      list: []
    }
  },
  async asyncData ({ params }) {
    const li = [
      {
        "link": 3333
      }
    ]
    const { data } = await axios({
      method: 'post',
      url: 'http://47.107.48.44:7001/admin/web/article/testPost',
      data: {
        name: '5',
      }
    })
    return { list: data.data }
  },
  async mounted() {
    const { data } = await axios({
      method: 'post',
      url: '/api/admin/web/article/testPost',
      data: {
        name: '5',
      }
    })
    console.log(data)
    // this.list = data.data;
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

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
