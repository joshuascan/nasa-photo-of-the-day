/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import styled from 'styled-components'

const StyledPhoto = styled.img`
    width: 80%;
    margin: 5%;
    border: 15px outset #0f0f1a;

    transition: all 1.5s ease-in-out;
    &:hover {
        transition: all 1s ease-in-out;
        box-shadow: 15px 15px 50px rgba(167, 40, 173, 0.2), -15px 15px 50px rgba(22, 18, 161, 0.2), -15px -15px 50px rgba(143, 16, 20, 0.5), 15px -15px 50px rgba(12, 119, 135, 0.5);
    }
`

export default function Photo({ data }) {
    return (
        <div className='photo-container'>
            <StyledPhoto
                alt='NASA image of the day'
                src={data.hdurl}
            />
        </div>
    );
};