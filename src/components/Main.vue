<script>
import Card from './partials/Card.vue';
import { store } from '../data/store';
import RecentShows from './partials/RecentShows.vue';

export default {
  name:"Main",
  components:{
    Card,
    RecentShows
  },
  data(){
    return{
      store
    }
  }
}
</script>

<template>
  <div class="container my-3">
    <div v-if="store.movieArr.length > 0" class="row">
      <Card v-for="movie in store.movieArr" :key="movie.id" :title="movie.title" :originalTitle="movie.original_title" :language="movie.original_language" :vote="movie.vote_average" :image="movie.poster_path" :overview="movie.overview" />
    </div>
    
    <div v-else-if="store.tvArr.length > 0" class="row">
      <Card v-for="serie in store.tvArr" :key="serie.id" :originalTitle="serie.original_name" :language="serie.original_language" :vote="serie.vote_average" :image="serie.poster_path" :overview="serie.overview" />
    </div>
    <div v-else class="row text">
      <RecentShows />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

.container{
  max-width: 1500px;
  .select{
    margin-bottom: 10px;
  }
  .text{
    color: white;
    text-transform: uppercase;
    text-align: center;
  }
}

</style>