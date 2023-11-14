import { createStore } from 'vuex'
import { userStore } from './userStore'
import { boardStore } from './boardStore'
import { imageStore } from './imageStore'

export default createStore({
    modules : {
        userStore, boardStore, imageStore
    }
})