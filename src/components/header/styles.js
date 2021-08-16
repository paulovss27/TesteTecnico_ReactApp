import styled from 'styled-components';


export const HeaderTitle = styled.h1`
    margin: 0;
    padding: 15px 0;
    color: #E5E5E5;
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    width: 100%;
`

export const HeaderInputContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const HeaderInput = styled.input`
    width: 100%;
    height: 50px;
    border-radius: 10px;
    border: none;
    margin-top: 30px;
    padding: 0 16px;
    color: #444;
    transition: .4s ease;
    font-size: larger;

    &:focus {
        outline: none;
        transition: .4s ease;
    }

`

export const HeaderSearchButton = styled.button`
    margin-top: 20px;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    border: none;
    background: #FFCE00;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFCE00;
    transition: ease .3s;
    // outline: blue solid;
    color: black;
    font-size: 175%;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
    font-weight: bold;

`