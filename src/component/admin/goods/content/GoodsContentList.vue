<template>
  <div>
    <!-- 导航 -->
    <div class="nav">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>商品管理</el-breadcrumb-item>
        <el-breadcrumb-item>内容管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 按钮&搜索框 -->
    <div class="list_util">
        <div class="list_util_btns">
          <el-button size="small" type="primary" icon="el-icon-circle-plus">新增</el-button >
          <el-button size="small" type="success" icon="el-icon-success">全选</el-button >
          <el-button size="small" type="info" icon="el-icon-delete" @click="del">删除</el-button>
        </div>
        <div class="list_util_search">
          <el-input size="small" placeholder="请输入内容" @blur="getTableList" v-model="query.searchvalue" prefix-icon="el-icon-search" >
          </el-input>
        </div>
    </div>
    <!-- 表格 -->
    <div class="table">
      <!-- 表格: data属性为列表数据, 传入后会根据这个数据自动渲染 -->
      <el-table height="400" ref="multipleTable" :data="tableList" tooltip-effect="dark" style="width: 100%"
         > 
          <el-table-column type="selection" width="55">
          </el-table-column>
         
          <el-table-column prop="title" label="商品名称">
          </el-table-column>
          <el-table-column prop="categoryname" label="所属类型" width="100">
          </el-table-column>
          <el-table-column prop="stock_quantity" label="库存" width="100">
          </el-table-column>
          <el-table-column prop="market_price" label="市场价" width="100">
          </el-table-column>
          <el-table-column prop="sell_price" label="销售价" width="100">
          </el-table-column>

          <el-table-column label="状态"    width="100">
            <template slot-scope="scope">
              <i  :class="['el-tooltip','ls','el-icon-picture', ,scope.row.is_top?'active':'' ]"></i>
              <i  :class="['el-tooltip', 'ls', 'el-icon-upload',scope.row.is_hot?'active':''] "></i>
              <i  :class="['el-tooltip' ,'ls','el-icon-star-on',scope.row.is_slide?'active':''] "></i>
            </template>
          </el-table-column>
          <el-table-column label="操作"    width="100">
            <template slot-scope="scope">
             <a href="">修改</a>
            </template>
          </el-table-column>
          
         
        </el-table>
    </div>
    <!-- 分页 -->
    <div>
       <!-- 分页: size-change用于监听每页展示条目的变化, current-change用于监听页码的变化 -->
       <!-- 分页: current-page属性用于设置当前处于第几页, page-size属性用于设置每页条目的可选项 -->
       <!-- 分页: layout用于设置要使用那些分页小组件, total用于设置数据总量 -->
        <el-pagination
      @size-change="handleSizeChange"  
      @current-change="handleCurrentChange"
      :current-page="query.pageIndex"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="query.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalcount">
    </el-pagination>

    </div>

  </div>
</template>


<script>
    export default {
        data() {
            return {
               tableList:[
                 {date:'I',name:'你的名字我的心事'},
                 {date:'love',name:'你的名字我的心事'},
                 {date:'U',name:'你的名字我的心事'},
                 {date:'love',name:'你的名字我的心事'},
  
               ],
               query:{
                 pageIndex:1,
                 pageSize:10,
                 searchvalue:''
               },
               totalcount:0,
              
            };
        },
        methods: {
            getTableList(){
               // get方法的第二个参数可以用来指定查询字符串, header头信息等内容
               this.$http.get(this.$api.gsList,{params:this.query})
               .then(rsp=>{
                 this.tableList=rsp.data.message;
                 this.totalcount=rsp.data.totalcount;
               })
            },

              // 每页数量变化时触发
            handleSizeChange(pageSize){
              this.query.pageSize=pageSize;
              this.getTableList();

            },
             // 页码变化时触发
            handleCurrentChange(pageIndex){
              this.query.pageIndex=pageIndex;
              this.getTableList();
            }

        },
        created(){ //生命周期 
          // 页面一上来就请求接口获取商品列表进展示
          this.getTableList();
        }
    }
</script>

<style scoped lang="less">
    .nav {
        padding: 5px 0;
        border-bottom: 1px solid rgba(255, 115, 0, 0.685);
    }
    
    .list_util {
        border: 1px solid rgba(255, 115, 0, 0.685);
        margin-top: 10px;
        border-radius: 5px;
        padding: 10px 10px;
        overflow: hidden;
        .list_util_btns {
            float: left;
        }
        .list_util_search {
            float: right;
        }
    }
    .table{
      background: orange
    }
    .el-tooltip{
      color: rgba(0, 0, 255, 0.945);
      font-size: 20px;
       
    }
    .active{
         color:rgba(14, 7, 102, 0.473);
        
       }
</style>