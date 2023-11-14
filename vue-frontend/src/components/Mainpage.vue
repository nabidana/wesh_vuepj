<template>
    <div class="container position-sticky z-index-sticky top-0">
      <div class="row">
        <div class="col-12">
          <Navbar />
        </div>
      </div>
    </div>
    <Header />
    <Content />
</template>
<script setup>
import { onMounted } from 'vue'
import Navbar from './Navbar/MainNavbar.vue'
import Header from './Header/MainHeader.vue'
import Content from './Content/MainContent.vue'

const body = document.getElementsByTagName("body")[0];
onMounted( () => {
    body.classList.add("presentation-page");
    body.classList.add("bg-gray-200");
})
</script>
<style>
.modal{
    background: rgba(0, 0, 0, 0.6);
}
body {
    font-weight: 400;
    line-height: 1.6;
}
    .z-index-sticky{
    z-index:1020;
}

h1, .h1{
    font-size: 3rem;
    line-height: 1.25;
    font-weight: 600;
    font-family: Roboto Slabe,sans-serif;
}
</style>