import { Post } from "./post";

export interface Account {
    firstName: string;
    lastName: string;
    email: string;
    profilePicture?: string;
    birth: string;
    username: string;
    password?: string,
    posts?: Post[];
}
