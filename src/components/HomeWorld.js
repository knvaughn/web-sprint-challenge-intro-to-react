import React from 'react';
import styled from 'styled-components';

const StyledHomeWorld = styled.div`
    margin-top: 20px;

    h4 {
        margin-bottom: 10px;
        font-size: 1.1rem;
    }
`;

const HomeWorld = (props) => {
    const { homeWorld } = props;
    return (
        <StyledHomeWorld>
            {console.log(homeWorld)}
            <h4>Home World: {homeWorld.name}</h4>
            <p>Climate: {homeWorld.climate}</p>
            <p>Population: {homeWorld.population}</p>
            <p>Gravity: {homeWorld.gravity}</p>
        </StyledHomeWorld>
    )
}

export default HomeWorld;