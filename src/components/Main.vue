<script>
import Card from './partials/Card.vue';
import { store } from '../data/store';

export default {
  name:"Main",
  components:{
    Card
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
    <div class="row">
      <Card v-for="movie in store.movieArr" :key="movie.id" :title="movie.title" :originalTitle="movie.original_title" :language="movie.original_language" :vote="movie.vote_average" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

.container{
  border: 1px solid white;
}

</style>