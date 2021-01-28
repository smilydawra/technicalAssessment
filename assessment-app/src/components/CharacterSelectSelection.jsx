import { Select } from '@chakra-ui/react'
import axios from 'axios';
import React from 'react';

const CharacterSelectSelection = () => {
    const data = () => {
        axios.get().then(response => { console.log("response", response) })
    };


    return (
        <Select size="md" placeholder="Select Character" w="120px" h="30px">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        </Select>
    )
}

export default CharacterSelectSelection
