import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Recent from '../views/Recent.vue'
import Share from '../views/Share.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home'
          },
          {
            path: '/home',
            name: 'home',
            component: Home,
            meta: {
              index: 1
            }
          },
          {
            path: '/recent',
            name: 'recent',
            component: Recent,
            meta: {
              index: 2
            }
          },
          {
            path: '/share',
            name: 'share',
            component: Share,
            meta: {
              index: 3
            }
          },
    ]
})

export default router