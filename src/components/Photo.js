/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import styled from 'styled-components'

const StyledPhoto = styled.img`
    width: 80%;
    margin: 5%;
    border: 15px outset #0f0f1a;
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