import { FiArrowRight } from 'react-icons/fi';
import { ReactComponent as Logo } from '../../icons/github.svg';
import React, { useContext, useState } from 'react';
import { context } from '../../context';
import {
    HeaderInputContainer,
    HeaderInput,
    HeaderSearchButton
} from './styles';

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Header = () => {
    const history = useHistory();
    const handleOnClick = a => history.push('userpage');
    const ctx = useContext(context);
    const [searchedValue, setSearchedValue] = useState("");
    //console.log(ctx, "oia");
    async function getUserData(){
            const response = await fetch(`https://api.github.com/users/${searchedValue}`)
            .then(res => res.json())
    .then((out) => {
        console.log(out);
        ctx.setUserData(out);
      //  console.log(ctx,"aqui");
}).catch(err => console.error(err))

        const repos = await fetch(`https://api.github.com/users/${searchedValue}/repos`)
        .then(res => res.json())
        .then((repos_out) => {
        console.log(repos_out);
        ctx.setRepos(repos_out);
        }).catch(err => console.error(err))


        const followers = await fetch(`https://api.github.com/users/${searchedValue}/followers`)
        .then(res => res.json())
        .then((followers_out) => {
        console.log(followers_out);
        ctx.setFollowers(followers_out);
        }).catch(err => console.error(err))

        const following = await fetch(`https://api.github.com/users/${searchedValue}/following`)
        .then(res => res.json())
        .then((following_out) => {
        console.log(following_out);
        ctx.setFollowing(following_out);

      
        }).catch(err => console.error(err))
        
        
    //     function teste(){if(ctx.userData.login == searchedValue){
    //         handleOnClick();
        
    //     } else{
           
    //         console.log("não achou")
    //     }
    // }

    //setTimeout(teste, 1000);
    }
    
    return (
    
        <HeaderInputContainer>
            <Logo fill="#FFCE00" height="120px"/>
        
            <HeaderInput required placeholder="Usuário" value={searchedValue} onChange={e => setSearchedValue(e.target.value)}/>
            <HeaderSearchButton onClick={getUserData}>ENTRAR<FiArrowRight size={30} /></HeaderSearchButton>
            
        </HeaderInputContainer>
);
}

export default Header;