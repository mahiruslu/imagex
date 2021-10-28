<template>
    <div class="card">
        <img :key="imgUrl" :src="imgUrl" alt="">
        <h1>{{ description }}</h1>
        <p >{{explanation}}</p>
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
.card img{
    width: 250px;
    border-width: 2px;
    border-radius: 20px;
}
.card h1{
    padding-top: 10px;
}
</style>