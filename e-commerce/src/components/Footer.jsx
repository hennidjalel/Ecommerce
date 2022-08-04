import styled from "styled-components"
import { Facebook, Instagram, Twitter, Pinterest, EditLocation, LocalPhone, Email } from '@material-ui/icons'
import { mobile } from '../responsive'

const Container = styled.div`
    display: flex;
    box-shadow: 2px 0px 4px rgba(0,0,0,0.1);
    ${mobile({
        flexDirection: "column"
    })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`

`
const Desc = styled.p`
    margin: 20px 0;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #fff;
    background-color: #${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`


const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({
        display: "none"
    })}
`

const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`


const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;
`


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>SHOP.</Logo>
                <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt aut esse saepe rerum, repellendus consequatur est omnis.
                    Ipsam sequi voluptatum autem minus numquam nihil. Sed ab soluta eius ducimus sapiente!
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>

                <Title> Usefu Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account </ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>

            </Center>
            <Right>

                <Title> Contact Us</Title>
                <ContactItem>
                    <EditLocation style={{ marginRight: "10px" }} />    Lorem ipsum dolor sit amet.
                </ContactItem>
                <ContactItem>
                    <LocalPhone style={{ marginRight: "10px" }} />    +1 234 56 78
                </ContactItem>
                <ContactItem>
                    <Email style={{ marginRight: "10px" }} />    Contact@email.com
                </ContactItem>

                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer