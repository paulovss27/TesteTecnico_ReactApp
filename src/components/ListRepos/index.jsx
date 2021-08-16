import {
    TitleContainer,
    Ribbon,
    LowSubContainer,
    LowContainer,
    ListItem,
    ListContainer
} from "./styles"

import { FiStar, FiLock, FiUnlock } from "react-icons/fi";

const ListRepos = props =>(
    <ListContainer>
        <ul>
        {(props?.repos).map(repo => (<ListItem key={repo?.id}>
            <TitleContainer>
                <Ribbon />
                <h2>{repo?.name}</h2>
            </TitleContainer>
            <h3>{repo?.description}</h3>
            <LowContainer>
                <LowSubContainer>
                    <FiStar stroke="yellow"/>
                    <h4>{repo?.stargazers_count}</h4>
                </LowSubContainer>
                <LowSubContainer>
                    <FiUnlock stroke="green"/>
                    <FiLock stroke="red"/>
                </LowSubContainer>
            </LowContainer>
        </ListItem>))}
        </ul>
    </ListContainer>

);

export default ListRepos