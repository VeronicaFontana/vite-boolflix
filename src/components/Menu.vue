<script>
import { store } from '../data/store';

export default {
  name:"Menu",
  data(){
    return{
      store
    }
  },
  methods:{
    selectUser(){
      return store.show = true;
    }
  }
}

</script>

<template>
  <div class="main">
    <h1 class="title">Chi vuole guardare?</h1>
    <div class="container">
      <div class="d-flex flex-column align-items-center">
        <div @click="selectUser()" class="user">
          <i class="fa-regular fa-face-smile" style="color: #ffffff;"></i>
        </div>
        <span class="mt-2 fw-bold fs-4">Veronica</span>
      </div>
      <div class="d-flex flex-column align-items-center">
        <div class="add-user">
          <i class="fa-solid fa-plus position-absolute" style="color: #000000;"></i>
        </div>
        <span class="mt-2 fw-bold fs-4">Aggiungi nuovo utente</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

.main{
  height: 100vh;
  background-color: $background-main;
  color: white;
  padding: 50px 0;

  .title{
    text-align: center;
  }

  .container{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    div{
      margin: 0 30px;
    }
    .user, .add-user{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 250px;
      width: 250px;
      margin-bottom: 10px;
      border-radius: 10px;
      transition: transform .4s;

      &:hover{
        cursor: pointer;
        transform: scale(1.1);
      }
    }
    .user{
      background-image: linear-gradient($background-user, #519AED);

      .fa-face-smile{
        font-size: 10rem;
      }
    }
    .add-user{
      background-color: grey;

      .fa-plus{
        font-size: 3rem;
      }
    }
  }
  
}

</style>