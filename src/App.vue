<template>
  <div class="app">
  <card :imgUrl="this.imgUrl" :description="this.description" :explanation="this.explanation"/>
  <card :imgUrl="this.imgUrl" :description="this.description" :explanation="this.explanation"/>
  <card :imgUrl="this.imgUrl" :description="this.description" :explanation="this.explanation"/>

  </div>
</template>

<script>
import card from './components/card.vue'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    card
  },
  data(){
    return{
      accessKey:'Rap3jucUeb35yLQQLOnBa_dOpylxLe8v8eovS-7TXY4',
      url:'https://api.unsplash.com/photos/random',
      imgUrl:'',
      description:'Name',
      explanation:'explanation',
    }
  },
  methods:{
    async getImages() {
      try{
        const res = await axios.get(this.url + `?client_id=${this.accessKey}`)
        console.log(res);
        this.imgUrl = res.data.urls.small;
      }catch(err){
        console.log(err);
      }
    },
    async getDatas(){
      try{
        const emptyDate = new Date();
        const randomDate = new Date();
        const dateFormatter = Intl.DateTimeFormat('sv-SE');
        const formattedRandomDate = dateFormatter.format(emptyDate.setDate(randomDate.getDate() - Math.floor(Math.random()*1000)));

        console.log(formattedRandomDate);
        const res = await axios.get('https://api.nasa.gov/planetary/apod?api_key=JZbsf02DnpW3BT4aF2e49Y0qotXS1cI7THtfKswP'+`&date=${formattedRandomDate}`)
        console.log(res.data);
        this.explanation = res.data.explanation;
      }catch(err){
        console.log(err);
      }
    }
  
  },
  created(){
    this.getImages();
    this.getDatas();
  }
}
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  align-content: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
}
</style>
