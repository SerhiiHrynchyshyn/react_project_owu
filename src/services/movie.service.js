import {axiosService} from "./axois.service";
import {urls} from "../config/urls";

export const movieService = {
    getAll: (page) => axiosService.get(`${urls.getAllMovies}&page=${page}`).then(value => value.data),
    getByGenre: (genreId, page) => axiosService.get(`${urls.getAllMovies}&page=${page}&with_genres=${genreId}`).then(value => value.data),

}
