import React from 'react'
import styled from 'styled-components'
import Downarrow from '../../src/Assets/down-arrow.svg'
import blackarrow from '../../src/Assets/Arrow.svg'
import Client1 from '../../src/Assets/client-person1.png'
import Client2 from '../../src/Assets/client-person2.png'

function Testimonials() {
  return (
    <Testimonial>
        <Container>
            <TestimonialTop>
                <TopLeft>
                    <TopLeftHead>Client's Kind Word
                        <SmallKeyword>Testimonial</SmallKeyword>
                    </TopLeftHead>
                </TopLeft>
                <TopCenter>
                    <Textbox>
                        <Line></Line>
                        <Text>we help ambitious business like your generate more profites by building awarness,driving web traffic,connecting with customers and growing overall sales</Text>
                    </Textbox>
                </TopCenter>
                <TopRight>
                    <DownArrowContainer>
                        <DownArrow src={Downarrow}/>
                    </DownArrowContainer>
                    <ArrowContainer>
                        <BlackArrow src={blackarrow}/>
                        <VerticalLine></VerticalLine>
                        <Num>20 +</Num>
                    </ArrowContainer>
                </TopRight>
            </TestimonialTop>
            <TestimonialBottom>
                <ImgBox>
                    <Image src={Client2}/>
                </ImgBox>
                <Description>
                    <DescriptionText>
                        <BoldText>"I've Been Working</BoldText> with casey Exclusively Since 2014 profits by building awarness ,driving web traffic,connecting with customers and growing overall . we help ambitiousA <BoldText> Professional Design </BoldText> business profits by building awarness, driving web traffic,connecting with customers and help ambit As The <BoldText>Visual Desing"</BoldText>
                    </DescriptionText>
                    <ClientName>Mustafa Rahman</ClientName>
                    <JobRole>- CEO Toggle</JobRole>
                </Description>
                <ImgBox>
                    <Image src={Client1}/>
                </ImgBox>
            </TestimonialBottom>
        </Container>
    </Testimonial>
  )
}

export default Testimonials

const Testimonial =styled.div`
    height: auto;
`
const Container =styled.div`
    width: 90%;
    margin: auto;
    @media all and (max-width:640px){
		
    }
`
const TestimonialTop =styled.div`
    display: flex;
    justify-content: space-between;
    @media all and (max-width:640px){
		display: flex;
        flex-wrap: wrap;
    }
`
const TestimonialBottom =styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 50px 0;
    @media all and (max-width:360px){
        display: flex;
        flex-wrap: wrap;
        padding: 15px 0;

    }
`
const TopLeft =styled.div`
    width: 35%;
    @media all and (max-width:640px){
		width: 90%;
        margin:0 auto;
        text-align: center;
    }
    @media all and (max-width:480px){
		width: 100%;
        margin:0 auto;
        text-align: center;
    }
`
const TopCenter =styled.div`
    width: 50%;
    @media all and (max-width:980px){
		display: flex;
        align-items: center;
    }
    @media all and (max-width:640px){
		width: 70%;
        margin:0 auto;
    }
    @media all and (max-width:480px){
		width: 100%;
        margin:0 auto;
    }

`
const TopRight =styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 15%;
    margin:0 auto ;
    @media all and (max-width:1280px){
		width: 20%;
    }
    @media all and (max-width:980px){
		width: 25%;
    }
    @media all and (max-width:480px){
		width: 40%;
        height: 50%;
        padding: 10px 0;
    }
    @media all and (max-width:320px){
		width: 50%;
        height: 50%;
        padding: 10px 0;
    }

`

