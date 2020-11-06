import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";
import Forum from "../components/forum/Forum";
import Logout from "../components/auth/Logout";
import Read from "../components/forum/Read";
import CreateQuestion from "../components/forum/Create";

import CreateCategory from "../components/category/Create";

Vue.use(VueRouter);

const routes = [
    {path: '/login', component: Login},
    {path: '/logout', component: Logout},
    {path: '/signup', component: Signup},
    {path: '/forum', component: Forum, name: 'forum'},
    {path: '/ask', component: CreateQuestion},
    {path: '/questions/:slug', component: Read, name: 'read-question'},
    {
        path: '/categories',
        component: {
            render: c => c('router-view'),
        },
        children: [
            {path: 'create', component: CreateCategory, name: 'categories.create'},
        ]
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
