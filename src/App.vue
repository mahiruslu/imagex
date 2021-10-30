/* eslint-disable vue/no-unused-components */
<template>
  <div class="app" :id="$store.state.toggleSwitchStatus !== true ? 'default' : 'dark'">
      <div class="navbar">
        <div class="logo">Imagex</div>
        <div class="navbarOptions">
          <toggleSwitch />
        </div>
    </div>
    <div class="container">
      <div class="topContainer">
        <Pages />
      </div>
      <div class="innerContainer">

       <card v-for="(image,index) in imgUrls" :key="image.id" :imgUrl="image.urls.small" :imgUrlFullResolution="image.urls.full" :description="this.description[index]" :explanation="this.explanations.length >0 ?  this.explanations[index].explanation : 'empty'" :alt="image.id" btnClass="fa fa-download" />

      </div>
    </div>
  </div>
</template>

<script>
import card from './components/card.vue'
import toggleSwitch from './components/toggleSwitch.vue'
import axios from 'axios'
import {mapState,mapMutations} from 'vuex'
import Pages from './components/pages.vue'
import cryptoRandomString from 'crypto-random-string'

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    card,
    toggleSwitch,
    Pages
  },
  data(){
    return{
      accessKey:'Rap3jucUeb35yLQQLOnBa_dOpylxLe8v8eovS-7TXY4',
      url:`https://api.unsplash.com/photos`,
      imgUrls:[],
      //for download images high resolution
      imgUrlFullResolution:[],
      description:[],
      explanations:[],
    }
  },
  methods:{
    async getImages() {
      try{
        const res = await axios.get(this.url + `?client_id=${this.accessKey}`+`&page=${this.$store.state.page}`)
        this.imgUrls = res.data;
        console.log(res.data)
       
      }catch(err){
        console.log(err);
      }
    },
    async getDatas(){
      try{
        //for nasa api get specific date
        // const emptyDate = new Date();
        // const randomDate = new Date();
        // const dateFormatter = Intl.DateTimeFormat('sv-SE');
        // const formattedRandomDateStart = dateFormatter.format(emptyDate.setDate(randomDate.getDate() - Math.floor(Math.random()*1000)));
        const res = await axios.get('https://api.nasa.gov/planetary/apod?api_key=JZbsf02DnpW3BT4aF2e49Y0qotXS1cI7THtfKswP'+`&count=10`)
        this.explanations = res.data;
        // console.log(this.explanations[1].explanation);
      }catch(err){
        console.log(err);
      }
    },
    uniqueId(){
      for(var i= 0; i<10;i++){

        this.description.push('#'+cryptoRandomString({length: 4, type: 'numeric'}) + '-Resim');
      }
    },
    async downloadImage(url){
      url = this.imgUrls[0];
      var base64 = await axios.get(url,{
        responseType:"arraybuffer"
      }).then(res=>{
        Buffer.from(res.data,"binary").toString('base64')
      }).catch(err=>console.log(err));
      var img = new Image();
      img.src = "data:image/jpeg;base64, "+ base64
    }
  
  },
  created(){
    this.getDatas();
    this.getImages();
    this.uniqueId();
  },
  computed:{
    ...mapState(['page']),
  },
  watch: {
    page(newValue,oldValue){
      this.getDatas();
      this.getImages();

    }
  },
  

}
</script>

<style >
*{
  margin:0;
}
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  align-content: center;
  margin-top: 60px;
  width: 100%;
  flex-wrap: wrap;
}
#default{
  background-color: white;
  color: #2c3e50;
}
#dark{
  background-color: black;
  color: white;
}
.navbar{
  top:0;
  position: fixed;
  width: 100%;
  height: 90px;
  background-color: rgba(0, 0, 0, 1);
  display: flex;
  flex-direction:row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  overflow:hidden;
  z-index: 99;
}
.logo{
  flex-direction: right;
  font-weight: 800;
  padding-left: 10px;
  color: white;
}
.navbarOptions{
  float: right;

}
.container{
  margin-top: 30px;
  width: 80%;
  display: flex;
  flex-direction:column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.innerContainer{
  margin-top: 30px;
  width: 80%;
  display: flex;
  flex-direction:row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
