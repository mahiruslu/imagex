<template>
    <div class="pages" :id="$store.state.toggleSwitchStatus !== true ? 'default' : 'dark'" >
        <Button faClass="fa fa-arrow-left" @click="subtractFromPage" />
        <input class="pageInput" type="number" v-model="$store.state.page" :id="$store.state.toggleSwitchStatus !== true ? 'default' : 'dark'"/>
        <Button faClass="fa fa-arrow-right" @click="addToPage" />
    </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
import Button from './button.vue'
export default {   
  components: {
       Button 
    },
    methods:{
        addToPage(state,payload){
            this.$store.state.page = parseInt(this.$store.state.page) + 1
        },
        subtractFromPage(state,payload){
            this.$store.state.page = parseInt(this.$store.state.page) - 1
        }
    }
    
}
</script>

<style scoped>
    .pages{
        background-color: black;
        margin: 0;
    }
    .pageInput{
        width: 30px;
        text-align: center;
        border: none;
        font-weight: 700;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }
    input[type=number] {
    -moz-appearance: textfield;
    }

    #dark{
    color: white;
    }
    #default{
        color: black;
    }
</style>