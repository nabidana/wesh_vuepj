<template>
    <div class="modal fade show " tabindex="-1" style="display: block;" 
    aria-modal="true" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                        {{ titleValue }}
                    </h5>
                    <button class="btn btn-none btn-md false false btn-close"
                        @click="$emit('closeModal')"
                    >X</button>
                </div>
                <div class="modal-body">
                    {{ contentValue }}
                </div>
                <div class="modal-footer justify-content-between">
                    <button class="btn bg-gradient-dark btn-md false false" @click="$emit('closeModal')"> 
                        Close 
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'

const props = defineProps([
    'titleValue', 'contentValue','categoryMsg'
])

</script>
<style scoped>
.input_userid{
    width: 80%;
}
.input_userpw{
    width: 70%;
}
.modal-title{
    margin-left: 10px;
}
.btn{
    color: #fff;
}
.btn.bg-gradient-dark{
    box-shadow: 0 3px 3px #34476726, 0 3px 1px -2px #34476733, 0 1px 5px #34476726;
    background-image: linear-gradient(195deg,#42424a 0%,#191919 100%);
}
.btn.bg-gradient-success{
    box-shadow: 0 3px 3px #4caf5026, 0 3px 1px -2px #4caf5033, 0 1px 5px #4caf5026;
    background-image: linear-gradient(195deg,#66bb6a 0%,#43a047 100%);
}
.btn.bg-gradient-warning{
    box-shadow: 0 3px 3px #4caf5026, 0 3px 1px -2px #4caf5033, 0 1px 5px #4caf5026;
    background-image: linear-gradient(195deg,#4271d6 0%,#24a4d6 100%);
}
.btn:not([class*=btn-outline-]){
    border: 0;
}
</style>