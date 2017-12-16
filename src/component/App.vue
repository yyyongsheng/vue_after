<template>
    <div>
        测试
    </div>
</template>

<script>
    export default {
  // 测试axios与api是否成功注入到vue原型中
        created(){
            this.$http.get(this.$api.islogin)
            .then(rsp=>alert(rsp.data.code))
        }
        
    }
</script>

<style scoped>

</style>
