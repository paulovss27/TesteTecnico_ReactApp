import styled from 'styled-components';

export const Container = styled.main`
    width: 100vw;
    height: 100vh;
    background: rgb(41,41,41);
    padding: 10px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;

    @media (max-height:720px){
    height: 720px;
    }

    @media (min-width:400px){
    width: 400px;
    }
`