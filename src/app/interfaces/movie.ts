export interface Movie {
    adult: boolean,
    id: number,
    genre_ids: number[],
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: Date,
    title: string,
}
