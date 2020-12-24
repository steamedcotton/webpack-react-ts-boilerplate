import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
    margin: 100px;
    h1 {
        color: ${({ theme }) => theme.headingFontColor};
        font-family: 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;
        font-size: 60px;
    }

    h2 {
        color: ${({ theme }) => theme.headingFontColor};
        font-family: 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;
        font-size: 45px;
    }
`;

export const Home: FunctionComponent = () => {
    return (
        <HomeContainer>
            <h1>React App</h1>
            <h2>Website</h2>
        </HomeContainer>
    );
};
