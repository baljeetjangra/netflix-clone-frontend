const API_KEY = "887a1e3d91b106f455cd78ef9d002730";
const BASE_URL = "https://api.themoviedb.org/3";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovie: `/discover/movie?api_key=${API_KEY}&with_genere=28`,
  fetchComedyMovie: `/discover/movie?api_key=${API_KEY}&with_genere=35`,
  fetchHorrorMovie: `/discover/movie?api_key=${API_KEY}&with_genere=27`,
  fetchRomanceMovie: `/discover/movie?api_key=${API_KEY}&with_genere=10749`,
  fetchDocumeteries: `/discover/movie?api_key=${API_KEY}&with_genere=99`,
};

export default requests;
