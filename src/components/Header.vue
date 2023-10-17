<script>
import SearchBar from './partials/SearchBar.vue';

export default {
  name:"Header",
  components:{
    SearchBar
  }
}
</script>

<template>
<header>
  <div class="container">
    <div class="logo">
      <img src="/public/logo-boolflix.png" alt="">
    </div> 
    <SearchBar />
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
  }
}

</style>