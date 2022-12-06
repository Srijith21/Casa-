import React from 'react'
import styled from 'styled-components'
import logo from '../../src/Assets/casa-logo.svg'
import phoneimg from '../../src/Assets/Call-icon.svg'


import facebook from '../../src/Assets/website2=FACEBOOK.svg'
import linkedin from '../../src/Assets/Linked-in.svg'
import youtube from '../../src/Assets/youtbe.svg'
import twitter from '../../src/Assets/website2=twitter.svg'


function Footer() {
  return (
    <Footersection>
        <Container>
            <TopSection>
                <TopLeft>
                    <Logoimg src={logo}/>
                    <Text>We help ambitious business like your generate more profits by building awarness,driving web traffic,connecting with customers and growing overall sales</Text>
                </TopLeft>
                <TopRight>
                    <FooterTabs>
                        <TabItemOne>
                            <ItemHead>Our Service</ItemHead>
                            <Items>Help Center</Items>
                            <Items>Faq</Items>
                            <Items>Investation</Items>
                            <Items>Blog</Items>
                        </TabItemOne>
                        <TabItemTwo>
                            <ItemHead>Company</ItemHead>
                            <Items>About Us</Items>
                            <Items>Carrer</Items>
                            <Items>Managment</Items>
                            <Items>Blog</Items>
                        </TabItemTwo>
                        <TabItemThree>
                            <ItemHead>Contact Info</ItemHead>
                            <Items>getinfocasa7@gmail.com</Items>
                            <PhoneNumber>
                                <CallIcon src={phoneimg}/>
                                <Number>( +880 0000 445 760 )</Number>
                            </PhoneNumber>
                            <SocialMediaBox>
                                <SocialIcons>
                                    <SocialMediaImage src={facebook}/>
                                </SocialIcons>
                                <SocialIcons>
                                    <SocialMediaImage src={linkedin}/>
                                </SocialIcons>
                                <SocialIcons>
                                    <SocialMediaImage src={youtube}/>
                                </SocialIcons>
                                <SocialIcons>
                                    <SocialMediaImage src={twitter}/>
                                </SocialIcons>
                            </SocialMediaBox>
                        </TabItemThree>
                    </FooterTabs>
                </TopRight>
            </TopSection>
            <BottomSection>
                <BottomLeft>
                    <CoprightText>Copyright @2021 Casa inc.</CoprightText>
                </BottomLeft>
                <BottomRightt>
                    <BottomRightUl>
                        <BottomRightItem>Privacy</BottomRightItem>
                        <BottomRightItem>Security</BottomRightItem>
                        <BottomRightItem>Terms</BottomRightItem>
                    </BottomRightUl>
                </BottomRightt>
            </BottomSection>
        </Container>
    </Footersection>
  )
}

export default Footer

const Footersection = styled.div`
    height: auto;
`
const Container = styled.div`
    width: 90%;
    margin: auto;
`
const TopSection = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 30px 0;
    @media all and (max-width:360px){
        padding: 15px 0;
    }
`
const TopLeft = styled.div`
    width: 30%;
    @media all and (max-width:640px){
        width: 100%;
    }
    @media all and (max-width:480px){
        width: 100%;
        margin: auto;
    }
`
const Logoimg = styled.img`
     @media all and (max-width:640px){
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
    }
    @media all and (max-width:480px){
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
    }
`
const Text = styled.p`
    @media all and (max-width:980px){
        font-size: 12px;
    }
    @media all and (max-width:640px){
        font-size:14px;
        margin: 5px auto;
    }
    @media all and (max-width:360px){
        font-size:8px;
    }
`


const TopRight = styled.div`
    width: 68%;
    @media all and (max-width:640px){
        width: 100%;
    }
    @media all and (max-width:480px){
        width: 100%;
        margin: auto;
    }
`
const FooterTabs = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0;
    width: 100%;
    margin: auto;
`
const TabItemOne = styled.li`
    width: 30%;
    list-style: none;
`
const TabItemTwo = styled.li`
    width: 30%;
    list-style: none;
`
const TabItemThree = styled.li`
    width: 30%;
    list-style: none;

`
const ItemHead = styled.h5`
    font-size: 18px;
    font-weight: 800;
    @media all and (max-width:640px){
        font-size: 15px;
        font-weight: 600;
    }
    @media all and (max-width:360px){
        font-size: 13px;
        font-weight: 500;
    }
    @media all and (max-width:320px){
        font-size: 11px;
        font-weight: 500;
    }
`
const Items = styled.p`
    font-size: 15px;
    font-weight: 600;
    @media all and (max-width:980px){
        font-size: 12px;
        font-weight: 500;
    }
    @media all and (max-width:360px){
        font-size: 9px;
        font-weight: 400;
    }
`
const PhoneNumber = styled.div`
    display: flex;
    margin: 30px 0;
    @media all and (max-width:360px){
        margin: 10px 0;
    }
`
const CallIcon = styled.img`
    width: 10%;
    display: block;
`
const Number = styled.span`
    font-size: 13px;
    font-weight: 600;
    margin-left: 5px;
    @media all and (max-width:768px){
        font-size: 11px;
        font-weight: 500;
        margin-left: 5px;
    }
    @media all and (max-width:640px){
        font-size: 9px;
        font-weight: 600;
        margin-left: 5px;
    }
    @media all and (max-width:360px){
        font-size: 8px;
        font-weight: 600;
        margin-left: 5px;
    }
    @media all and (max-width:320px){
        font-size: 7px;
        font-weight: 600;
        margin-left: 5px;
    }
`
const SocialMediaBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    margin: 15px 0;
    @media all and (max-width:980px){
        width: 100%;
    }
    @media all and (max-width:980px){
        width: 80%;
    }
`
const SocialIcons = styled.div`
    width:25%;
`
const SocialMediaImage = styled.img`
    display: block;
    width: 50px;
    height: 30px;
    margin: auto;
    @media all and (max-width:768px){
        width: 20px;
        height: 30px;
    }
    @media all and (max-width:360px){
        width: 15px;
        height: 25px;
    }
`


const BottomSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 35px;
    margin: 15px auto;
    padding: 10px auto;
    font-size: 15px;
    font-weight: 500;
    border-top: 1px solid rgba(0,0,0,0.2);
    @media all and (max-width:768px){
        font-size: 13px;
        font-weight: 600;
    }
    @media all and (max-width:360px){
        font-size: 9px;
        font-weight: 600;
    }
`   
const BottomLeft = styled.div`
    width: 50%;
`
const CoprightText = styled.p`

`
const BottomRightt = styled.div`
    width: 30%;
    @media all and (max-width:640px){
        width: 40%;
    }
    @media all and (max-width:480px){
        width: 50%;
    }
`
const BottomRightUl = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;

`
const BottomRightItem = styled.li`
    width: 32%;
    list-style: none;
    text-align: center;
    margin: auto;

`
