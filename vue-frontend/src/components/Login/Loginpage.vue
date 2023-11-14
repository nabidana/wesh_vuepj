<template>
    <Navbar />
    <header class="header-2">
        <div class="page-header align-items-start min-vh-100" loading="lazy"
            :style="`background-image: url(${LoginImg});`"
        >    
            <div class="container my-auto">
                <div class="row">
                    <div class="col-lg-4 col-md-8 col-12 mx-auto">
                        <div class="card z-index-0 fadeIn3 fadeInBottom">
                            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                <div class="bg-gradient-success shadow-success 
                                border-radius-lg py-3 pe-1"
                                >
                                    <h4 class="text-white font-weight-bolder 
                                        text-center mt-2 mb-0"> 
                                        로그인
                                    </h4>
                                </div>
                            </div>
                            <div class="card-body">
                                <form role="form" class="text-start">
                                    <div class="input-group input-group-outline my-3">
                                        ID : <input type="text" class="inputid" placeholder="YourID">
                                    </div>
                                    <div class="input-group input-group-outline mb-3">
                                        패스워드 : 
                                        <input type="text" class="inputpw" placeholder="YourPassword">
                                    </div>
                                    <div class="text-center btn_login">
                                        <button class="btn bg-gradient-success 
                                            btn-md w-100 false my-4 mb-2 text-white"
                                        >
                                            로그인하기
                                        </button>
                                    </div>
                                    <p class="mt-4 text-sm text-center"> 
                                        계정이 없으십니까?
                                        <a class="btn text-success text-gradient font-weight-bold under_line"
                                            @click="$router.push('/signuppage')"
                                        >
                                            회원가입하기
                                        </a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<script setup>
import Navbar from '../Navbar/MainNavbar.vue'
import LoginImg from '@/assets/loginpage.jpg'

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