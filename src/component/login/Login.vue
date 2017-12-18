<template>
  <div class="login" >
    <img src="../../img/2.gif" alt="" id="jiji">
    <div class="login_content">
      <section class="login_content_logo">
        <img src="../../img/logo.png" alt="">  
      </section>
      <!-- 表单 -->
      <section class="login_content_form">
         <el-form :model="user" status-icon :rules="formRules" ref="ruleForm2" label-width="60px" class="demo-ruleForm"
          label-position="top">

          <el-form-item label="用户名" prop="uname"  >
            <el-input type="text"   v-model="user.uname"  @keyup.enter.native="a($event)"  auto-complete="off"></el-input>
          </el-form-item>
        
          <el-form-item label="密码" prop="upwd">
        
            <el-input type="password"  @keyup.enter.native="a($event)"  v-model="user.upwd" auto-complete="off"></el-input>
          </el-form-item>
         
          <el-form-item>
            <el-button type="primary"   @click="submitForm('ruleForm2')">提交</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
          </el-form-item>

        </el-form>



      </section>




    </div>
  </div>
  
</template>

<script>
  export default {
    data(){
      return{
        user:{
          uname:'',
          upwd:''
        },
        formRules:{
          uname:[
            {required:true,message:'请输入用户名',trigger:'blur'},
            {pattern:/\w{5,18}/,message:"长度5到18个字符,且只能为&_或字母和数字",trigger:'blur'}
          ],
          upwd:[
            {required: true, message: '请输入密码', trigger: 'blur' },
            {pattern: /.{6,18}/, message: '长度在 6 到 18 个字符', trigger: 'blur'}
          ]
        },
        

      }
    },
    methods:{

          a:function (e) { 
              if(e.keyCode==13){
                this.login();
              }
           },




          // 登录
          login(){
             // 登陆成功后
              // 1 判断status是否为0, 不为0给出错误提示
               // 2 如果为0, 说明登陆成功, 本地localStorage存储后端返回的用户信息
                // 3 跳转到后台管理首页
                this.$http.post(this.$api.login,this.user)
                .then(rsp=>{
                  let{status,message}=rsp.data;//解构两个属性值
                  if(status==0){
                   
                    localStorage.setItem('user',JSON.stringify(message));
                    this.$router.push('/');

                  }else{
                    alert("用户名或密码有误,请重新输入")
                  }

                })
          },




           // 点击提交按钮, 调用登陆接口
          submitForm(formName){
                // 先校验表单, 再提交
            this.$refs[formName].validate((result)=>{
                  if(result){
                   this.login();
                  }else{
                    alert("请输入正确的数据")
                  }
            })
          },
            // vue中提供了一个$refs对象, 用来快速的获取dom元素, 
            // 在一些特殊情况下我们需要拿到原生dom进行操作

            resetForm(formName){
              this.$refs[formName].resetFields();
            }
          





        }
  }
</script>

<style scoped lang="less">

#jiji{
  position: absolute;
  left: 43%;
  top: 17%
}
  .login{
   position: relative;
    overflow: hidden;
    height: 100%;
    background: orangered;
   // &符号就是上级选择器的引用
    // 这里使盒子处于页面中间位置
    &_content{
      
      width: 400px;
      margin: 60px auto;
      padding: 10px;
     
      &_logo{
        text-align: center;
      }
      &_form{
         
        padding:5px 10px;
        border-radius: 5px;
        
      }
    }
   
    
    
  }





</style>