import {
    Container,
    ProfilePicture
} from './styles';

const UserPhoto = props => (
    <Container>
        <ProfilePicture src={props.url} alt={props.texto_alt}/>
    </Container>
);


export default UserPhoto;