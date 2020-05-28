<template>
<div class="food">
    <el-card :body-style="{ padding: '0px' }" shadow="hover">
        <img src="http://i1.chuimg.com/b356484c76094144a3755e0df6157025_1080w_864h.jpg@2o_50sh_1pr_1l_660w_90q_1wh" class="image">
        <div style="padding: 14px;">
        <span>好吃的汉堡</span>
        <div class="bottom clearfix">
            <time class="time">2020-03-23</time>
        </div>
        </div>
    </el-card>
</div>

</template>

<script>
export default {
  name: "FoodCompenents",
  props: {
      
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>
<style scoped>
.food {
    margin-bottom: 20px;
}
.food img {
    width: 100%;
}
.food:hover {
    cursor: pointer;
}
</style>
