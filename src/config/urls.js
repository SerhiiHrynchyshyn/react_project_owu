const baseURL = 'https://api.themoviedb.org/3';

export const imageUrl = 'https://image.tmdb.org/t/p/original';
export const apiKey = '?api_key=1f316bb67984ad3ff877ae96e33a7b68';

export const urls = {
    getAllGenres: `/genre/movie/list${apiKey}`,
    getAllMovies: `/discover/movie${apiKey}`,
    oneMovie: '/movie'
}

export default baseURL;


