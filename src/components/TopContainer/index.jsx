import {ImgContainer, Img, Container } from "./styles"

import { FiArrowLeft } from "react-icons/fi";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const TopContainer = props => {
    
    const history = useHistory()

    const goBack = () => {
        history.goBack()
      }
      
    return (
    <Container>
    <ImgContainer>
    <FiArrowLeft size={26} stroke="white" onClick={goBack}/>
    </ImgContainer>
    <h1>{props.number}{" " + props.tipo}</h1>
    </Container>

);
}

export default TopContainer