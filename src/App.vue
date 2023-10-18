<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Menu from './components/Menu.vue';
import { store } from './data/store';

export default {
  name:"App",
  data(){
    return{
      store
    }
  },
  components:{
    Header,
    Main,
    Menu
  }
}
</script>

<template>
  <Menu v-if="store.show === false" />  
  <div v-else>
    <Header />
    <Main />
  </div>
  
</template>

<style lang="scss">

@use "../src/scss/main.scss";

</style>