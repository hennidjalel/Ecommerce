import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { Remove, Add } from "@material-ui/icons";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";


const KEY = process.env.REACT_APP_STIPE;


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
    margin: " 5px 15px"
})}
`

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({
    marginBottom: "20px"
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

    const cart = useSelector(state => state.cart);

    const [stripeToken, setStripeToken] = useState(null);

    const navigate = useNavigate();

    const onToken = (token) => {
        setStripeToken(token);
    }


    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await userRequest.post("/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: 500,
                })
                navigate("/success", {
                    stripeData: res.data,
                    // products: cart,
                });
            } catch { }
        }
        stripeToken && makeRequest(); // if stripeToken exist call the function
    }, [stripeToken, cart.total, navigate])

    return (

        <Container>
            <Navbar />
            <Announcement />
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
                        {cart.products.map((product) => (
                            <Product>
                                <ProductDetail>
                                    <Image src={product.img} />
                                    <Details>
                                        <ProductName> <b>Product:</b> {product.title}</ProductName>
                                        <ProductId> <b>ID:</b> {product._id}</ProductId>
                                        <ProductColor  color={product.color} />
                                        <ProductSize> <b>Size:</b> {product.size}</ProductSize>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <PriceAmountContainer>
                                        <Add />
                                        <ProdectAmount>{product.quantity}</ProdectAmount>
                                        <Remove />
                                    </PriceAmountContainer>
                                    <ProductPrice> $ {product.price * product.quantity}</ProductPrice>
                                </PriceDetail>
                            </Product>
                        ))}
                        <Hr />

                    </Info>
                    <Summary>
                        <SammurayTitle>ORDER SAMMURAY</SammurayTitle>
                        <SammurayItem>
                            <SammurayItemTitle>Subtotal</SammurayItemTitle>
                            <SammurayItemPrice>$ {cart.total}</SammurayItemPrice>
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
                            <SammurayItemPrice>$ {cart.total}</SammurayItemPrice>
                        </SammurayItem>
                        <StripeCheckout
                            name="Shop."
                            image="https://i.ibb.co/j5NSXx6/stripe-avis-prix-alternatives-logiciel.webp"
                            billingAddress
                            shippingAddress
                            description={`Your total is $ ${cart.total}`}
                            amount={cart.total * 100}
                            token={onToken}
                            stripeKey={KEY}
                        >

                            <Buttom>CHECKOUT NOW</Buttom>
                        </StripeCheckout>

                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart