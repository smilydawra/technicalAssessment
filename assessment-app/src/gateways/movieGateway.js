class moviesGateway {
    async getMovies({ }) {
        const movie = await fetch(`https://swapi.dev/api/films/`)
            .then(res => res.json())
        return movie;
    }
}

export default moviesGateway;