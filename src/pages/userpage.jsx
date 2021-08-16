import Container from '../components/container';
import UserContainer from '../components/userContainer';
import UserPhoto from '../components/userPhoto'
import UserInfo from '../components/userInfo';
import { UserName } from '../components/userInfo/styles';
import UserNumbers from '../components/userNumbers';
import UserNameTag2 from '../components/userNameTag2';
import UserBio from '../components/userBio';
import NavBar from '../components/navBar';
import React, {useContext} from 'react'
import { context} from '../context';

export default function UserPage() {
    const ctx = useContext(context);
    return (
        <Container>
            <UserContainer>
            <UserNameTag2 login={ctx.userData?.login}/>
            <UserPhoto url={ctx.userData?.avatar_url} texto_alt={ctx.userData?.login}/>
            <UserInfo name={ctx.userData?.name} local={ctx.userData?.location}/>
            <UserNumbers repos={ctx.userData?.public_repos} followers={ctx.userData?.followers} following={ctx.userData?.following}/>
            <UserBio bio={ctx.userData?.bio}/>
            </UserContainer> 
            <NavBar />
        </Container>
    );
}