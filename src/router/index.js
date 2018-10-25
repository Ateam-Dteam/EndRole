import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Form from '@/components/Form'
import FormReligious from '@/components/modules/FormReligious'
import FormAttendat from '@/components/modules/FormAttendant'
import FormOption from '@/components/modules/FromOption'
import FormEstimate from '@/components/modules/FormEstimate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Form',
      name: 'Form',
      component: Form
    },
    {
      path: '/FormReligious',
      name: 'FormReligious',
      component: FormReligious
    },
    {
      path: '/FormAttendat',
      name: 'FormAttendat',
      component: FormAttendat
    },
    {
      path: '/FormOption',
      name: 'FormOption',
      component: FormOption
    },
    {
      path: '/FormEstimate',
      name: 'FormEstimate',
      component: FormEstimate
    }
  ]
})
