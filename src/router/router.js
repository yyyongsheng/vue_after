import LoginComponent from "../component/login/Login.vue";
import AdminComponent from "../component/admin/Admin.vue"

export default {
    routes: [
        //    后台首页
        { name: 'A', path: '/', component: AdminComponent },
        { name: 'l', path: '/login', component: LoginComponent }

    ]
}