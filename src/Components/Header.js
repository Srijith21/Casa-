import React from 'react'
import { Link} from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../src/Assets/casa-logo.svg'
function Header() {
  return (
    <HeaderBar>
        <Container>
            <HeaderLogo>
                <Linktags to="/">
                    <LogoImg src={Logo}/>
                </Linktags> 
            </HeaderLogo>
            <HeaderNavBar>
                <HeaderNavBarItems>
                    <Linktags to="/">Home</Linktags>
                </HeaderNavBarItems>
                <HeaderNavBarItems>
                    <Linktags to="/">Service Offer</Linktags>
                </HeaderNavBarItems>
                <HeaderNavBarItems>
                    <Linktags to="/experience">Experience</Linktags>
                </HeaderNavBarItems>
                <HeaderNavBarItems>
                    <Linktags to="/projects">Projects</Linktags>
                </HeaderNavBarItems>
                <HeaderNavBarItems>
                    <Linktags to="/enquiry">Contact</Linktags>
                </HeaderNavBarItems>
            </HeaderNavBar>
            <Signing>
                <SigningLeft>
                    <Linktags to="/signin">Sign In</Linktags>
                </SigningLeft>
                <SigningRight>
                <Linktags to="/signup">Sign Up</Linktags>
                </SigningRight>
            </Signing>
        </Container>
    </HeaderBar>
    
  )
}

export default Header

const HeaderBar = styled.div`
    background-color: #fff;
    height: 80px;
    width: 100%;
    position: fixed;
    z-index: 2;
    top: 0;
    display: flex;
    align-items: center;
    
   
`
const Container = styled.div`
    width: 90%;
    margin:auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media all and (max-width:480px){
        display: flex;
        flex-wrap: wrap;
    }
    @media all and (max-width:320px){
        width: 100%;
    }
`
const HeaderLogo = styled.div`
    width: 15%;
    @media all and (max-width:480px){
        width: 50%;
        margin: auto;
    }
    @media all and (max-width:360px){
        display: none;
    }
`
const LogoImg = styled.img`
    display: block;
    width: 50%;
    height: 50px;
    @media all and (max-width:480px){
        width: 20%;
        margin: 0 auto;
    }
    @media all and (max-width:360px){
        width: 18%;
        margin: 0 auto;
    }
`
const HeaderNavBar = styled.ul`
    padding:0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media all and (max-width:480px){
        width: 70%;
        margin:0 auto;
    }
    @media all and (max-width:360px){
        width: 65%;
        margin: auto;
    }
`

const Linktags = styled(Link)`
    color: #000;
    text-decoration: none;
    
`
const HeaderNavBarItems = styled.li`
    color: #000;
    list-style: none;
    font-size: 18px;
    margin-right: 25px;
    &:last-child{
        margin-right: 0;
    }
    &:first-child{
        margin-left: 0;
    }
    &:hover{
        text-decoration: underline;
        font-weight: 500;
    }
    @media all and (max-width:980px){
        font-size:15px;
    }
    @media all and (max-width:640px){
        margin-right:10px;
        font-size: 13px;
    }
    @media all and (max-width:480px){
        margin-right:8px;
        font-size: 11px;
    }
    @media all and (max-width:360px){
        font-size: 9px;
        margin-right:5px;
        color:red;
    }
`
const Signing = styled.div`
    width:15%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    @media all and (max-width:1280px){
        width: 20%;
    }
    @media all and (max-width:980px){
        width: 23%;
        font-size: 15px;
    }
    @media all and (max-width:640px){
        width: 23%;
        font-size: 13px;
    }
    @media all and (max-width:480px){
        font-size: 11px;
        width: 24%;
    }
    @media all and (max-width:360px){
        width: 30%;
        margin: 10px auto;
        font-size: 9px;
    }
    @media all and (max-width:320px){
        width: 28%;
    }
    

`
const SigningLeft = styled.div`
    
`
const SigningRight = styled.div`
    border: 1px solid #000;
    padding: 8px 25px;
    border-radius: 3px;
    display: block;
    &:hover{
        font-weight: bold;
    }
    @media all and (max-width:640px){
        padding: 5px 13px;
    }
    @media all and (max-width:480px){
        padding: 2px 10px;
    }
    @media all and (max-width:320px){
        padding: 1px 8px;
    }
`
