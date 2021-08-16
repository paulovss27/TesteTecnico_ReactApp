import {
    Container
    } from "./styles"

import { FiLogIn, FiLogOut } from "react-icons/fi";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

    const UserNameTag = props =>{
        const history = useHistory();
        const handleOnClick2 = a => history.push('');

        return (
        <Container>
            <h1>#{props.login}</h1>
            <FiLogOut stroke="red" size={25} onClick={handleOnClick2}/>
        </Container>
    );
    }
    
    export default UserNameTag