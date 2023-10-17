<script>
import { store } from '../../data/store';

export default {
  name:"Card",
  data(){
    return{
      store
    }
  },
  props:{
    title: String,
    originalTitle: String,
    language: String,
    vote: Number,
    image: String
  }
}
</script>

<template>
  <div class="col-3">
    <div class="card mb-3">
      <div class="image">
        <img :src="'https://image.tmdb.org/t/p/w780' + image" class="card-img-top" alt="...">
        <div class="card-body">
          <ul>
            <li>{{ title }}</li>
            <li>{{ originalTitle }}</li>
            <li v-if="language === 'en'">
              <img src="/en.png" alt="">
            </li>
            <li v-else-if="language === 'it'">
              <img src="/it.png" alt="">
            </li>
            <li v-else>
              {{ language }}
            </li>
            <li>{{ vote }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../scss/partials/variables" as *;
.card{
  background-color: $background-main;
  position: relative;
  .image{
    width: 100%;
    height: 300px;
    transition: transform .4s;

    &:hover{
      transform: scale(1.1);
      .card-body{
        display: block;
      }
    }
    
    img{
      height: 100%;
      width: 100%;
      border-radius: 5px;
    }
    .card-body{
      display: none;
      width: 100%;
      height: 50%;
      background-color: #14141499;
      color: white;
      position: absolute;
      bottom: 0;
      text-align: center;

      ul{
        list-style: none;
        padding: 0;
        font-size: 0.8rem;
        font-style: italic;
        font-weight: bold;

        img{
          width: 25px;
          border-radius: 0px;
        }
      }
    }
  }
}

</style>