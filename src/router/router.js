import { HomeComponent } from "../component/home/Home.vue";
import { LoginComponent } from "../component/login/Login.vue";

export default {
    routes: [
        //  首页
        { name: "h", path: '/home', component: HomeComponent },

        // 登录
        { name: 'l', path: '/login', component: LoginComponent }

    ]
}