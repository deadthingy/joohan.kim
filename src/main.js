import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import HomeScreen from './components/HomeScreen'
import ProjectList from './components/ProjectList'
// import ProjectHome from './components/projects/ProjectHome'
import NoteSaver from './components/projects/NoteSaver'
import WeatherApp from './components/projects/WeatherApp'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/posts');
// var db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error"));
// db.once("open", function(callback){
//   console.log("Connection Succeeded");
// });
library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)



Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/', 
            component: HomeScreen
        },
        {
            path: '/projects',
            component: ProjectList,
            // children: [
            //     {
            //         path: '/notes',
            //         component: NoteSaver
            //     },
            //     {
            //         path: '/weather-app',
            //         component: WeatherApp
            //     }
            // ]
        },
        {
            path: '/projects/notes',
            component: NoteSaver
        },
        {
            path: '/projects/weather-app',
            component: WeatherApp
        }
    ]
});

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    render: h => h(App)
})

