<script>
import { store } from '../../data/store';

export default {
  name:"Card",
  data(){
    return{
      store,
      voteRounded: 0
    }
  },
  props:{
    title: String,
    originalTitle: String,
    language: String,
    vote: Number,
    image: String
  }, 
  methods:{
    voteInt(vote){
      return this.voteRounded = Math.round(vote / 2);
    }
  },
  mounted(){
    this.voteInt(this.vote)
  }
}
</script>

<template>
  <div class="col-2">
    <div class="card mb-3">
      <div class="image">
        <div v-if="image === null" class="poster">
          <img src="../../../public/No-Image-Placeholder.svg.png" class="card-img-top" alt="image">
        </div>
        <div v-else class="poster">
          <img :src="'https://image.tmdb.org/t/p/w780' + image" class="card-img-top" alt="image">
        </div>
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
            <li>
              <span v-if="voteRounded == 0">
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </span>
              <span v-else-if="voteRounded == 1">
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </span>
              <span v-else-if="voteRounded == 2">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </span>
              <span v-else-if="voteRounded == 3">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </span>
              <span v-else-if="voteRounded == 4"> 
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </span>
              <span v-else-if="voteRounded == 5">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </span>
            </li>
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
    .poster{
      height: 100%;
      width: 100%;

      img{
        height: 100%;
        width: 100%;
        border-radius: 5px;
      }
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