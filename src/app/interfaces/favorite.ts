import { ProfileMovie } from "./profile-movie";

export interface Favorite {
    profileId: number,
    movies: ProfileMovie[]
}
