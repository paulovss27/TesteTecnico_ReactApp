import{
    Container,
    BioContainer,
    BioText,
    Bio,
    Ribbon,
    
} from "./styles"

const UserBio = props => (
<Container>
<BioContainer>
    <Ribbon />
    <Bio>BIO</Bio>
</BioContainer>
<BioText>{props.bio}</BioText>

</Container>

);

export default UserBio