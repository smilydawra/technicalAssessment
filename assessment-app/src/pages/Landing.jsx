import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCharacters } from '../actions/character/character';
import { fetchmovies } from '../actions/movie/movie';
import Banner from '../components/Banner';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Header from '../components/Header';

const AppWrapper = styled(Box)`
    margin: 0 100px;
`;

const Landing = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCharacters({}));
        dispatch(fetchmovies({}));
    }, [dispatch]);

    return (
        <Box>
            <Header />
            <AppWrapper>
                <Banner />
                <Content />
            </AppWrapper>
            <Footer />
        </Box>
    )
}

export default Landing;