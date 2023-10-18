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
    }
  },
  mounted(){
    this.getMovieGenres()
  }
}
</script>

<template>
  <div>
    <select class="form-select" aria-label="Default select example">
      <option selected value="">Genere</option>
      <option v-for="genre in store.genreMovieArr" :key="genre.id" :value="genre.name">{{ genre.name }}</option>
    </select>
  </div>
</template>

<style>

</style>