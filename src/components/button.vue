<template>
    <button @click="$emit('downloadImage',image.id)">
        <i :class="faClass"></i>
    </button>
</template>

<script>
import { mapState } from 'vuex'

export default {
    props:{
        faClass:String,
        image:[],
    },
    methods:{
        onclick(){

        }
    }
}
</script>

<style scoped>
button{  
    background-color: transparent;
    border: none;
    border-radius: 10px;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}
</style>