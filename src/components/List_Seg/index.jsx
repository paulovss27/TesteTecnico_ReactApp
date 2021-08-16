import {
    Ribbon,
    ListItem,
    ListContainer,
    PhotoContainer,
    ProfilePicture
} from "./styles"

import {FiArrowRight } from "react-icons/fi";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import React, { useContext, useState } from 'react';
import { context } from '../../context';

const List_Seg = props =>{
    const ctx = useContext(context);
    const history = useHistory();
  
    async function GetUserData(login){
    const response = await fetch(`https://api.github.com/users/${login}`)
    .then(res => res.json())
    .then((out) => {
    console.log(out);
    ctx.setUserData2(out);
  //  console.log(ctx,"aqui");
}).catch(err => console.error(err))
history.push('userpage2');
}
   
    return (
    <ListContainer>
        <ul>
        {(props?.follow).map(follow => (<ListItem key={follow?.id}>
                <Ribbon />
                <PhotoContainer>
                <ProfilePicture src={follow?.avatar_url} alt={follow?.login}/> 
                </PhotoContainer>
                <h2>#{follow?.login}</h2>
                <FiArrowRight onClick={() => GetUserData(follow?.login)} stroke="white" size={25}/>
        </ListItem>))}
        </ul>
    </ListContainer>

)};

export default List_Seg