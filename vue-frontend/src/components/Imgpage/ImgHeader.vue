<template>
    <header class="header-2">
        <div class="page-header min-vh-75" loading="lazy"
          :style="`background-image: url(${header_img})`" >
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
  min-height: 20vh!important;
}
.page-header .container {
  z-index: 1;
}
</style>