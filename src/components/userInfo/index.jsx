import{
    Container,
    NameContainer,
    Email,
    Name,
    Ribbon,
    Local
} from "./styles"

const UserInfo = props => (
<Container>
<NameContainer>
    <Ribbon />
    <Name>{props.name}</Name>
</NameContainer>
<Email>{props.login}</Email>
<Local>{props.local}</Local>
</Container>

);

export default UserInfo