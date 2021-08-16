import {
    Container
    } from "./styles"

    import React, { useContext, useState } from 'react';
import { context } from '../../context';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { FiLogIn, FiLogOut } from "react-icons/fi";
    
    const UserNameTag2 = props =>{
        





    const history = useHistory();

    const ctx = useContext(context);

    
    async function GetUserData(login){
            const response = await fetch(`https://api.github.com/users/${login}`)
            .then(res => res.json())
    .then((out) => {
        console.log(out);
        ctx.setUserData(out);

}).catch(err => console.error(err))

        const repos = await fetch(`https://api.github.com/users/${login}/repos`)
        .then(res => res.json())
        .then((repos_out) => {
        console.log(repos_out);
        ctx.setRepos(repos_out);
        }).catch(err => console.error(err))


        const followers = await fetch(`https://api.github.com/users/${login}/followers`)
        .then(res => res.json())
        .then((followers_out) => {
        console.log(followers_out);
        ctx.setFollowers(followers_out);
        }).catch(err => console.error(err))

        const following = await fetch(`https://api.github.com/users/${login}/following`)
        .then(res => res.json())
        .then((following_out) => {
        console.log(following_out);
        ctx.setFollowing(following_out);
        }).catch(err => console.error(err))
        
        history.push('userpage');
    }







        return (       
            <Container>
            <h1>#{props.login}</h1>
            <FiLogIn stroke="green" onClick={() => GetUserData(props.login)} size={25}/>
        </Container>
    );
    }
    
    export default UserNameTag2