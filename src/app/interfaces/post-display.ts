export interface PostDisplay {
    profileId: number,
    movieId: number,
    comment: string,  
    profile: {                                                                                                                                                                                                                                      
        username: string,
        firstName: string,
        lastName: string,
        email: string,
        profilePicture: string,
    }
}
