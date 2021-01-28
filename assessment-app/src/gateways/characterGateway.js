class characterGateway {
    async getCharacters({ }) {
        const people = await fetch(`https://swapi.dev/api/people/`)
            .then(res => res.json())
        return people;
    }
}

export default characterGateway;