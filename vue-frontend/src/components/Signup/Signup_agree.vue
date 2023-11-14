<template>
    <form role="form" class="text-start">
        <h2>
            <li>
                이용 약관 동의
            </li>
        </h2>
        <agree_textarea />
        <div class="d-flex justify-content-between align-items-center">
            <h4>
                <input type="checkbox" v-model="agreed"> 약관 동의하기
            </h4>
            <button type="button" class="btn btn-success" :disabled="!agreed" @click="$emit('nextstep')">
                다음 단계로
            </button>
        </div>
    </form>
</template>
<script setup>
import { ref } from 'vue'
import agree_textarea from './signup_agree_textarea.vue'

const agreed = ref(false)
</script>
<style scoped>
.page-header{
    padding: 0;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    background-size: cover;
    background-position: 50%;
}
.page-header .container{
    z-index: 1;
}
.card{
    box-shadow: 0 4px 6px -1px #0000001a, 0 2px 4px -1px #0000000f;
}
.z-index-0{
    z-index: 0;
}
.z-index-2{
    z-index: 2!important;
}
.mt-n4{
    margin-top: -1.5rem!important;
}
.border-radius-lg{
    border-radius: 0.5rem;
}
.bg-gradient-success{
    background-image: linear-gradient(195deg,#66bb6a 0%,#43a047 100%);
}
.shadow-success {
    box-shadow: 0 4px 20px #00000024,0 7px 10px -5px #4caf5066!important;
}
.font-weight-bolder {
    font-weight: 700!important;
}
.card .card-body {
    font-family: Roboto,Helvetica,Arial,sans-serif;
    padding: 1.5rem;
}
.inputid, .inputpw{
    width: 100%;
    height: 40px;
}
.under_line{
    text-decoration:underline;
}
</style>