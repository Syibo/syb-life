<template>
  <div class="contact">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="您的称呼" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="留言" prop="message">
            <el-input v-model="ruleForm.message" type="textarea" maxlength="100" show-word-limit rows="4"></el-input>
        </el-form-item>
        <el-form-item label="联系方式" prop="contact">
            <el-input v-model="ruleForm.contact"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
    </el-form>
    <div class="timeline">
        <el-timeline>
            <el-timeline-item :timestamp="item.createTime" placement="top" v-for="item in msgList" :key="item.createTime">
                <el-card>
                    <h4>{{ item.name }}</h4>
                    <p>{{ item.content }}</p>
                </el-card>
            </el-timeline-item>
        </el-timeline>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Contact',
  data() {
      return {
        ruleForm: {
          name: '',
          message: '',
          contact: '',
        },
        rules: {
          name: [
            { required: true, message: '请输入您的称呼', trigger: 'blur' },
          ],
          message: [
            { required: true, message: '请输入内容', trigger: 'blur' },
          ],
        },
        msgList: [],
      };
    },
  async asyncData (content) {
    const [list] = await Promise.all([
      content.$axios({
        method: 'get',
        url: '/api/admin/web/contact/page',
      })
    ])
    return {
      msgList: list.data.data.list,
    }
  },
  async mounted() {
      
  },
  methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.contactMe()
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      async contactMe() {
        const res = await axios({
            method: 'post',
            data: {
                content: this.ruleForm.message,
                name: this.ruleForm.name,
                contact: this.ruleForm.contact,
            },
            url: '/api/admin/web/contact/add',
        })
        if (res.data.code === 1000) {
            this.$notify({
                title: '成功',
                message: '感谢您的留言',
                type: 'success'
            });
            this.ruleForm = {
                name: '',
                message: '',
                contact: '',
            }
        }
      }
  }
}
</script>

<style lang="less" scoped>
.contact{
    .timeline {
        margin-top: 120px;
    }
}

</style>