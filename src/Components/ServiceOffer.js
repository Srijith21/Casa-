import React from 'react'
import styled from 'styled-components'
import ArrowImg from '../../src/Assets/service-arrow.svg'
import Seal from '../../src/Assets/view-all-service-seal.svg'


function ServiceOffer() {
  return (
    <ServiceOfferContainer>
        <Container>
			<LeftBox>
				<OfferHeader>
				Services | Offer
				<SmallKeyword>Service</SmallKeyword>
				</OfferHeader>
				<Textbox>
					<Line></Line>
					<Text>we help ambitious business like your generate more profites by building awarness,driving web traffic,connecting with customers and growing overall sales</Text>
				</Textbox>
				<SealImg src={Seal}/>
			</LeftBox>
			<RightBox>
				<ServiceBox>
					<NumBox>01/</NumBox>
					<TitleBox>
						<ServiceTitle>Web UI/UX Design</ServiceTitle>
						<Explore>Explore</Explore>
					</TitleBox>
					<ArrowBox>
						<ArrowImage src={ArrowImg}/>
					</ArrowBox>
				</ServiceBox>
				<ServiceBox>
					<NumBox>02/</NumBox>
					<TitleBox>
						<ServiceTitle>Mob App UI/UX Design</ServiceTitle>
						<Explore>Explore</Explore>
					</TitleBox>
					<ArrowBox>
						<ArrowImage src={ArrowImg}/>
					</ArrowBox>
				</ServiceBox>
				<ServiceBox>
					<NumBox>03/</NumBox>
					<TitleBox>
						<ServiceTitle>Dashboard & sass Design</ServiceTitle>
						<Explore>Explore</Explore>
					</TitleBox>
					<ArrowBox>
						<ArrowImage src={ArrowImg}/>
					</ArrowBox>
				</ServiceBox>
			</RightBox>
        </Container>
    </ServiceOfferContainer>
  )
}

export default ServiceOffer

const ServiceOfferContainer = styled.div`
    background-color: #FCDA69;
    height: auto;
`
const Container = styled.div`
    width: 90%;
    margin: auto;
	padding: 20px 0;
	display: flex;
	justify-content: space-between;
`
const LeftBox = styled.div`
	width: 48%;
	position: relative;
`
const OfferHeader = styled.h2`
	font-size: 67px;
	font-weight: 700;
	width: 70%;
	position: relative;
	@media all and (max-width:1280px){
		width: 75%;
		font-size: 50px;
		font-weight: 700;
    }
	@media all and (max-width:980px){
		width: 75%;
		font-size: 45px;
		font-weight: 700;
    }
	@media all and (max-width:768px){
		width: 80%;
		font-size: 45px;
		font-weight: 700;
    }
	@media all and (max-width:640px){
		width: 80%;
		font-size: 35px;
		font-weight: 700;
    }
	@media all and (max-width:480px){
		width: 80%;
		font-size: 35px;
		font-weight: 700;
    }
	@media all and (max-width:360px){
		width: 100%;
		font-size: 30px;
		font-weight: 700;
		margin: 24px auto;
    }
	@media all and (max-width:320px){
		width: 100%;
		font-size: 23px;
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
const SealImg = styled.img`
	position: absolute;
    display: block;
    width: 50%;
    height: 20%;
    bottom: 50px;
    left: 0px;
`
const Textbox = styled.div`
	width: 70%;
	display: flex;
	margin: 50px 0;
	@media all and (max-width:480px){
		margin: 25px 0;
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
	@media all and (max-width:768px){
		margin: auto;
    }
	@media all and (max-width:640px){
		margin: auto;
		font-size: 13px;
    }
	@media all and (max-width:360px){
		margin: auto;
		font-size: 10px;
    }
`
const RightBox = styled.div`
	width: 50%;
	padding: 50px 0;
`
const ServiceBox = styled.div`
	width: 100%;
	display: flex;
	margin: 0 auto;
	border-top: 2px solid #000;
	padding: 20px 0;
`
const NumBox = styled.div`
	margin-right: 30px;
	width: 20%;
	font-weight: bold;
	font-size: 20px;
	@media all and (max-width:768px){
		font-size: 17px;
    }
	@media all and (max-width:640px){
		font-size: 15px;
    }
	@media all and (max-width:480px){
		font-size: 13px;
    }
	@media all and (max-width:360px){
		font-size: 12px;
    }

`
const TitleBox = styled.div`
	margin-right: 30px;
	width: 50%;

`
const ArrowBox = styled.div`
	width: 30%;
	display: flex;
	align-items: center;
	justify-content: center;
	@media all and (max-width:1280px){
		width: 30%;
    }
	@media all and (max-width:768px){
		width: 20%;
    }
`
const ArrowImage = styled.img`
	margin-top: 70px;
	width: 30%;
	@media all and (max-width:1280px){
		width: 50%;
    }
	@media all and (max-width:768px){
		width: 70%;
    }
	@media all and (max-width:640px){
		width: 80%;
    }
	@media all and (max-width:360px){
		width: 80%;
		margin-top: 45px;
    }
	@media all and (max-width:360px){
		width: 80%;
		margin-top: 40px;
    }
`
const ServiceTitle = styled.h3`
	display: block;
	font-size: 35px;
	margin: 10px auto;
	@media all and (max-width:1280px){
		font-size: 33px;
    }
	@media all and (max-width:980px){
		font-size: 28px;
    }
	@media all and (max-width:768px){
		font-size: 25px;
    }
	@media all and (max-width:640px){
		font-size: 23px;
    }
	@media all and (max-width:480px){
		font-size: 16px;
    }
	@media all and (max-width:360px){
		font-size: 10px;
    }
	@media all and (max-width:320px){
		font-size: 9px;
    }
`
const Explore = styled.h6`
	font-size: 14px;
	font-weight: bold;
	display: block;
	margin: 10px auto;
	@media all and (max-width:768px){
		font-size: 14px;
    }
	@media all and (max-width:640px){
		font-size: 13px;
    }
	@media all and (max-width:480px){
		font-size: 12px;
    }
	@media all and (max-width:360px){
		font-size: 9px;
    }
	@media all and (max-width:320px){
		font-size: 6px;
    }

`