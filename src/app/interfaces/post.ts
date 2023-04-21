import { Account } from "./account";

export interface Post {
    postId?: number,
    profileId?: number,
    movieId: number,
    comment: string,
    profile?: Account,
}
