import Vue from 'vue'
/*global Vue*/
import Router from 'vue-router'
import Home from '@/page/home'
import Topic from '@/page/topic'
import Shop from '@/page/shop'
import My from '@/page/my'
import Class from '@/page/class'
import Foo from '@/components/foo'

Vue.use(Router)

module.exports = new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component:Home
    },
    {
      path: '/topic',
      name: 'Topic',
      component:Topic
    },
    {
      path: '/class',
      name: 'Class',
      component:Class
    },
    {
      path: '/my',
      name: 'My',
      component:My
    },
    {
      path: '/shop',
      name: 'Shop',
      component:Shop
    }

  ]
})
