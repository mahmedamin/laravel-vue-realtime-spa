import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/auth/Login";

Vue.use(VueRouter);

const routes = [
    {path: '/login', component: Login},
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
