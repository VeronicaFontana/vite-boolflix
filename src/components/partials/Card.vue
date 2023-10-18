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
    image: String,
    overview: String
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
          <div>
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
                <i v-for="i in 5" :key="i" class="fa-star" :class="(i <= voteRounded) ? 'fa-solid' : 'fa-regular'"></i>
              </li>
            </ul>
          </div>
          <div class="text">
            <p>{{ overview }}</p>
          </div>
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
        height: 300px;
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
      max-height: 300px;
      background-color: #14141499;
      color: white;
      position: absolute;
      bottom: 0;
      text-align: center;
      padding: 10px 5px;

      ul{
        list-style: none;
        padding: 0;
        font-size: 0.8rem;
        font-style: italic;
        font-weight: bold;

        li{
          margin: 10px 0;
        }

        img{
          width: 25px;
          border-radius: 0px;
        }
      }
      .text{
        max-height: 50%;
        overflow-y: auto;
        font-size: 0.7rem;
      }
    }
  }
}

</style>