const TopLeftHead = styled.h2`
	font-size: 67px;
	font-weight: 700;
	width: 75%;
	position: relative;
	@media all and (max-width:1280px){
		width: 90%;
		font-size: 50px;
		font-weight: 700;
    }
	@media all and (max-width:980px){
		width: 90%;
		font-size: 45px;
		font-weight: 700;
    }
	@media all and (max-width:768px){
		width: 80%;
		font-size: 45px;
		font-weight: 700;
    }
	@media all and (max-width:640px){
		width: 95%;
		font-size: 33px;
		font-weight: 700;
    }
	@media all and (max-width:480px){
		width: 80%;
		font-size: 35px;
		font-weight: 700;
        text-align: center;
        margin: 20px auto;

    }
	@media all and (max-width:360px){
		width: 100%;
		font-size: 30px;
		font-weight: 700;
		margin: 24px auto;
    }
	@media all and (max-width:320px){
		width: 100%;
		font-size: 30px;
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
const Textbox = styled.div`
	width: 70%;
	display: flex;
	margin: 50px 0;
	@media all and (max-width:980px){
        width: 100%;
		margin: 25px 0;
	}
    @media all and (max-width:640px){
		width: 95%;
        margin:0 auto;
    }
	@media all and (max-width:480px){
		width: 90%;
	}
`
const Line = styled.span`
	width: 15px;
	height: 2px;
	background-color: #000;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	margin-right: 10px;

`
const Text = styled.p`
	font-size: 15px;
	width: 100%;
	@media all and (max-width:768px){
		margin: auto;
		font-size: 13px;
		width: 90%;

    }
	@media all and (max-width:640px){
		margin: auto;
		font-size: 12px;
    }
	@media all and (max-width:480px){
		margin: auto;
		font-size: 10px;
    }
	@media all and (max-width:360px){
		margin: auto;
		font-size: 9px;
		width: 90%;
    }
`
const DownArrowContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid #5555;
    padding: 10px;
    height: 50px;
    width: 35%;
    border-radius: 50%;
    margin-right: 10px;
    @media all and (max-width:980px){
		height:35px;
        width: 25%;
    }
    @media all and (max-width:480px){
		height:17px;
        width: 20%;
    }
`
const DownArrow = styled.img`
    display: block;
    width: 35%;
    height: auto;
    margin: auto;
`
const ArrowContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid rgb(29, 2, 2);
    padding: 10px;
    height: 50px;
    border-radius: 35px;
    @media all and (max-width:980px){
		height:35px;
    }
    @media all and (max-width:480px){
		height:15px;
        width: 33%;
    }
    @media all and (max-width:320px){
		height:15px;
        width: 33%;
    }
`
const BlackArrow = styled.img`
    width: 20%;
    height: auto;
`
const VerticalLine = styled.span`
    width: 2px;
	height: 20px;
	background-color: #555;
	display: flex;
	justify-content: center;
	align-items: center;
`
const Num = styled.span`
    transform: rotate(-25deg);
    @media all and (max-width:640px){
        font-size: 14px;
    }
    @media all and (max-width:640px){
        font-size: 9px;
    }
`
const ImgBox = styled.div`
    width: 25%;
    margin: 0 auto;
    @media all and (max-width:360px){
        width: 45%;
        padding: 20px;
        margin: auto;
    }
`
const Image = styled.img`
    display: block;
    width: 65%;
    margin: 0 auto;
    @media all and (max-width:786px){
        width: 100%;
    }
`

const Description = styled.div`
    width: 40%;
    padding: 20px 0;
    border-top: 1px solid #555;
    border-bottom: 1px solid #555;
    font-size: 20px;
    @media all and (max-width:980px){
        font-size: 15px;
    }
    @media all and (max-width:768px){
        font-size: 14px;
    }
    @media all and (max-width:640px){
        font-size: 12px;
    }
    @media all and (max-width:480px){
        font-size: 9px;
    }
    @media all and (max-width:360px){
        width: 90%;
        margin: auto;
    }
`
const DescriptionText = styled.p``
const BoldText = styled.span`
    font-weight: 600;
`
const ClientName = styled.h5``
const JobRole = styled.h6``

