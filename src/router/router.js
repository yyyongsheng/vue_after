import LoginComponent from "../component/login/Login.vue";
import AdminComponent from "../component/admin/Admin.vue"

// 导入商品相关组件
import GoodsContentListComponent from "../component/admin/goods/content/GoodsContentList.vue";
import GoodsContentAddComponent from "../component/admin/goods/content/GoodsContentAdd.vue";
import GoodsContentEditComponent from "../component/admin/goods/content/GoodsContentEdit.vue";

// admin子路由配置
let adminChildren = [
    { name: "gcl", path: 'goods/conten/list', component: GoodsContentListComponent },
    { name: "gca", path: 'goods/conten/add', component: GoodsContentAddComponent },
    { name: "gce", path: 'goods/conten/edit', component: GoodsContentEditComponent },

]



export default {
    routes: [
        //    后台首页
        { name: 'A', path: '/', component: AdminComponent, children: adminChildren },
        { name: 'l', path: '/login', component: LoginComponent }

    ]
}