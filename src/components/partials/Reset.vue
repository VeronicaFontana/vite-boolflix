<script>
import { store } from '../../data/store';

export default {
  name:"Reset",
  data(){
    return{
      store
    }
  },
  methods:{
    reset(){
      store.nameToSearch= "";
      store.selectToSearch= "";
      store.movieArr= [],
      store.tvArr= []
    }
  }
}
</script>

<template>
  <div>
    <ul>
      <li @click="reset()">Home</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
ul{
  margin: 0;

  li{
    list-style: none;
    margin-left: 20px;
    color: white;

    &:hover{
      cursor: pointer;
      text-decoration: underline;
    }
  }
}

</style>