<script>
import { store } from '../data/store';
import axios from 'axios';

export default {
  name:"Header",
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
    }
  }
}
</script>

<template>
<header>
  <div class="container">
    <div class="logo">
      <img src="/public/logo-boolflix.png" alt="">
    </div> 
    <div class="search-bar">
      <div class="input-group">
        <input v-model="store.nameToSearch" type="text" class="form-control" placeholder="Inserisci un titolo" aria-label="Search">
      </div>
      <button @click="getApiMovie" type="button" class="btn btn-danger m-3">Search</button>
    </div>
  </div>
</header>
</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

header{
  height: 70px;
  background-color: $background-header;

  .container{
    padding: 0;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo{
    max-width: 140px;

      img{
        width: 100%;
        height: 100%;
      }
    }
    .search-bar{
      display: flex;
      align-items: center;
      .form-control{
        height: 25px;
        padding: 5px 5px;
        border-radius: 5px;
      }
    }
  }
}

</style>