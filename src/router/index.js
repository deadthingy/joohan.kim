import Vue from 'vue'
import Router from 'vue-router'
import HomeScreen from '../components/HomeScreen'
import NoteSaver from '../components/NoteSaver'

Vue.use(Router)

export function createRouter() {
    new Router({
        routes: [
            {
                path: '/',
                name: 'Home',
                component: {
                    HomeScreen
                }
            },
          {
                path: '/notes',
                name: 'notes',
                component: {
                    NoteSaver              
                }
            }
        ]
      })
}
