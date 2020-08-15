import VueRouter from "vue-router"
import aboutUs from '../aboutUs.vue'
import Home from '../Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/aboutUs',
        name: 'aboutUs',
        component: aboutUs
    }
]

export default new VueRouter({
    mode: 'hash',
    routes
})