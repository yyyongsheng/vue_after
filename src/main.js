// 1.1 导入第三包
import Vue from 'vue';
import VueRouter from "vue-router";


// 2.1 导入根组件
import AppComponent from './component/App.vue';


// 导入路由路径
import RouterConfig from "./router/router.js";

// 导入配置后的axios和api

import axios from "./js/axios_config.js";

import api from "./js/api_config.js";

// 导入element-ui
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css'

// 导入初始化css
import 'normalize.css';

//导入全局css
import "./less/index.less"

// 启动插件

Vue.use(VueRouter)
Vue.use(ElementUI)



// 将axios和api；注入到Vue的原型中
Vue.prototype.$http = axios;

Vue.prototype.$api = api;


// 渲染根组件, 启动应用程序
new Vue({
    el: '#app',
    render: c => c(AppComponent),
    router: new VueRouter(RouterConfig)

});