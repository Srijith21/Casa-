import React from 'react'
import styled from 'styled-components'

import message from '../../src/Assets/message box-with -bg.svg'
import location from '../../src/Assets/location-with -bg.svg'
import Handwave from '../../src/Assets/Hand-color.svg'
import Arrow from '../../src/Assets/service-arrow.svg'


function EnquiryDiscussion() {
  return (
    <EnquiryDiscussions>
        <Container>
            <ContactBox>
            <RightBox>
                    <InteractionSec>
                        <InteractionBox>
                            <InteractionLeft>
                                <HandImg src={Handwave}/>
                                <TextSpan>Say Hi!</TextSpan>
                            </InteractionLeft>
                            <InteractionRight>
                                <ArrowImg src={Arrow}/>
                            </InteractionRight>
                        </InteractionBox>
                    </InteractionSec>
                </RightBox>
                <LeftBox>
                    <DiscussHead>Let's Discuss your Project
                        <SmallKeyword>Contact</SmallKeyword>
                    </DiscussHead>
                    <ContactTab>
                        <ImgTab>
                            <MessageImg src={message}/>
                        </ImgTab>
                        <ContentTab>
                            <ContactSmallHead>Email</ContactSmallHead>
                            <ContactDetails>Client.tnim@gmail.com</ContactDetails>
                        </ContentTab>
                    </ContactTab>
                    <ContactTab>
                        <ImgTab>
                            <LocationImg src={location}/>
                        </ImgTab>
                        <ContentTab>
                            <ContactSmallHead>Location</ContactSmallHead>
                            <ContactDetails>Washingtottn Ave.Manchester,Kentucky 39495</ContactDetails>
                        </ContentTab>
                    </ContactTab>
                </LeftBox>
            
            </ContactBox>
        </Container>
    </EnquiryDiscussions>
  )
}

export default EnquiryDiscussion

const EnquiryDiscussions = styled.div`
    margin-top: 20px;
    padding: 50px 0;
    @media all and (max-width:480px){
        padding: 10px 0;
    }
    
`
const Container = styled.div`
    width: 90%;
    margin: auto;
    background-color: #FCDA69;
    padding: 50px 0;
    border-radius: 10px;
    @media all and (max-width:480px){
        padding: 20px 0;

    }
`
const ContactBox = styled.div`
    padding: 50px;
    padding-bottom: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media all and (max-width:480px){
        padding: 20px;
    }
    @media all and (max-width:360px){
        padding: 10px;
    }
`
const LeftBox = styled.div`
    width: 40%;
    @media all and (max-width:480px){
        width: 100%;
    }
`
const RightBox = styled.div`
    width: 55%;
    @media all and (max-width:480px){
        width: 100%;
        padding: 20px;
    }
`
const DiscussHead = styled.h2`
	font-size: 67px;
	font-weight: 700;
	width: 80%;
	position: relative;
	@media all and (max-width:1280px){
		width: 90%;
		font-size: 50px;
		font-weight: 700;
    }
	@media all and (max-width:980px){
		width: 100%;
		font-size: 45px;
		font-weight: 700;
    }
	@media all and (max-width:768px){
		width: 100%;
		font-size: 38px;
		font-weight: 700;
    }
	@media all and (max-width:640px){
		width: 100%;
		font-size: 30px;
		font-weight: 700;
    }
	@media all and (max-width:480px){
		width: 100%;
		font-size: 27px;
		font-weight: 700;
        text-align: center;
    }
	@media all and (max-width:360px){
		width: 100%;
		font-size: 24px;
		font-weight: 700;
		margin: 24px auto;
    }
	@media all and (max-width:320px){
		width: 100%;
		font-size: 20px;
		font-weight: 700;
		margin: 24px auto;
		
    }

`
const SmallKeyword = styled.h4`
	font-size: 15px;
	color: #8873EF;
	position: absolute;
	top: -40px;
	left: 10px;
	transform: rotate(-10deg);
	@media all and (max-width:768px){
	font-size: 12px;
	position: absolute;
	top: -30px;
	left: 10px;	
	}
	@media all and (max-width:480px){
	font-size: 10px;
	position: absolute;
	top: -30px;
	left: 10px;	
	}
	@media all and (max-width:360px){
	font-size: 8px;
	position: absolute;
	top: -30px;
	left: 10px;	
	}
`
const ContactTab = styled.div`
    border-top: 2px solid #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
`
const ImgTab = styled.div`
    width: 30%;
    margin:0 auto;
`
const LocationImg = styled.img`
    width: 100%;
    @media all and (max-width:480px){
        width: 50%;
        margin: 0 auto;
    }
`
const MessageImg = styled.img`
    width: 100%;
    @media all and (max-width:480px){
        width: 50%;
        margin: 0 auto;
    }
`
const ContentTab = styled.div`
    margin-left: 20px;
    width: 70%;
    @media all and (max-width:360px){
        width: 90%;
    }
`
const ContactSmallHead = styled.span`
    font-weight: 600;
    font-size: 15px;
    color: #666;
`
const ContactDetails = styled.p`
    font-weight: 700;
    font-size: 15px;
    @media all and (max-width:768px){
        font-weight: 500;
        font-size: 13px;
    }
    @media all and (max-width:360px){
        font-weight: 500;
        font-size: 10px;
    }
`
const InteractionSec = styled.div`
    border: 2px solid #000;
    border-radius: 50%;
    width: 90%;
    margin: auto;
    @media all and (max-width:1280px){
        width: 90%;
    }
`
const InteractionBox = styled.div`
    border-bottom: 2px solid #000;
    margin: 50% auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 75%;
    max-height: 250px;

`
const InteractionLeft = styled.div`
    display: flex;
    align-items: center;
    width: 60%;
`
const InteractionRight = styled.div`
    width: 35%;
    margin: auto;
`
const HandImg = styled.img`
    width: 25%;
    margin: 0 20px ;
    @media all and (max-width:640px){
        margin: 0 15px ;
    }
`
const TextSpan = styled.span`
    font-size: 30px;
    font-weight: 600;
    @media all and (max-width:768px){
        font-weight: 600;
        font-size: 23px;
    }
    @media all and (max-width:640px){
        font-weight: 600;
        font-size: 17px;
    }
`
const ArrowImg = styled.img`
    display: block;
    width: 100%;
`