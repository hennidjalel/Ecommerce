import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: url(/images/pexels-andrea-piacquadio-974911.jpg) center;
    background-size: cover;

`
const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(255,255,255,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: #fff;
    ${mobile({
        width: "75%"
    })}
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    padding: 10px;
`

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: #fff;
    cursor: pointer;
`


const Register = () => {
    return (
        <Container>
            <Overlay>
                <Wrapper>
                    <Title>CREATE AN ACCOUNT</Title>
                    <Form>
                        <Input placeholder="Name" />
                        <Input placeholder="Last Name" />
                        <Input placeholder="UserName" />
                        <Input placeholder="Email" />
                        <Input placeholder="Password" />
                        <Input placeholder="Confirm Password" />
                        <Agreement>

                            By creating an account, I consent to the processing of my personal data in 
                            accordance with the <b>PRIVACY POLICY</b>
                        </Agreement>
                        <Button>CREATE ACCOUNT</Button>
                    </Form>
                </Wrapper>
            </Overlay>
        </Container>
    )
}

export default Register