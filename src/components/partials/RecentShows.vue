<script>
import axios from 'axios';
import { store } from '../../data/store';
import Card from './Card.vue';
import SelectMovieGenreVue from './SelectMovieGenre.vue';
import SelectTvGenreVue from './SelectTvGenre.vue';

export default {
  name:"RecentShows",
  components:{
    Card,
    SelectMovieGenreVue,
    SelectTvGenreVue
  },
  data(){
    return{
      store
    }
  },
  methods:{
    getApiMovie(){
      axios.get(store.apiUrlMovieDiscover,{
        params:{
          api_key: "d54e8cd5bcb7276ad3bc697b09ba5d22",
          query: 2023
        }
      })
      .then((resp)=>{
        store.recentMovies = resp.data.results
      })
      .catch((error)=>{
        console.log("error")
      })
    },
    getApiTv(){
      axios.get(store.apiUrlTvDiscover,{
        params:{
          api_key: "d54e8cd5bcb7276ad3bc697b09ba5d22",
          query: 2023
        }
      })
      .then((resp)=>{
        store.recentTv = resp.data.results
      })
      .catch((error)=>{
        console.log("error")
      })
    }
  },
  mounted(){
    this.getApiTv()
    this.getApiMovie()
  }
}
</script>

<template>
  <div class="container">
    <div class="row mb-5">
      <div class="d-flex justify-content-between">
        <p>I film dell'anno</p>
        <SelectMovieGenreVue />
      </div>
      <Card v-for="show in store.recentMovies" :key="show.id" :title="show.title" :originalTitle="show.original_name" :language="show.original_language" :vote="show.vote_average" :image="show.poster_path" :overview="show.overview" />
    </div>
    
    <div class="row">
      <div class="d-flex justify-content-between">
        <p>Le serie dell'anno</p>
        <SelectTvGenreVue /> 
      </div>
      
      <Card v-for="show in store.recentTv" :key="show.id" :originalTitle="show.original_name" :language="show.original_language" :vote="show.vote_average" :image="show.poster_path" :overview="show.overview" />
    </div>
    
  </div>
  
</template>

<style lang="scss" scoped>
.row{
  display: flex;
  flex-wrap: wrap;

  p{
    text-align: start;
    font-weight: bold;
    font-size: 1.2rem;
  }
}


</style>