import VueRouter from "vue-router"
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import Donate from '../views/Donate.vue'
import Donate2 from '../views/Donate2.vue'
import Donate3 from '../views/Donate3.vue'
import Donate4 from '../views/Donate4.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Logout from '../views/Logout.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/donate',
        name: 'Donate',
        component: Donate
    },
    {
        path: '/donate2',
        name: 'Donate2',
        component: Donate2
    },
    {
        path: '/donate3',
        name: 'Donate3',
        component: Donate3
    },
    {
        path: '/donate4',
        name: 'Donate4',
        component: Donate4
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/logout',
        name: 'Logout',
        component: Logout
    },
]

export const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/register', '/todo', '/',  '/about']
    const authRequired = !publicPages.includes(to.path)
    const loggedIn = localStorage.getItem('user')

    if(authRequired && !loggedIn){
        return next('login')
    }
    next()
})

