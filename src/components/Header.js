import React from 'react';
import styled from 'styled-components'

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2%;
  box-shadow: 0px 10px 30px #1f1f1f;

  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.textColor};

  h1 {
    font-size: calc(40px + 2vmin);
    margin: 0;
    padding-bottom: 2%;
  }

  h2 {
    font-size: calc(16px + 2vmin);
    font-style: italic;
  }
`

export default function Header({ data }) {
    return (
        <StyledHeader>
            <h1>{data.title}</h1>
            <h2>NASA Photo of the Day</h2>
            <h2>{data.date}</h2>
        </StyledHeader>
    )
}