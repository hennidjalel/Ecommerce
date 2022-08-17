import styled from "styled-components"
import { mobile } from "../responsive"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { login } from "../redux/apiCalls"
import { useDispatch, useSelector } from "react-redux"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: url(/images/pexels-porapak-apichodilok-346752.jpg) center;
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
    width: 25%;
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
    flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin:  10px  0;
    padding: 10px;
`



const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: #fff;
    cursor: pointer;
    margin-bottom: 10px;
    &:disabled{
        color: green;
        cursor: not-allowed;
    }
`

const Error = styled.span`
    color: red;
`

const StyledLink = styled.a`
    margin: 5px 0;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`


const Login = () => {
    const user = localStorage.getItem("user");


    const navigate = useNavigate();
    useEffect(() => {
        if (!user) navigate('/login');
    }, []);

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const {isFetching, error} = useSelector((state)=> state.user)

    const handleClick = (e) => {
        e.preventDefault()
        const userlogin = {
            username,
            password
        }
        login(dispatch, userlogin)
    }
    return (
        <Container>
            <Overlay>
                <Wrapper>
                    <Title>Login</Title>
                    <Form>
                        <Input placeholder="UserName"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <Input placeholder="Password" type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
                        {error && 
                        <Error> Something went wrong...</Error>}
                            
                        <Link to={"/"}><StyledLink>Forgot Password?</StyledLink> </Link>
                        <Link to={"/register"}><StyledLink>CREATE A NEW ACCOUNT</StyledLink></Link>
                    </Form>
                </Wrapper>
            </Overlay>
        </Container>
    )
}

export default Login