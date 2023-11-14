import { createRouter, createWebHistory } from 'vue-router'
import Mainpage from '@/components/Mainpage.vue'
import MainimgVue from '@/components/Imgpage/Mainimg.vue'
import Notfound from '@/components/404page/404Error.vue'
import Loginpage from '@/components/Login/Loginpage.vue'
import Signuppage from '@/components/Signup/Signuppage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            name:'mainpage',
            component:Mainpage
        },
        {
            path:'/imgpage',
            name:'imgpage',
            component:MainimgVue
        },
        {
            path:'/loginpage',
            name:'loginpage',
            component:Loginpage
        },
        {
            path:'/signuppage',
            name:'signuppage',
            component:Signuppage
        },
        {
            path:'/404',
            name:'notfound',
            component: Notfound
        },
        {
            path: '/:patMatch(.*)*',
            redirect:'/404'
        }
    ]
})

router.beforeEach( (to, from, next) => {
    document.title = '이미지 복원 사이트'
    next()
})

export default router