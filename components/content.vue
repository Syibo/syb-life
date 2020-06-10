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
          <div class="right_cont_item" @click="goCms">
            <div>cms</div>
            <span></span>
            <span class="iconfont iconhoutaizonglan"></span>
          </div>
          <div class="right_cont_item right_cont_about">
            <div>about me</div>
            <span></span>
            <span class="iconfont iconaboutus"></span>
          </div>
          <div class="right_cont_item right_cont_resume">
            <div>resume</div>
            <span></span>
            <span class="iconfont iconai-resume"></span>
          </div>
          <div class="right_cont_item right_cont_git" @click="goGit">
            <div>resume</div>
            <span></span>
            <span class="iconfont icongithub"></span>
          </div>
        </div>
        <div :class="isfix ? 'fixed' : ''">
          <div class="my_info">
            <el-avatar src="https://shenyibo.oss-cn-beijing.aliyuncs.com/20200610/fcbe0f70-aadd-11ea-b288-0da097a41994.jpg"></el-avatar>
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
    },
    goCms() {
      window.open('http://47.107.48.44:9000', '_blank');
    },
    goGit() {
      window.open('https://github.com/Syibo', '_blank');
    }
  }
}
</script>

<style lang="less" scoped>
@media screen and (max-width: 767px) {
  .main {
    width: 100%!important;
    padding-left: 0!important;
    padding-right: 0!important;
    .main_left {
      width: 100%!important;
    }
    .main_right {
      display: none;
    }
  }
}
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
      min-height: 100px;
      .right_cont {
        .right_cont_item {
          width: 260px;
          height: 46px;
          display: flex;
          color: white;
          padding: 0 15px;
          background-color: rgb(255, 184, 79);
          border-radius: 5px;
          align-items: center;
          justify-content: space-between;
          font-size: 20px;
          margin-bottom: 10px;
          span {
            font-size: 46px;
            color: #F9A214;
          }
        }
        .right_cont_item:hover {
          cursor: pointer;
        }
        .right_cont_about {
          background-color: rgb(193, 228, 222);
          span {
            font-size: 46px;
            color: rgb(112, 182, 170);
          }
        }
        .right_cont_resume {
          background-color: rgb(244, 224, 189);
          span {
            font-size: 40px;
            color: rgb(222, 180, 104);
          }
        }
        .right_cont_git {
          background-color: rgb(183, 214, 236);
          span {
            font-size: 40px;
            color: rgb(100, 171, 211);
          }
        }
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