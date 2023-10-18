<script>
import { store } from '../../data/store';
import axios from 'axios';

export default {
  name:"SelectTvGenre",
  data(){
    return{
      store
    }
  },
  methods:{
    getTvGenres(){
      axios.get(store.apiUrlTvGenres,{
        params:{
          api_key: "d54e8cd5bcb7276ad3bc697b09ba5d22"
        }
      })
      .then((resp)=>{
        store.genreTvArr = resp.data.genres
      })
      .catch((error)=>{
        console.log("error")
      })
    },
    getTvByGenres(){
      axios.get(store.apiUrlTvDiscover,{
        params:{
          api_key: "d54e8cd5bcb7276ad3bc697b09ba5d22",
          query: store.tvGenreToSearch,
          query: 2023
        }
      })
      .then((resp)=>{
        store.recentTv = resp.data.results
        console.log(store.recentTv)
      })
      .catch((error)=>{
        console.log("error")
      })
    }
  },
  mounted(){
    this.getTvGenres()
  }
}
</script>

<template>
    <div class="d-flex align-items-center">
      <div>
        <select v-model="store.tvGenreToSearch" class="form-select" aria-label="Default select example">
          <option selected value="">Genere</option>
          <option v-for="genre in store.genreTvArr" :key="genre.id" :value="genre.name">{{ genre.name }}</option>
        </select>
      </div>
      <div class="ms-3">
        <button @click="getTvByGenres()">Search</button>
      </div>
    </div>
</template>

<style>

</style>