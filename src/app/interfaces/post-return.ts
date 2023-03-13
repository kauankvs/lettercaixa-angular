import { Account } from "./account";

export interface PostReturn {
    profileId: number,
    movieId: number,
    comment: string,
    postId: number,
    profile: Account
}
