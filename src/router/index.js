import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/app'
import Login from '@/components/Login'
import Main from '@/components/MainContainer'
import BoardView from '@/components/main/BoardView'
import Main2 from '@/components/main/Main2'

Vue.use(Router)

var router = new Router({
    routes: [{
            path: '/',
            name: 'Root',
            component: Login
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/main',
            component: Main,
            children: [{
                    path: '',
                    name: 'Main',
                    component: BoardView
                },
                {
                    path: 'board',
                    component: BoardView
                },
                {
                    path: 'main2',
                    component: Main2
                }
            ]
        },
        {
            path: '/logout',
            name: 'Logout',
            component: Login
        }
    ]
})

router.beforeEach((to, from, next) => {
    switch (to.name) {
        case 'Login':
            if (store.state.isLoggedIn) {
                next('/main')
            } else {
                //store.commit('login')
                next()
            }
            break;
        case 'Logout':
            store.commit('logout')
            next('/login')
            break;
        default:
            if (store.state.isLoggedIn) {
                next()
            } else {
                next('/login')
            }
            break;
    }
})

export default router
