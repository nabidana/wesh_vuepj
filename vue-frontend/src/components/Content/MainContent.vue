<template>
    <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
        <h1 class="card-title text-center">
            <a href="#" class="text-black text-deco-none 
                link-underline link-underline-opacity-0" 
                @click="$router.push('/imgpage')"
            > 
                - 이미지 복원하기 - 
            </a>
        </h1>
        <h4 class="card-text mg_l text-center">
            사용방법 (How to use it)
        </h4>
        <Howtouse />
    </div>
    <Partner />
</template>
<script setup>
import Howtouse from './Howtouse.vue';
import Partner from './Partner.vue'
</script>
<style scoped>
.mg_l{
    margin-left: 20px;
}
</style>