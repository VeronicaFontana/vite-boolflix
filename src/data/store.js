import {reactive} from "vue";

export const store = reactive({
  apiUrlMovie: "https://api.themoviedb.org/3/search/movie?api_key=d54e8cd5bcb7276ad3bc697b09ba5d22", 
  apiUrlTv: "https://api.themoviedb.org/3/search/tv?api_key=d54e8cd5bcb7276ad3bc697b09ba5d22"
})
