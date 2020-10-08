import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";
import Forum from "../components/forum/Forum";
import Logout from "../components/auth/Logout";
import Read from "../components/forum/Read";
import Create from "../components/forum/Create";

Vue.use(VueRouter);

const routes = [
    {path: '/login', component: Login},
    {path: '/logout', component: Logout},
    {path: '/signup', component: Signup},
    {path: '/forum', component: Forum, name: 'forum'},
    {path: '/ask', component: Create},
    {path: '/questions/:slug', component: Read},
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
