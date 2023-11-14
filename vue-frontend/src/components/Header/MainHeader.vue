<template>
    <header class="header-2">
        <div class="page-header min-vh-75" loading="lazy"
          :style="`background-image: url(${header_img})`" >
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 text-center mx-auto position-relative">
                        <button type="button" class="btn btn-light" @click="$router.push('/imgpage')">
                          이미지 복원하러 가기
                        </button>
                    </div>
                </div>
            </div>
        </div>      
  </header>
</template>
<script setup>
    import header_img from '@/assets/mainpage.jpg'
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
.min-vh-75{
  min-height: 75vh!important;
}
.page-header .container {
  z-index: 1;
}
.mt-n5{
  margin-top: -3erm!important;
}
.lead{
  font-size: 1.25rem;
  line-height: 1.625;
}
</style>