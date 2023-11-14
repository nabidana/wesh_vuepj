<template>
    <Navbar />
    <Modalviewpage v-if="showmodal" :titleValue="'Test title'"
        :contentValue="'contentValue\ncontentValue\ncontentValue'" @closeModal="hidemodal"
        :categoryMsg="'categor'"
    />
    <header class="header-2">
        <div class="page-header align-items-start min-vh-100" loading="lazy"
            :style="`background-image: url(${SignupImg});`"
        >
            <div class="container my-auto">
                <div class="row">
                    <div class="col-lg-10 col-md-10 mx-auto">
                        <div class="card z-index-0 fadeIn3 fadeInBottom">
                            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                <div class="bg-gradient-success shadow-success 
                                border-radius-lg py-3 pe-1"
                                >
                                    <h4 class="text-white font-weight-bolder 
                                    text-center mt-2 mb-0"> 
                                        Sign in 
                                    </h4>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="nav-scroller py-1 mb-2">
                                    <nav class="nav d-flex flex-row justify-content-around">
                                        <h5 v-bind:class="signupNum == 1 ? 'bg-warning' : ''">
                                            <span class="badge badge-primary bg-primary">1단계</span> 약관동의
                                            <span class="text-info h2"></span>
                                        </h5>
                                        <h5>
                                            <span class="text-info h2">&#8680;</span>
                                        </h5>
                                        <h5 v-bind:class="signupNum == 2 ? 'bg-warning' : ''">
                                            <span class="badge badge-primary bg-primary">2단계</span> 사용자인증
                                            <span class="text-info h2"></span>
                                        </h5>
                                        <h5>
                                            <span class="text-info h2">&#8680;</span>
                                        </h5>
                                        <h5 v-bind:class="signupNum == 3 ? 'bg-warning' : ''">
                                            <span class="badge badge-primary bg-primary">3단계</span> 사용자 정보 입력
                                            <span class="text-info h2"></span>
                                        </h5>
                                        <h5>
                                            <span class="text-info h2">&#8680;</span>
                                        </h5>
                                        <h5 v-bind:class="signupNum == 4 ? 'bg-warning' : ''">
                                            <span class="badge badge-primary bg-primary">4단계</span> 회원가입 완료
                                            <span class="text-info h2"></span>
                                        </h5>
                                    </nav>
                                </div>
                                <Signup_agree v-if="signupNum == 1" @nextstep="nextstep"/>
                                <Signup_authentication v-if="signupNum == 2" @modal_show="modal_show"
                                    @nextstep="nextstep"
                                />
                                <SignupInput v-if="signupNum == 3" @nextstep="nextstep" />
                                <signup_finish v-if="signupNum == 4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<script setup>
import { ref } from 'vue'
import Navbar from '../Navbar/MainNavbar.vue'
import SignupImg from '@/assets/signuppage.jpg'
import Signup_agree from './Signup_agree.vue'
import Signup_authentication from './Signup_authentication.vue'
import SignupInput from './Signup_input.vue'
import signup_finish from './signup_finish.vue'

import Modalviewpage from '../Modalview/Modalviewpage.vue'
const showmodal = ref(false)

const signupNum = ref(1)

const nextstep = () => {
    signupNum.value++
}
const hidemodal = () => {
    showmodal.value = false
}
const modal_show = () => {
    showmodal.value = true
}
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