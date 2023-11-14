<template>
    <nav class="navbar navbar-expand-lg top-0 my-3 blur border-radius-lg z-index-3 
    py-2 shadow start-0 end-0 mx-4 position-absolute mt-4">
        <div class="container-fluid px-0">
            <a aria-current="page" href="/"
                class="router-link-active router-link-exact-active 
                navbar-brand d-none d-md-block text-dark font-weight-bolder ms-sm-3"
            > 
                이미지 복원 사이트
            </a>
            <a class="btn btn-sm bg-gradient-success mb-0 ms-auto d-lg-none d-block"
                @click="$router.push('/loginpage')"
            >
                회원가입
            </a>
            <a class="btn btn-sm bg-gradient-success mb-0 ms-auto d-lg-none d-block"
                @click="$router.push('/loginpage')"
            >
                LOGIN
            </a>
            <button class="navbar-toggler shadow-none ms-2" 
                type="button" data-bs-toggle="collapse" data-bs-target="#navigation" 
                aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon mt-2">
                    <span class="navbar-toggler-bar bar1"></span>
                    <span class="navbar-toggler-bar bar2"></span>
                    <span class="navbar-toggler-bar bar3"></span>
                </span>
            </button>
            <div class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0" id="navigation">
                <ul class="navbar-nav navbar-nav-hover ms-auto">
                    <li class="nav-item dropdown dropdown-hover mx-2">
                        <a href="#" @click="$router.push('/imgpage')"
                            class="nav-link d-flex cursor-pointer align-items-center"
                        >
                            이미지 복원하기
                        </a>
                    </li>
                    <li class="nav-item dropdown dropdown-hover mx-2">
                        <a href="#" @click=""
                        class="nav-link d-flex cursor-pointer align-items-center"
                        >
                            자유게시판
                        </a>
                    </li>
                </ul>
                <ul class="navbar-nav d-lg-block d-none">
                    <li class="nav-item">
                        <a class="btn btn-sm mb-0"
                            @click="$router.push('/signuppage')"
                        >
                            회원가입
                        </a>
                        &nbsp
                        <a class="btn btn-sm mb-0 bg-gradient-success" 
                            @click="$router.push('/loginpage')"
                        >
                            LOGIN
                        </a>
                        &nbsp
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>


</script>
<style scoped>

.container{
    width: auto;
}
.border-radius-lg{
    border-radius: 0.5rem;
}
.blur{
    backdrop-filter: saturate(200%) blur(30px);
    background-color: #fffc!important;
}
.z-index-3{
    z-index: 3!important;
}
.navbar .navbar-brand{
    height: 40px;
}
.font-weight-bolder{
    font-weight: 700!important;
}
.navbar .nav-link{
    padding: 0.5rem 1rem;
    font-weight: 400;
    font-size: .875rem;
}
.cursor-pointer{
    cursor: pointer;
}
.navbar-toggler .navbar-toggler-icon{
    background-image: none;
}
.navbar-toggler[aria-expanded=true] .navbar-toggler-bar.bar1{
    transform: rotate(45deg);
    transform-origin: 10% 10%;
    margin-top: 4px;
}
.navbar-toggler[aria-expanded=true] .navbar-toggler-bar.bar2{
    opacity: 0;
    margin-top: 7px;
}
.navbar-toggler[aria-expanded=true] .navbar-toggler-bar.bar3{
    transform: rotate(-45deg);
    transform-origin: 10% 90%;
    margin-top: 3px;
}
.navbar-toggler-bar.bar2, .navbar-toggler-bar.bar3 {
    margin-top: 7px;
}
.navbar-toggler-bar{
    display: block;
    position: relative;
    width: 22px;
    height: 1px;
    border-radius: 1px;
    background: #6c757d;
    transition: all .2s;
    margin: 0 auto;
}
.btn{
    color: black;
    box-shadow: 0 3px 3px #4caf5026, 0 3px 1px -2px #4caf5033, 0 1px 5px #4caf5026;
    border: 0;
    background-image: linear-gradient(195deg,#66bb6a 0%,#43a047 100%);
    letter-spacing: 0;
    text-transform: uppercase;
    background-size: 150%;
    background-position-x: 25%;
    position: relative;
    overflow: hidden;
}
</style>