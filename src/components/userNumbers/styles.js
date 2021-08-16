import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 80px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #383838;
`

export const NumberContainer = styled.div`
    width: 100px;
    height: 50px;
    display:  flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1{
        font-size: 30px;
        text-align: center;
        font-weight:bold;
        color: white;
        font-family: Verdana, sans-serif;
    }

    h2{
        font-size: 12px;
        text-align: center;
        color:white;
    }

    &:hover{
        cursor: pointer;
        background: rgba(0,0,0,0.03);
        transition: .4s ease;
        border-radius: 10px;


    }
`
