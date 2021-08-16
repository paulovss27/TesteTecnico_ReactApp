import styled from "styled-components"

export const Subcontainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover{
        cursor: pointer;
    }


 h2{
     font-size: 12px;
     padding-top: 8px;
 }



`

export const Container = styled.div`
   display: flex;
   background-color: white;
   border-radius: 20px / 20px 20px 0px 0px;;
   width: 400px;
   height: 60px;
   justify-content: space-evenly;
   align-items: center;
   position: absolute;
   bottom: 0px;


` 