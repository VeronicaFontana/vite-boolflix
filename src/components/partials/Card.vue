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
    vote: Number
  }
}
</script>

<template>
  <div class="col-3">
    <div class="card mb-3">
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
</template>

<style lang="scss" scoped>

.card{
  width: 100%;
  height: 300px;
  background-color: grey;

  ul{
    list-style: none;
    color: black;

    img{
      width: 25px;
    }
  }
}

</style>