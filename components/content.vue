<template>
  <div class="content">
    <div class="main">
      <div class="main_left">
        <section>
          <nuxt />
        </section>
      </div>
      <div class="main_right">
        <div class="right_cont">
          <img src="../assets/images/right1.png" />
          <img src="../assets/images/right1.png" />
          <img src="../assets/images/right1.png" />
          <img src="../assets/images/right1.png" />
        </div>
        <div :class="isfix ? 'fixed' : ''">
          <div class="my_info">
            <el-avatar src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
            <div class="my_name">
              <span class="name">yiboshen</span>
              <span class="desc">搞前端的</span>
            </div>
          </div>

          <div class="article">
            <div class="article_item" v-for="(item, index) in typeList" :key="index" @click="selectType(item)">
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="item.icon"></use>
              </svg>
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      isfix: false,
      typeList: [
        {
          name: 'Html',
          icon: '#iconHTML'
        },
        { name: 'Css', icon: '#iconcss' },
        { name: 'Javascript', icon: '#iconJavaScript' },
        { name: 'Vue', icon: '#iconvue' },
        { name: 'Element', icon: '#iconelema' },
        { name: 'Flutter', icon: '#iconflutter-fill' },
        { name: 'Nuxt', icon: '#iconnuxt' },
        { name: 'Mysql', icon: '#iconmysql' },
        { name: 'Egg', icon: '#iconEggs' },
        { name: 'node', icon: '#iconnodejs' },
        { name: 'linux', icon: '#iconlinux' },
        { name: 'python', icon: '#iconpython' },
      ]
    }
  },
  async mounted() {
    window.addEventListener("scroll",this.handleScroll);
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 217) {
      this.isfix = true;
    } else {
      this.isfix = false;
    }
  },
  methods: {
    handleScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 217) {
        this.isfix = true;
      } else {
        this.isfix = false;
      }
    },
    selectType(item) {
      this.$router.push({
        path: '/',
        query: {
          type: item.name
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  background-color: #f9f9f9;
  margin-top: 56px;
  .main {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: calc(100vh - 120px);
    padding-top: 10px;
    font-size: 16px;
    box-sizing: content-box;
    width: 1000px;
    padding-left: 16px;
    padding-right: 16px;
    margin-left: auto;
    margin-right: auto;
    .main_left {
      flex-shrink: 0;
      width: 730px;
      // margin-bottom: 24px;
      margin-right: 10px;
      min-height: 100px;
      section {
        background-color: #fff;
        border-radius: 4px;
        margin-bottom: 10px;
        padding: 24px;
      }
    }
    .main_right {
      flex-shrink: 0;
      width: 260px;
      // background-color: white;
      min-height: 100px;
      .right_cont {
        img {
          width: 260px;
        }
      }
      .fixed {
        position: fixed;
        top: 60px;
        width: 260px;
      }
      .my_info {
        margin-top: 6px;
        padding: 16px;
        background-color: white;
        display: flex;
        border-radius: 4px;
        align-items: center;
        .my_name {
          margin-left: 15px;
          display: flex;
          flex-direction: column;
          .name {
            color: #2d2d2d;
            font-weight: 500;
            font-size: 14px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .desc {
            color: #969696;
            font-size: 12px;
          }
        }
      }
      .article {
        background-color: white;
        padding: 5px 0;
        margin-top: 12px;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        .article_item {
          display: flex;
          align-items: center;
          height: 35px;
          padding: 0 15px 0 0;
          color: #757575;
          .icon {
            width: 16px;
            height: 16px;
            margin: 0 8px 0 16px;
          }
        }
        .article_item:hover {
          cursor: pointer;
          background-color: #f2f2f2;
        }
      }
    }
  }
}
</style>