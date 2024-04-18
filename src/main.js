import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/global.css'

import router from './router'

const app = createApp(App)




app
    .use(router)




router.beforeEach((to, from, next) => {
    console.log("to:", to)
    console.log("from:", from)

    // before nav guard
    if (to.name == "history") {
        next(false)
    } else {
        next()
    }

})




app
    .use(ElementPlus)
    .mount('#app')


