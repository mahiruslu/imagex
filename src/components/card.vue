<template>
    <div class="card">
        <div class="content">

        <h5>{{ description }}</h5>
        <img :key="imgUrl" :src="imgUrl" alt="">
        <p >{{explanation}}</p>
        </div>
        <div class="footer">
            <div class="buttons">
            <Button @downloadImage="$emit('downloadImage',image.id)" :faClass="btnClass"/>

            </div>
        </div>
    </div>
</template>

<script>
import Button from './button.vue'
export default {
    props:{
        msg: String,
        imgUrl: String,
        description: String,
        explanation: String,
        btnClass: String,
    },
    components:{
        Button
    }
}
</script>

<style scoped>
.card{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 400px;
    border: 1px;
    border-radius: 20px;
    margin: 15px;
    position: relative;
    -webkit-box-shadow: -8px -7px 19px 0px rgba(50, 50, 50, 0.4);
    -moz-box-shadow:    -8px -7px 19px 0px rgba(50, 50, 50, 0.4);
    box-shadow:         -8px -7px 19px 0px rgba(50, 50, 50, 0.4);
}
.content{
    padding: 5px;
}
.card img{
    margin: 5px;
    width: 250px;
    height: 400px;
    border-width: 2px;
    border-radius: 20px;
    object-fit: cover;
}
.card h5{
    padding-top: 10px;
    position:absolute;
    transform: translateX(-100%) rotate(-90deg);
    transform-origin: right;
    left: 25px;
}
.footer{
    height: 50px;
    width: 100%;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color: #74F6A7;
    bottom:0;
}
.footer .buttons{
    float: right;
    padding: 0;
    border-radius: 20px;
    
}
.footer .buttons:hover{
    background-color: white;
    color: #74F6A7;
    
}
</style>