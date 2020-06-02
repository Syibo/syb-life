<template>
<div class="food">
    <el-card :body-style="{ padding: '0px' }" shadow="hover">
        <img :src="content.picture" class="image">
        <div style="padding: 14px;">
        <span>{{ content.title }}</span>
        <div class="bottom clearfix">
            <time class="time">{{ content.updateTime }}</time>
        </div>
        </div>
    </el-card>
</div>

</template>

<script>
export default {
  name: "FoodCompenents",
  props: {
      content: {
          type: Object,
          default: {},
	  },
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
