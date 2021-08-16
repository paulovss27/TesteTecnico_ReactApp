import { FiHome, FiUser } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';
import { FiUsers } from 'react-icons/fi';

import{
    Subcontainer,
    Container
} from "./styles"

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const NavBar = props => {
    const history = useHistory();
    const handleOnClick = route => history.push(route);

    return (
    <Container>
    <Subcontainer onClick={()=> handleOnClick('userpage')}>
    <FiHome size={22}/>
    <h2>Home</h2>
    </Subcontainer>
    <Subcontainer onClick={()=> handleOnClick('repos')}>
    <FiGithub size={22}/>
    <h2>Repos</h2>
    </Subcontainer>
    <Subcontainer onClick={()=> handleOnClick('followers')}>
    <FiUsers size={22}/>
    <h2>Seguidores</h2>
    </Subcontainer>
    <Subcontainer onClick={()=> handleOnClick('following')}>
    <FiUser size={22}/>
    <h2>Seguindo</h2>
    </Subcontainer>
    </Container>
    );
}

export default NavBar