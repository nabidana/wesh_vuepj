<template>
    <form role="form" class="text-start">
        <h2>
            <li>
                사용자 인증
            </li>
        </h2>
        <div>
            <h4>
                email : <br>
            </h4>
            <input type="text" v-model="emailFirst">
            @
            <input type="text" class="w-25" v-if="selectValue === 'selfin'" v-model="emailLast">
            <span v-if="selectValue === 'selfin'" >&nbsp;</span>
            <select class="hgt" v-model="selectValue" @change="domainselect">
                <option value="" selected>선택해주세요.</option>
                <option value="google">google.co.kr</option>
                <option value="naver">naver.com</option>
                <option value="selfin">직접입력</option>
            </select>
        </div>
        <div class="mt-2">
            <button type="button" class="btn btn-success" @click="authenticationEmails">인증하기</button>
        </div>
    </form>
</template>
<script setup>
import { ref } from 'vue'
import axios from 'axios';
const emit = defineEmits([
    'modal_show','nextstep'
])

const selectValue = ref('')
const emailFirst = ref('')
const emailLast = ref('')

let checkString = /[ ㄱ-ㅎ가-힣\{\}\[\]\/?,;:|\)*~`!^\_+┼<>@\#$%&\'\"\\\(\=]/
const authenticationEmails = () => {
    if( emailFirst.value === ''){
        alert('이메일을 입력해주세요.')
        return
    }
    if( emailFirst.value.match(checkString)){
        alert('올바른 이메일을 입력해주세요.')
        return
    }
    if( selectValue.value === ''){
        alert('도메인을 선택해주세요.')
    }
    if( selectValue.value === 'selfin'){

        if( emailLast.value === ''){
            alert('도메인을 입력해주세요.')
            return
        }else if( emailLast.value.match(checkString)){
            alert('올바른 도메인을 입력해주세요.')
            return
        }else if( !emailLast.value.match(/(\w)\.(\w)/)){
            alert('올바른 도메인을 입력해주세요.')
            return
        }
    }
    if( selectValue.value === 'google'){
        emailLast.value = 'google.co.kr'
    }else if( selectValue.value === 'naver'){
        emailLast.value = 'naver.com'
    }
    emit('modal_show')
    emit('nextstep')
    console.log(emailFirst.value+'@'+emailLast.value);
}

const domainselect = () => {
    if( selectValue.value === 'selfin' || selectValue.value === ''){
        emailLast.value = ''
    }
}
</script>
<style scoped>
.hgt{
    height: 2rem;
}
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