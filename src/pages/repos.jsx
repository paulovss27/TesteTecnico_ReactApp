import Container from '../components/container_repos';
import TopContainer from '../components/TopContainer';
import ListRepos from '../components/ListRepos';
import React, {useContext} from 'react'
import { context} from '../context';
import NavBar from '../components/navBar';


export default function Repos() {
    const ctx = useContext(context);
    return (
        <Container>
        <TopContainer number={ctx.userData?.public_repos} tipo={ctx.userData?.public_repos > 1? "repositórios":"repositório"}/>
        <ListRepos repos={ctx.repos}/>
        <NavBar />
        </Container>
    );
}
