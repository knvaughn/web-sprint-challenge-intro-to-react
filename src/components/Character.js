import React, { useState } from 'react';
import styled from 'styled-components';
import HomeWorld from './HomeWorld';

const StyledCharacter = styled.div`
    background: #2f313e;
    color: #fff;
    border: 4px solid #383a45;
    border-radius: 5px;
    margin: 10px;
    padding: 20px;
    flex: 1;
    text-align: left;
    transition: all 1s linear;
    max-height: 400px;

    h3 {
        text-align: center;
        margin-bottom: 20px;
    }

    p {
        line-height: 2;
    }

    @media(max-width: 1600px) {
        flex: 1 1 30%;
    }

    ${props => props.showHomeWorld && `
        max-height: 1000px;
    `}
`;

const StyledButton = styled.button`
    color: #fff;
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: 2px;
    background: #51535d;
    border: 2px solid transparent;
    margin-top: 10px;
    border-radius: 50px;
    padding: 10px 20px;
    transition: all .2s linear;

    &:hover {
        cursor: pointer;
        border: 2px solid #d8763a;
        transition: all .2s linear;
    }
`;

const Character = (props) => {
    const { character, homeWorld } = props;
    const [showHomeWorld, setShowHomeWorld] = useState(false);

    return (
        <StyledCharacter showHomeWorld={showHomeWorld}>
            <h3>{character.name}</h3>
            <p>Birth Year: {character.birth_year}</p>
            <p>Gender: {character.gender}</p>
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>Eye Color: {character.eye_color}</p>
            <p>Hair Color: {character.hair_color}</p>
            <p>Skin Color: {character.skin_color}</p>
            <StyledButton onClick={() => setShowHomeWorld(!showHomeWorld)}>{showHomeWorld ? 'Hide' : 'Show More'}</StyledButton>
            {
                showHomeWorld && <HomeWorld homeWorld={homeWorld} />
            }
        </StyledCharacter>
    );
}

export default Character;