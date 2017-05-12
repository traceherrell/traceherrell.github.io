import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Bluetooth from 'components/Bluetooth'
import Portfolio from 'components/Portfolio'
import Contact from 'components/Contact'
import Components from 'components/Components'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/bluetooth',
      name: 'Bluetooth',
      component: Bluetooth
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/components',
      name: 'Components',
      component: Components
    }
  ]
})
