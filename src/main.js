import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/global.css'
import { createPinia } from 'pinia'
import router from './router'



import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'




const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

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
    .use(pinia)
    .use(ElementPlus)
    .mount('#app')


