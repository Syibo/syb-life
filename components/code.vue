<template>
<div class="code" @click="opUrl(content.link)">
    <div class="code_title">{{ content.title }}</div>
    <div class="code_date"> {{ content.updateTime }}</div>
</div>
</template>

<script>
export default {
  name: "CodeCompenents",
  props: {
      content: {
          type: Object,
          default: {},
      },
      isart: {
          type: Boolean,
          default: true,
      },
  },
  data() {
    return {

    }
  },
  methods: {
    opUrl(link) {
      if(this.isart) {
        window.open(link, '_blank');
      }
    }
  }
}
</script>
<style scoped>
.code {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 29px 70px 24px 78px;
    border-radius: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 7px #B8E8DC;
    -webkit-box-shadow: 0px 7px #B8E8DC;
    -moz-box-shadow: 0px 7px #B8E8DC;
    padding-left: 30px;
    margin-bottom: 30px;
  }
  .code::before {
    content: " ";
    position: absolute;
    top: calc( 50% - 20px );
    right: 20px;
    display: block;
    border-radius: 100%;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    width: 40px;
    height: 40px;
    background: #E5F8F3;
    z-index: 1;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    -webkit-transform: scale(0);
    -o-transform: scale(0);
    transform: scale(0);
  }
  .code::after {
    content: " ";
    position: absolute;
    top: 50%;
    right: 25px;
    display: block;
    margin-top: -15px;
    width: 30px;
    height: 30px;
    background: url(../assets/images/icn_indexlist_01.svg) no-repeat;
    background-size: 30px 30px;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    z-index: 5;
  }
  .code:hover {
    box-shadow: 0px 8px #3AD6B2;
    -webkit-box-shadow: 0px 8px #3AD6B2;
    -moz-box-shadow: 0px 8px #3AD6B2;
    cursor: pointer;
  }
  .code:hover::before{
    -webkit-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
  .code_title {
    color: #222;
    font-size: 15px;
    font-weight: 600;
    line-height: 1.8;
    letter-spacing: 0.08em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .code_date {
    margin-top: 4px;
    color: #888;
    font-size: 13px;
    letter-spacing: 0.03em;
  }
</style>
