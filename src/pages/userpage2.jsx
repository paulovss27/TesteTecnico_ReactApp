import Container from '../components/container';
import UserContainer from '../components/userContainer';
import UserPhoto from '../components/userPhoto'
import UserInfo from '../components/userInfo';
import { UserName } from '../components/userInfo/styles';
import UserNumbers from '../components/userNumbers';
import UserNameTag from '../components/userNameTag';
import UserBio from '../components/userBio';
import NavBar from '../components/navBar';
import React, {useContext} from 'react'
import { context} from '../context';

export default function UserPage2() {
    const ctx = useContext(context);
    return (
        <Container>
            <UserContainer>
            <UserNameTag login={ctx.userData2?.login}/>
            <UserPhoto url={ctx.userData2?.avatar_url} texto_alt={ctx.userData2?.login}/>
            <UserInfo name={ctx.userData2?.name} local={ctx.userData?.location}/>
            <UserNumbers repos={ctx.userData2?.public_repos} followers={ctx.userData2?.followers} following={ctx.userData2?.following}/>
            <UserBio bio={ctx.userData2?.bio}/>
            </UserContainer> 
            <NavBar />
        </Container>
    );
}