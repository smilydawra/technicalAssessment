import { Box, Flex, Input, List, ListItem, Text } from '@chakra-ui/react';
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
        <Box w="100%" p={4} h="259px" mb={8} >
            <Flex flexDirection={["row", "row", "row", "row", "column"]} flexFlow="space=between">
                <Box w="33%" p={5} fontWeight="bold" as="h3">
                    <Flex flexDirection="column">
                        <Text>Choose Character: </Text>
                        <CharacterSelectSelection handleChange={handleChange} />
                    </Flex>
                </Box>
                <Box w="33%" p={5} fontWeight="bold" as="h3">
                    <Text>Character last seen in: </Text>
                    <Input w="200px" h="30px" placeholder="My last movie..."
                        value={characterFilms ? releaseDateMovie + " | " + characterFilmsReleaseDate : <Text>My last movie was...</Text>} />

                </Box>
                <Flex flexDirection={["row", "row", "column", "column", "column"]}>
                    <Box w="100%" p={5}>
                        <Box fontWeight="bold" as="h3" mt="35px">List of Movies:</Box>
                        <List spacing="4" fontWeight="light" pl={0}>
                            {Object.values(characterFilms).map((el, i) => (
                                <ListItem key={i}>{el}</ListItem>
                            ))}
                        </List>
                    </Box>
                </Flex>
            </Flex>
        </Box >
    )
}

export default Content
