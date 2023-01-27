import { Person } from "./person";

export interface CollectionPerson {
    page: number,
    results: Person[],
    total_pages: number,
    total_results: number
}
