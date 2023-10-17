<script>
import axios from 'axios';
import { store } from '../../data/store';
import Card from './Card.vue';

export default {
  name: "Continue",
  data(){
    return{
      store
    }
  },
  components:{
    Card
  }
}
</script>

<template>
  <div class="container">
    <div>
      <Card v-for="show in store.recentMovies" :key="show.id" :title="show.title" :originalTitle="show.original_name" :language="show.original_language" :vote="show.vote_average" :image="show.poster_path" />
      <span>misura</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>