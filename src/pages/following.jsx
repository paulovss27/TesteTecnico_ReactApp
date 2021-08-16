import Container from '../components/container_repos';
import React, {useContext} from 'react'
import { context} from '../context';
import NavBar from '../components/navBar';
import TopContainer from '../components/TopContainer';
import List_Seg from '../components/List_Seg';

export default function Followers() {
    const ctx = useContext(context);
    return (
        <Container>
        <TopContainer number={ctx.userData?.following} tipo={"seguindo"}/>
        <List_Seg follow ={ctx.following}/>
        <NavBar />
        </Container>
    );
}