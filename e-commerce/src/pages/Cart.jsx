import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { Remove, Add } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div`

`

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({
        padding: "10px",
    })}
`

const Title = styled.h1`
    font_weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
`

const TopTexts = styled.div`
    ${mobile({
        display: "none"
    })}
`
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({
        flexDirection: "column",
    })}
`

const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({
        flexDirection: "column",
    })}
`

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`

const Image = styled.img`
    width: 200px;
`

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const ProductName = styled.span`

`

const ProductId = styled.span`

`

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
`

const ProductSize = styled.span`

`

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const PriceAmountContainer = styled.div`
    display: flex;
    align-items: center;

`

const ProdectAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({
        margin:" 5px 15px"
    })}
`

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({
        marginBottom:"20px"
    })}
`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
    margin-bottom: 20px;
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgrey;
    border-radius: 10px;
    padding: 20px;
    height: 60vh;
`

const SammurayTitle = styled.h1`
font-weight: 200;
`

const SammurayItem = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
`

const SammurayItemTitle = styled.span``

const SammurayItemPrice = styled.span``

const Buttom = styled.button`
    width: 100%;
    padding: 20px;
    background-color: black;
    color: white;
    cursor: pointer;
    font-weight: 600;
`


const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Announcement/>
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>

                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="/images/pexels-terrance-barksdale-10195370.png"/>
                                <Details>
                                    <ProductName> <b>Product:</b> NIKE AIR FORCE 1</ProductName>
                                    <ProductId> <b>ID:</b> 581656584</ProductId>
                                    <ProductColor color="#dfb305"/>
                                    <ProductSize> <b>Size:</b> 39</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <PriceAmountContainer>
                                    <Add />
                                    <ProdectAmount>2</ProdectAmount>
                                    <Remove />
                                </PriceAmountContainer>
                                <ProductPrice> $ 30</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetail>
                                <Image src="/images/Nike-x-Stussy-T-Shirt-Black.png"/>
                                <Details>
                                    <ProductName> <b>Product:</b>Nike x Stussy</ProductName>
                                    <ProductId> <b>ID:</b> 581652284</ProductId>
                                    <ProductColor color="black"/>
                                    <ProductSize> <b>Size:</b> M</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <PriceAmountContainer>
                                    <Add />
                                    <ProdectAmount>1</ProdectAmount>
                                    <Remove />
                                </PriceAmountContainer>
                                <ProductPrice> $ 15</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SammurayTitle>ORDER SAMMURAY</SammurayTitle>
                        <SammurayItem>
                            <SammurayItemTitle>Subtotal</SammurayItemTitle>
                            <SammurayItemPrice>$ 45</SammurayItemPrice>
                        </SammurayItem>
                        <SammurayItem>
                            <SammurayItemTitle>Estimated Shipping</SammurayItemTitle>
                            <SammurayItemPrice>$ 5.90</SammurayItemPrice>
                        </SammurayItem>
                        <SammurayItem>
                            <SammurayItemTitle>Shipping Discount</SammurayItemTitle>
                            <SammurayItemPrice>$ -5.90</SammurayItemPrice>
                        </SammurayItem>
                        <SammurayItem type="total">
                            <SammurayItemTitle>Total</SammurayItemTitle>
                            <SammurayItemPrice>$ 45</SammurayItemPrice>
                        </SammurayItem>
                        <Buttom>CHECKOUT NOW</Buttom>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart