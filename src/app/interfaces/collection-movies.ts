import { Data } from "@angular/router"
import { Movie } from "./movie"

export interface CollectionMovies {
    dates: {
        maximun: Data,
        minimun: Data,
    },
    page: number,
    results: Movie[],
    total_pages: number,
    total_results: number
}
