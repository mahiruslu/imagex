import Vuex from 'vuex';
import Vue from 'vue';
import Card from './modules/card';

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        Card
    }
})