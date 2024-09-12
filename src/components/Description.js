import React from 'react'
import styled from 'styled-components'

const StyledDescription = styled.div`
    margin: 0 4%;
    margin-bottom: 10%;
    padding: 1% 2%;
    font-size: 22px;
    line-height: 1.5;
    font-style: italic;
    font-weight: 600;
    box-shadow: 0px 0px 30px 5px #1f1f1f;

    background-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.textColor};
`

export default function Description({ data }) {
    return (
        <StyledDescription>
            <p>{data.explanation}</p>
        </StyledDescription>
    );
};