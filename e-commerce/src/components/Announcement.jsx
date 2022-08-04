import React from 'react'
import styled from 'styled-components'

const Continner = styled.div`
    color: #fff;
    background-color: teal;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcement = () => {
    return (
        <Continner>
            Super Deal! Free shipping on all orders over $50
        </Continner>
    )
}

export default Announcement