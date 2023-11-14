<template>
    <div class="container position-sticky z-index-sticky top-0">
      <div class="row">
        <div class="col-12">
          <Navbar />
        </div>
      </div>
    </div>
    <ImgHeader />
</template>
<script setup>
import { onMounted } from 'vue'
import axios from 'axios';
import Navbar from '../Navbar/MainNavbar.vue'
import ImgHeader from './ImgHeader.vue';

</script>
<style scoped>
.tg_t{
  margin-top: 100px;
}
</style>