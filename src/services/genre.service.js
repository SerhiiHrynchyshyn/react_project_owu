import {axiosService} from "./axois.service";
import {urls} from "../config/urls";

export const genreService = {
    // getAll: () => axiosService.get(urls.getAllGenres).then(value => console.log(value.data))
    getAll: () => axiosService.get(urls.getAllGenres).then(value => value.data.genres)

}
