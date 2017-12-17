<template>
    <div class="header">
      <span class="title">If anything can go wrong,it will~</span>
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link" style="color:white">
        Welcome,{{user.uname}}<i class="el-icon-menu" style="color:white"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>修改密码</el-dropdown-item>
        <el-dropdown-item command="logout">注销登录</el-dropdown-item>
       
      </el-dropdown-menu>
    </el-dropdown>
    </div>
  

</template>

<script>
  export default {
    data(){
      return{
        user:JSON.parse(localStorage.getItem('user'))||{}
      }
    },
    methods:{
      logout(){
        alert('退出成功')
        this.$http.get(this.$api.logout)
        .then(rsp=>{
          localStorage.removeItem('user');
          this.$router.push('/login')
        })
      },
      handleCommand(command){
        switch(command){
          case 'logout':
          this.logout();
          break;
        }
      }
    }
  }
</script>

<style scoped lang="less">
.header{
  height: 100%;
  width: 100%;
  .title{
   
    float: left;
    font-size: 20px;

  }
 
}
</style>