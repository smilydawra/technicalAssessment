class moviesGateway {
    async getCharacters({ }) {
        const movie = await fetch(`https://swapi.dev/api/films/`)
            .then(res => res.json())
        return movie;
    }
}

export default moviesGateway;