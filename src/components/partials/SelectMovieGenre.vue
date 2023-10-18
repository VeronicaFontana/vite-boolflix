<script>
import { store } from '../../data/store';
import axios from 'axios';

export default {
  name:"SelectMovieGenre",
  data(){
    return{
      store
    }
  },
  methods:{
    getMovieGenres(){
      axios.get(store.apiUrlMovieGenres,{
        params:{
          api_key: "d54e8cd5bcb7276ad3bc697b09ba5d22"
        }
      })
      .then((resp)=>{
        store.genreMovieArr = resp.data.genres
      })
      .catch((error)=>{
        console.log("error")
      })
    },
    getMovieByGenres(){
      axios.get(store.apiUrlMovie,{
        params:{
          api_key: "d54e8cd5bcb7276ad3bc697b09ba5d22",
          query: 2023,
          query: store.movieGenreToSearch
        }
      })
      .then((resp)=>{
        store.recentMovies = resp.data.results
      })
      .catch((error)=>{
        console.log("error")
      })
    }
  },
  mounted(){
    this.getMovieGenres()
  }
}
</script>

<template>
  <div class="d-flex align-items-center">
    <div class="me-2">
      <select v-model="store.movieGenreToSearch" class="form-select" aria-label="Default select example">
        <option selected value="">Genere</option>
        <option v-for="genre in store.genreMovieArr" :key="genre.id" :value="genre.name">{{ genre.name }}</option>
      </select>
    </div>
    <div>
      <button @click="getMovieByGenres()">Search</button>
    </div>
  </div>
  
</template>

<style>

</style>