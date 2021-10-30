<template>
    <button v-bind="$attrs" :id="$store.state.toggleSwitchStatus !== true ? 'default' : 'dark'" >
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
    border: solid 1px;
    border-radius: 100%;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    color: black;
    cursor: pointer;
}
#dark{
    color: white;
}
#default{
    color: black;
}
button:hover{
    background-color: black;
    color: white;
}
</style>