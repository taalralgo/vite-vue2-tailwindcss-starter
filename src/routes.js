
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('./pages/Home.vue');

const routes = [
    { path: '/', name: 'home', component: Home },
];
const router = new VueRouter({
    routes: routes,
    linkExactActiveClass: 'bg-red-500',
});

export default router;