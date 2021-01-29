import { Select } from '@chakra-ui/react'
import React from 'react';
import { useSelector } from 'react-redux';

const CharacterSelectSelection = ({ handleChange }) => {
    const { characters } = useSelector((state) => state.characters);

    return (
        <Select
            onChange={handleChange}
            size="md"
            placeholder="Select Character"
            w="120px"
            h="30px">
            {Object.values(characters).map((el, i) => (
                <option key={i} value={el.name}>
                    {el.name}
                </option>
            ))}
        </Select>
    )
}

export default CharacterSelectSelection
