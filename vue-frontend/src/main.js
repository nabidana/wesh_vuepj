import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import router from './router'
import Store from './Store/index.js'

const app = createApp(App)
app.use(router)
app.provide("$axios",axios)
app.use(Store)
app.mount('#app')