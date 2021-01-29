import { Box } from '@chakra-ui/react';
import React from 'react';

const Header = () => {
    return (
        <Box
            as="nav"
            w="100%"
            h="40px"
            bgColor="#40320d"
            color="#fff"
            textAlign="center"
            lineHeight="2.2rem">
            &#x235F; Star Wars 	&#x235F;
        </Box>
    )
}

export default Header;