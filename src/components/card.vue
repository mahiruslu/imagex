<template>
    <div class="card">
        <div class="content">

        <h3>{{ description }}</h3>
        <img :key="imgUrl" :src="imgUrl" alt="">
        <p >{{explanation}}</p>
        </div>
        <div class="footer">

        </div>
    </div>
</template>

<script>
export default {
    props:{
        msg: String,
        imgUrl: String,
        description: String,
        explanation: String,
    }
}
</script>

<style scoped>
.card{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    min-width: 400px;
    width: 35%;
    height: 50%;
    border: 1px;
    border-style: solid;
    border-color: gray;
    border-radius: 20px;
    margin: 5px;
    position: relative;
    box-shadow: 7px 7px 57px -14px rgba(0,0,0,0.99);
    -webkit-box-shadow: 7px 7px 57px -14px rgba(0,0,0,0.99);
    -moz-box-shadow: 7px 7px 57px -14px rgba(0,0,0,0.99);
}
.content{
    padding: 5px;
}
.card img{
    margin: 5px;
    width: 250px;
    border-width: 2px;
    border-radius: 20px;
}
.card h3{
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
    background-color: #00af54;
    bottom:0;
}
</style>