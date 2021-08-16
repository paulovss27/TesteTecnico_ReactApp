import styled from "styled-components";



export const Container = styled.div`
    width: 400px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
   // outline: green solid;
`
export const BioContainer = styled.div`
    width: 100%;
    height: 50px;
    //outline: solid pink;
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
`

export const Ribbon = styled.div`
    position: relative;
    top: 35%;
    background-color: #FFCE00;
    height: 16px;
    width: 16px;
    left: -0.6%;

  
    &:after {
    background-color: #FFCE00;
    content: "";
    border-radius: 0 0 75% 0;
    position: absolute;
    width: 16px;
    height: 16px;
    top: 12px;
    left: 0px;
  }

    &:before {
    background-color: #FFCE00;
    content: "";
    border-radius: 0 75% 0 0;
    position: absolute;
    width: 16px;
    height: 16px;
    top: -12px;
    left: 0px;
  }

`

export const Bio = styled.h1`
width: 85%;
font-size: 20px;
font-weight: 700;
color: white;
left: 0;
//outline: blue solid;
text-align: left;
position: relative;
left: -35px;
top: 25%;
font-size: 25px;

`


export const BioText = styled.h2`
    width: 100%;
    text-align: left;
    font-size: 15px;
    font-weight: 250;
    color: white;
    padding: 20px 0 0 25px;
    //outline: white solid;

`

