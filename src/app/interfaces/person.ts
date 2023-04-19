export interface Person {
    adult: boolean,
    gender: number,
    id: number,
    known_for?: string[],
    known_for_department: string,
    name: string,
    profile_path: string,
    birthday?: string,
    place_of_birth?: string,
    biography?: string,
}
