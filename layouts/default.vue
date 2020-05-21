<template>
  <div>
    <nuxt />
  </div>
</template>


<script>

export default {
  name: 'Layout',
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body {
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  text-align: left;
}
li {
  list-style-type: none;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.contents {
	margin-left: 380px;
}
@media screen and (max-width: 767px) {
	.contents {
		margin-left: 0;
	}
}
.el-dialog .el-dialog__header {
  position: fixed;
  right: 0;
}
.el-dialog__close {
  font-size: 60px;
}
</style>
