<template>
    <div class="box">
     <div class="logins">
        <el-input v-model="input" placeholder="请输入手机号码" class="sin"></el-input>    
        <el-input v-model="input1" placeholder="请输入密码" class="sin"></el-input>
        <el-button type="primary" class="btn">登录</el-button>
 <!-- <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  
  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
  </el-form-item>
</el-form> -->
     </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                input:"",
                input1:""
            }
        },
      
    //         data() {
    //         var validatePass = (rule, value, callback) => {
    //     if (value === '') {
    //       callback(new Error('请输入密码'));
    //     } else {
    //       if (this.ruleForm.checkPass !== '') {
    //         this.$refs.ruleForm.validateField('checkPass');
    //       }
    //       callback();
    //     }
    //   };
    //         return {
    //         input: '',
    //          rules: {
    //       pass: [
    //         { validator: validatePass, trigger: 'blur' }
    //       ],
         
    //     }
            
    //         }
    //     }
    }
</script>

<style lang="less" scoped>
.box{
    width:100%;
    height:100%;
    background-image: url("../assets/imgs/bg.jpg");
}
.box .logins{
    // display: flex;
    // justify-content: center;
    // align-items: center;
    width:300px;
    height: 200px;
    background-color: #fff;
    margin:auto;
    position: absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
}
.sin{
    margin-top: 10px;
}
.btn{
    margin: 10px auto;
    margin-left: 115px;
}

</style>