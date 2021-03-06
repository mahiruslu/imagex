import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
// import store from './store'

const store = createStore({
     state(){
          return{
               toggleSwitchStatus:false,
               page:1,
               searchString:'',
          }
     },

})

const app = createApp(App);
app.use(store)

app.mount('#app')
