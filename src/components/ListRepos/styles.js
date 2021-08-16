import { FiStar, FiUnlock } from "react-icons/fi"
import styled from "styled-components"

export const ListContainer = styled.div`
overflow-y: scroll;
height:100%;
width: 400px;
ul{
    list-style-type: none;
   
    

}

ul:last-child{
    border-bottom: none;

}

ul:first-child{
    margin-top: 20px;
}
`
export const ListItem = styled.li`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-bottom:1px solid white;
    margin-top: 20px;

    h3{
        font-size: smaller;
        color: white;
        text-align: left;
        padding: 10px 38px;
        font-weight: lighter;
    }

`

export const TitleContainer = styled.div`
display: flex;
flex-direction: row;
padding-left: 0;
align-items: center;

h2{
    padding-left: 20px;
    color: white;
    font-size: smaller;

}
`

export const Ribbon = styled.div`

    position: relative;
    top: 35%;
    background-color: #FFCE00;
    height: 12px;
    width: 12px;

  
    &:after {
    background-color: #FFCE00;
    content: "";
    border-radius: 0 0 75% 0;
    position: absolute;
    width: 12px;
    height: 12px;
    top: 9px;
    left: 0px;
  }

    &:before {
    background-color: #FFCE00;
    content: "";
    border-radius: 0 75% 0 0;
    position: absolute;
    width: 12px;
    height: 12px;
    top: -9px;
    left: 0px;
  }

`
export const LowContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 380px;
    height: 25px;
   // outline: solid white;
    padding: 5px;
    margin: 5px;

`

export const LowSubContainer = styled.div`
display: flex;
flex-direction: row;
//outline: solid green;
padding: 0 5px;
margin: 0 5px;

> *{
    margin: 0 5px;
}

h4{
    font-size: smaller;
        color: white;
        text-align: left;
        font-weight: lighter;
}

`