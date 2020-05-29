<template>
<div class="contents">
<div class="contentsBlock02">
        <div class="bodyIndexBlock01">
          <div class="row_fotter">
            <div class="row_fotter_item" @click="goCode(item.artName)" v-for="(item) in list" :key="item.artName"> {{ item.artName }} </div>
          </div>

          <div class="followusMod01">
              <dl>
                  <dt>FOLLOW US</dt>
                  <dd>
                      <!-- <span></span>
                      <span class="tiwwer"></span> -->
                      <el-popover
                        placement="top"
                        trigger="hover">
                        <div>
                          <img src="http://shenyibo.oss-cn-beijing.aliyuncs.com/a4b85644d30139aae26160a39059691.jpg" width="200" height="265">
                        </div>
                        <el-button style="background: #29C4A0; color: white" slot="reference" icon="el-icon-mobile" circle></el-button>
                      </el-popover>
                  </dd>
              </dl>
          </div>

		  <div class="logo_class" @click="goHome">
			  <img src="../assets/images/syb_logo.png" width="152" height="84" />
		  </div>

		  <div class="link0_class">
			  <div>syb/life</div>
			  <div>©2020</div>
		  </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapMutations } from "vuex";
export default {
  name: "Fotter",
  props: ['list'],
  async mounted() {
    
  },
  methods: {
    ...mapMutations({
      'SET_TYPE': 'article/SET_TYPE'
    }),
    goCode(type) {
      this.SET_TYPE(type)
      if (this.$route.name === 'code') {
        this.$emit('type', type)
      } else {
        this.$router.push({ 
          name: 'code',
          query: {
              type
          }
        })
      }
    },
    goHome() {
      this.$router.push({
        name: 'index'
      })
    }
  }
}
</script>
<style scoped>
  .contentsBlock02 {
    padding: 0 calc(5% + 10px) 0 calc(5% + 10px);
    background-color: #e5f8f3;
  }
  .contentsBlock02 .bodyIndexBlock01 {
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 950px;
    padding: 1px 0 75px 0;
    z-index: 1;
  }
    .row_fotter {
    display: flex;
    flex-wrap: wrap;
    margin-top: 74px;
    padding: 0 30px;
    justify-content: center;
  }
  .row_fotter .row_fotter_item {
    padding: 0 20px;
    border-radius: 17.5px;
    -webkit-border-radius: 17.5px;
    -moz-border-radius: 17.5px;
    height: 35px;
    background: #B4F1E2;
    color: #222;
    font-size: 13px;
    font-weight: 600;
    line-height: 35px;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    margin: 10px 0 0 8px;
  }
  .row_fotter .row_fotter_item:hover {
    opacity: .7;
    cursor: pointer;
  }
  .followusMod01 {
    margin-top: 37px;
}
.followusMod01 dt {
    color: #222;
    font-size: 13px;
    font-family: 'Rubik', sans-serif;
    font-weight: 700;
    text-align: center;
    text-indent: 0.05em;
    letter-spacing: 0.05em;
}
.followusMod01 dd {
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 20px;
}
.logo_class {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 37px;
}
.logo_class:hover {
  cursor: pointer;
}
.link0_class {
	margin-top: 37px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
</style>
