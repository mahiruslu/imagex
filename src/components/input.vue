<template>
    <div class="inutArea">
          <input type="text" :placeholder="placeHolder" v-model="inputValue" @keyup.enter="updateSearchString()" />
    </div>
</template>

<script>
export default {
    props:{
        placeHolder:String,
    },
    data(){
        return{
            inputValue:'',
        }
    },
    methods:{
        updateSearchString(){
            this.$store.state.searchString = this.inputValue
            console.log(this.$store.state.searchString);
        }
    }
}
</script>

<style scoped>
.inutArea{    
    color: white;
    position: relative;
}
.inutArea input{
    border-radius: 10px;
    border: solid 1 white;
    padding: 5px;
    background-color: black;
    color: white;
}
</style>