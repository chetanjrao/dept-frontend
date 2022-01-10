export class APIRepository {

    constructor(){
        this.baseURL = 'https://dept-api.lymne.com'
    }

    async popularMovieFetcher() {
        const apiResponse = await fetch(`${this.baseURL}/trailers/popular`);
        return await apiResponse.json()
    }

    async movieSearchFetcher(search) {
        const apiResponse = await fetch(`${this.baseURL}/trailers/search?q=${search}`);
        return await apiResponse.json()
    }

    async movieInfoFetcher(id) {
        const apiResponse = await fetch(`${this.baseURL}/trailers/${id}/info/`);
        return await apiResponse.json()
    }
    
    async movieTrailerFetcher(id) {
        const apiResponse = await fetch(`${this.baseURL}/trailers/${id}/trailer/`);
        return await apiResponse.json()
    }
}