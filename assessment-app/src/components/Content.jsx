import { Box, Flex, Input, ListItem, OrderedList, Select, Text } from '@chakra-ui/react';
import React from 'react';
import CharacterSelectSelection from './CharacterSelectSelection';

const Content = () => {
    return (
        <Box w="100%" p={4} h="calc(100vh - 48px)" mb={8} >
            <Flex flexDirection="column">
                <Text>Choose Character: </Text>
                <CharacterSelectSelection />
            </Flex>
            <OrderedList>
                <ListItem>Lorem ipsum dolor sit amet</ListItem>
                <ListItem>Consectetur adipiscing elit</ListItem>
                <ListItem>Integer molestie lorem at massa</ListItem>
                <ListItem>Facilisis in pretium nisl aliquet</ListItem>
            </OrderedList>
            <Input w="200px" h="30px" placeholder="Basic usage" />
        </Box >
    )
}

export default Content
