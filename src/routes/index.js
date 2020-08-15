import VueRouter from "vue-router"
import About from '../About.vue'
import Home from '../Home.vue'
import Donate from '../Donate.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/About',
        name: 'About',
        component: About
    },
    {
        path: '/Donate',
        name: 'Donate',
        component: Donate
    }
]

export default new VueRouter({
    mode: 'hash',
    routes
})