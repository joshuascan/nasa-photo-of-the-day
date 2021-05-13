import React from 'react'
import styled from 'styled-components'

const StyledDescription = styled.div`
    margin: 0 4%;
    margin-bottom: 10%;
    background-color: #272640;
    padding: 1% 2%;
    font-size: 20px;
    color: rgb(218, 218, 218);
    line-height: 1.5;
    font-style: italic;
    font-weight: 500;
    box-shadow: 0px 0px 30px 5px #1f1f1f;
`

export default function Description({ data }) {
    return (
        <StyledDescription>
            <p>{data.explanation}</p>
        </StyledDescription>
    );
};