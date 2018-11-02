import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Form from '@/components/Form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/Form',
      name: 'Form',
      component: Form
    }
  ]
})
