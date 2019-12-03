import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '../layout/default.vue'
import Main from '../Page/main.vue'
import ChangeCity from '../Page/changeCity.vue'
import GoodsList from '../Page/goodslist.vue'
import blankPage from '../layout/blank.vue'
import login from '../Page/login.vue'
import register from '../Page/register.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  redirect: '/main',
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage,
      children: [
        {
          path: '/main',
          name: 'main',
          component: Main
        }, {
          path: 'changeCity',
          name: 'changeCity',
          component: ChangeCity
        }, {
          path: 's/goodsList',
          name: 'goodsList',
          component: GoodsList
        }
      ]
    }, {
      path: '/blank',
      name: 'blankPage',
      component: blankPage,
      children: [
        {
          path: '/login',
          name: 'login',
          component: login
        }, {
          path: '/register',
          name: 'register',
          component: register
        }
      ]
    }
  ]
})
