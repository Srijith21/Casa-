import React from 'react'
import styled from 'styled-components'
import smallArrow from '../../src/Assets/Arrow.svg'
import Telegramfill from '../../src/Assets/Telegram-fill.svg'
import Insta from '../../src/Assets/insta-icon.svg'
import Dribble from '../../src/Assets/dribble-icon.svg'
import Behance from '../../src/Assets/behance-icon.svg'
import LandingVector from '../../src/Assets/landing-page-vector.png'
import PlayIcon from '../../src/Assets/play-icon.svg'
function Spotlight() {
  return (
    <SpotlightSec>
		<Container>
			<SpotlightLeft>
				<SpotlightHead>We have Design Experience
					<SmallKeyword>Spotlight</SmallKeyword>
				</SpotlightHead>
				<Textbox>
					<Line></Line>
					<Text>Hi! iam ui/ux designer--- creating bold and brave interface design for companies all a cross world</Text>
				</Textbox>
				<SpotlightButtons>
					<TalkButton>Let's Talk
						<SmallArrow src={Telegramfill}/>
					</TalkButton>
					<PortfolioButton>Portfolio
						<SmallArrow src={smallArrow}/>
					</PortfolioButton>
				</SpotlightButtons>
				<SocialMedia>
					<SocialMediaSpan>Check out My
						<SocialMediaIcons src={Insta}/>
						<SocialMediaIcons src={Dribble}/>
						<SocialMediaIcons src={Behance}/>
					</SocialMediaSpan>
				</SocialMedia>
			</SpotlightLeft>
			<SpotlightRight>
				<SpotlightImg src={LandingVector}/>
				<PlayImg src={PlayIcon}/>
			</SpotlightRight>
		</Container>
	</SpotlightSec>
  )
}

export default Spotlight

const SpotlightSec =styled.div`
  background-color: #fff;
  height: auto;
  margin-top: 80px;
`
const Container = styled.div`
	width: 90%;
	display: flex;
	justify-content: space-between;
	margin: auto;
	@media all and (max-width:360px){
		display: flex;
		flex-wrap: wrap;
	}
`
const SpotlightLeft = styled.div`
	width: 48%;
	@media all and (max-width:360px){
		width: 90%;
		margin: auto;
	}
`
const SpotlightHead = styled.h2`
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
		font-size: 40px;
		font-weight: 700;
    }
	@media all and (max-width:480px){
		width: 80%;
		font-size: 35px;
		font-weight: 700;
    }
	@media all and (max-width:360px){
		width: 100%;
		font-size: 38px;
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
		font-size: 13px;

    }
	@media all and (max-width:360px){
		margin: auto;
		font-size: 10px;
    }
`
const SpotlightButtons = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 10px 0;
	@media all and (max-width:768px){
		margin: 5px 0;
    }
	@media all and (max-width:360px){
		width: 50%;
		margin: 0 auto;
    }
	@media all and (max-width:360px){
		width: 60%;
		margin: 0 auto;
    }

`
const TalkButton = styled.span`
	background-color: #8873EF;
	padding: 10px 15px;
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 20%;
	margin-right: 15px;
	color: #fff;
	@media all and (max-width:1280px){
		width: 35%;
		font-size: 13px;
		font-weight: 600;
		margin: auto;
    }
	@media all and (max-width:980px){
		width: 35%;
		font-size: 13px;
		font-weight: 600;
		margin: auto;
    }
	@media all and (max-width:768px){
		width: 40%;
		font-size: 13px;
		font-weight: 600;
		margin: auto;
    }
	@media all and (max-width:480px){
		width: 30%;
		font-size: 7px;
		font-weight: 600;
		margin: auto;
		text-align: center;
		padding: 8px 12px;
    }
	@media all and (max-width:360px){
		font-size: 8px;
		font-weight: 600;
		margin: auto;
		text-align: center;
		padding: auto;
    }
`
const SmallArrow = styled.img`
	margin-left: 10px;
	display: block;
	width: 25%;
	height: 50%;
	@media all and (max-width:1280px){
		margin-left: 10px;
		display: block;
		width: 17%;
		height: 50%;
    }
	@media all and (max-width:980px){
		margin-left: 10px;
		display: block;
		width: 22%;
		height: 50%;
    }
`
const PortfolioButton = styled.div`
	display: flex;
	align-items: center;
	font-weight: 700;
	width: 20%;
	margin-left: 8px;
	@media all and (max-width:1280px){
		width: 40%;
		margin: auto;
    }
	@media all and (max-width:980px){
		width: 40%;
		font-size: 13px;
		font-weight: 600;
		margin: auto;
    }
	@media all and (max-width:768px){
		width: 40%;
		font-size: 14px;
		font-weight: 700;
    }
	@media all and (max-width:480px){
		width: 40%;
		font-size: 10px;
		font-weight: 700;
    }
	@media all and (max-width:360px){
		width: 40%;
		font-size: 10px;
		font-weight: 700;
    }
`
const SocialMedia = styled.div`
	margin: 50px 0;
	@media all and (max-width:480px){
		margin: 25px 0;
    }
`
const SocialMediaSpan = styled.span`
	display: flex;
	align-items: center;
	width: 100%;
	font-size: 15px;
	@media all and (max-width:480px){
		font-size: 11px;
    }
	@media all and (max-width:360px){
		font-size: 9px;
    }
`

const SocialMediaIcons = styled.img`
	width: 15%;
	height: 50%;
	margin-left: 10px;
	@media all and (max-width:768px){
		width: 22%;
    }
	@media all and (max-width:640px){
		width: 18%;
    }
`

const SpotlightRight = styled.div`
	position: relative;

`
const SpotlightImg = styled.img`
	display: block;
	width: 100%;
`
const PlayImg = styled.img`
	position: absolute;
	bottom: 30%;
	left: 0px;
	width: 100%;
	height: 20%;
	display: block;
	@media all and (max-width:768px){
		position: absolute;
		bottom: 47%;
		left: 0px;
		width: 100%;
		height: 15%;
		display: block;
    }
	@media all and (max-width:640px){
		position: absolute;
		bottom: 59%;
		left: 0px;
		width: 100%;
		height: 12%;
		display: block;
    }
	@media all and (max-width:360px){
		position: absolute;
		bottom: 27%;
		left: 0px;
		width: 100%;
		height: 26%;
		display: block;
    }
`
