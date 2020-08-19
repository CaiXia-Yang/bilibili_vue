import Vue from 'vue'
import VueRouter from 'vue-router'
// 增加注册页面路由
import register from './views/register.vue'
//增加登录页面路由
import login from './views/login.vue'
//增加个人中心页面路由
import userinfo from './views/userinfo.vue'
//增加编辑资料页面路由
import edit from './views/edit.vue'

//增加首页页面路由
import home from './views/home.vue'
//增加文章页面路由
import article from './views/article.vue'

import editcategory from '@/views/editcategory.vue'

Vue.use(VueRouter)
const routes=[
    {
        path:'/register',
        component:register
    },
    {
        path:'/login',
        component:login
    },
    {
        path:'/userinfo',
        component:userinfo,
        meta:{
            istoken:true
          }
    },
    {
        path:'/edit',
        component:edit,
        meta:{
            istoken:true
          }
    },   
     {
        path:'/',
        component:home,
        meta:{
            keepalive:true
          }
    },
    {
        path:'/article/:id',
        component:article
    },
    {
      path:'/editcategory',
      component:editcategory
    }
]

const router = new VueRouter({
    routes,
    mode:'history'
})

router.beforeEach((to,from,next) => {
    if(!localStorage.getItem('token')&&!localStorage.getItem('id')&&to.meta.istoken == true){
      router.push('/login')
      Vue.prototype.$msg.fail('请重新登录')
      return
    }
    next()
  })

export default router