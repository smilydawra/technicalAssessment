import { Box, Flex, Input, ListItem, OrderedList, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CharacterSelectSelection from './CharacterSelectSelection';

const Content = () => {

    const { characters } = useSelector((state) => state.characters);
    const { movies } = useSelector((state) => state.movies);
    const [characterFilms, setCharacterFilms] = useState([]);
    const [characterFilmsReleaseDate, setCharacterFilmsReleaseDate] = useState([]);
    const [releaseDateMovie, setReleaseDateMovie] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        const data = characters.find((el) => el.name === value);
        const characterMovieTitle = movies.filter((mov) => data.films.includes(mov.url)).map(el => el.title);
        const characterMovieReleaseDate = movies.filter((mov) => data.films.includes(mov.url)).map((el) => el.release_date).sort().pop();
        const releaseDateMovieName = movies.filter((mov) => characterMovieReleaseDate.includes(mov.release_date));
        setReleaseDateMovie(releaseDateMovieName[0].title);
        setCharacterFilmsReleaseDate(characterMovieReleaseDate)
        setCharacterFilms(characterMovieTitle);
    }

    return (
        <Box w="100%" p={4} h="calc(100vh - 48px)" mb={8} >
            <Flex flexDirection="column">
                <Text>Choose Character: </Text>
                <CharacterSelectSelection handleChange={handleChange} />
            </Flex>
            <OrderedList>
                {Object.values(characterFilms).map((el, i) => (
                    <ListItem key={i}>{el}</ListItem>
                ))}
            </OrderedList>
            <Input w="200px" h="30px" placeholder="My last movie..."
                value={characterFilms ? releaseDateMovie + " | " + characterFilmsReleaseDate : <Text>My last movie was...</Text>} />
        </Box >
    )
}

export default Content
