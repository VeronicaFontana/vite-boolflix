import {reactive} from "vue";

export const store = reactive({
  apiUrlMovie: "https://api.themoviedb.org/3/search/movie", 
  apiUrlTv: "https://api.themoviedb.org/3/search/tv",
  movieArr: [],
  tvArr: [],
  nameToSearch: "",
  selectToSearch: "",
  apiUrlMovieDiscover: "https://api.themoviedb.org/3/discover/movie",
  apiUrlTvDiscover: "https://api.themoviedb.org/3/discover/tv",
  recentMovies: [],
  recentTv: []
})
