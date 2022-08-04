import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    height: 60px;
    position: sticky;
    top: 0;
    z-index: 999;
    background-color: #fff;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.1);
    ${mobile({
        height: "50px"
    })}
`
const Wrapper = styled.div`
    padding:  10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({
        padding: "10px 0px"
    })}
`
// left
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.div`
    font-size: 14px;
    cursor: pointer;
    ${mobile({
        display: "none"
    })}
`   
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    padding: 5px;
    margin-left: 25px;
    ${mobile({
        marginLeft: "10px"
    })}
`

const Input = styled.input`
    border: none;
    ${mobile({
        width: "50px"
    })}
`
//Center
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({
        fontSize: "24px"
    })}
`


//Right

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({
        justifyContent: "center", flex: "2"
    })}
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 20px;
    ${mobile({
        fontSize: "12px", marginLeft: "10px"
    })}
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>Eng</Language>
                    <SearchContainer>
                        <Input placeholder='Search'/>
                        <Search style={{color: "gray", fontSize:18}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>SHOP.</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>

                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar