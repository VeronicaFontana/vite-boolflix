<script>
import axios from 'axios';
import { store } from '../../data/store';

export default {
  name:"SearchBar",
  data(){
    return{
      store
    }
  },
  methods:{
    getApiMovie(){
      axios.get(store.apiUrlMovie,{
        params:{
          api_key: "d54e8cd5bcb7276ad3bc697b09ba5d22",
          query: store.nameToSearch
        }
      })
      .then((resp)=>{
        console.log(resp.data.results)
        store.movieArr = resp.data.results
      })
      .catch((error)=>{
        console.log("error")
      })
    },
    getApiTv(){
      axios.get(store.apiUrlTv,{
        params:{
          api_key: "d54e8cd5bcb7276ad3bc697b09ba5d22",
          query: store.nameToSearch
        }
      })
      .then((resp)=>{
        console.log(resp.data.results)
        store.tvArr = resp.data.results
      })
      .catch((error)=>{
        console.log("error")
      })
    },
    MovieOrTv(){
      if(store.selectToSearch === "Serie TV"){
        console.log("serie tv");
        store.movieArr = [];
        this.getApiTv();
      }else if(store.selectToSearch === "Film"){
        console.log("film");
        store.tvArr = [];
        this.getApiMovie();
      }
    }
  }
}
</script>

<template>
  <div class="search-bar col-5">
    <select v-model="store.selectToSearch" class="form-select" aria-label="Default select example">
      <option selected value="">Seleziona</option>
      <option value="Serie TV">Serie TV</option>
      <option value="Film">Film</option>
    </select>
    <div class="input-group">
      <input v-model="store.nameToSearch" type="text" class="form-control" placeholder="Inserisci un titolo" aria-label="Search">
    </div>
    <button @click="MovieOrTv" type="button" class="btn btn-danger m-3">Search</button>
  </div>
</template>

<style lang="scss" scoped>
.search-bar{
  display: flex;
  align-items: center;
  justify-content: end;

  .form-select{
    margin-left: 10px;
    padding: 5px 5px;
    border-radius: 5px;
  }

  .input-group{
    .form-control{
      padding: 5px 5px;
      margin-left: 10px;
      border-radius: 5px;
    }
  }
}
</style>