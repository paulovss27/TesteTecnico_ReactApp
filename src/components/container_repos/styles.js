import styled from 'styled-components';

export const Container = styled.main`
    width: 100vw;
    height: 100vh;
    background: #292929;
    display: flex;
    flex-direction: column;
    position: relative;
   // outline: pink solid;
    align-items: center;
    padding: 0;

    @media (max-height:720px){
    height: 720px;
    }

    @media (min-width:400px){
    width: 400px;
    }
`