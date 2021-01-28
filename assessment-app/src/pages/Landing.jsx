import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';
import Banner from '../components/Banner';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Header from '../components/Header';

const AppWrapper = styled(Box)`
    margin: 0 100px;
`;

const Landing = () => {
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