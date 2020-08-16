import VueRouter from "vue-router"
import About from '../About.vue'
import Home from '../Home.vue'
import Donate from '../Donate.vue'
import Donate2 from '../Donate2.vue'
import Donate3 from '../Donate3.vue'
import Donate4 from '../Donate4.vue'

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
    },
    {
        path: '/Donate2',
        name: 'Donate2',
        component: Donate2
    },
    {
        path: '/Donate3',
        name: 'Donate3',
        component: Donate3
    },
    {
        path: '/Donate4',
        name: 'Donate4',
        component: Donate4
    }
]

export default new VueRouter({
    mode: 'hash',
    routes
})