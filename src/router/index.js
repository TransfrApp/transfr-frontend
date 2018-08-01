import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import MainDash from '../container/MainDash';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/home',
      name: 'mainDash',
      component: MainDash
    }
  ]
})
