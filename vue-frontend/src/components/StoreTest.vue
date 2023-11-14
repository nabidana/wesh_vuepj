<template>
    <!-- Store 관련 테스트를 위해서, 작성되었습니다. 
        userStore 만 작성되어 있습니다.
    -->
</template>
<script setup>
import { useStore } from 'vuex';
import { ref } from 'vue';
const store = useStore();
const test = store.getters['userStore/getTest']
const testArr = ref({})
testArr.value = store.getters['userStore/getTest1']

const testSet = (num) => {
    store.commit('userStore/setTest', num)
}
const testSet2 = () => {
    let arr = {
        'a' : 'q',
        'b' : 'w',
    }

    store.commit('userStore/setTest1', arr)
}

const doAxios = () => {
    store.dispatch('userStore/getAPIfromServer')
}
</script>