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
    flex-direction: row;
    border-bottom:1px solid white;
    margin-top: 20px;
    justify-content: space-between;
    align-items: center;

    h2{
        font-size: smaller;
        color: white;
        text-align: left;
        padding: 10px 38px;
        font-weight: lighter;
    }

`

export const PhotoContainer = styled.div`



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

export const ProfilePicture = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 2px solid #FFF;
    position: relative;
   // outline: blue solid;
`