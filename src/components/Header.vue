<script>
import SearchBar from './partials/SearchBar.vue';
import Reset from './partials/Reset.vue';

export default {
  name:"Header",
  components:{
    SearchBar,
    Reset
  }
}
</script>

<template>
<header>
  <div class="container">
    <div class="logo">
      <img src="/public/logo-boolflix.png" alt="">
      <Reset />
    </div> 
    <SearchBar />
    <div class="d-flex align-items-center profile">
      <i class="fa-regular fa-bell"></i>
      <div class="mx-2 user">
        <i class="fa-regular fa-face-smile"></i>
      </div>
      <div class="dropdown">
        <i class="fa-solid fa-chevron-down ms-2" data-bs-toggle="dropdown" aria-expanded="false"></i>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Gestisci profili</a></li>
          <li><a class="dropdown-item" href="#">Trasferisci profilo</a></li>
          <li><a class="dropdown-item" href="#">Account</a></li>
          <li><a class="dropdown-item" href="#">Centro assistenza</a></li>
        </ul>
      </div>
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
    display: flex;
    align-items: center;

      img{
        width: 100%;
        height: 100%;
      }
    }
    .profile{
      color: white;
      font-size: 1.2rem;
      .user{
        background-color: $background-user;
        border-radius: 5px;
        width: 40px;
        height: 35px;
        text-align: center;
        padding: 3px 0;
      }
    }
  }
}

</style>