import { BASE_URL } from "./constants";

export class APIRepository {

    async popularMovieFetcher() {
        const apiResponse = await fetch(`${BASE_URL}/trailers/popular`);
        return await apiResponse.json()
    }

    async movieSearchFetcher(search) {
        const apiResponse = await fetch(`${BASE_URL}/trailers/search?q=${search}`);
        return await apiResponse.json()
    }

    async movieInfoFetcher(id) {
        const apiResponse = await fetch(`${BASE_URL}/trailers/${id}/info/`);
        return await apiResponse.json()
    }
    
    async movieTrailerFetcher(id) {
        const apiResponse = await fetch(`${BASE_URL}/trailers/${id}/trailer/`);
        return await apiResponse.json()
    }
}