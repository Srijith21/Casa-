import React from 'react'
import styled from 'styled-components'
import Seal from '../../src/Assets/view-all-service-seal.svg'

function EnquirySpotlight() {
  return (
    <EnquirySpotlights>
        <Container>
        <LeftBox>
            <SkillsAndExperienceHead>Touch with Us
					<SmallKeyword>Experience</SmallKeyword>
				</SkillsAndExperienceHead>
				<Textbox>
					<Line></Line>
					<Text>we help ambitious business like your generate more profites by building awarness,driving web traffic,connecting with customers and growing overall sales</Text>
				</Textbox>
            </LeftBox>
            <RightBox>
                <SealImg src={Seal}/>
            </RightBox>
        </Container>
    </EnquirySpotlights>
  )
}

export default EnquirySpotlight

const EnquirySpotlights = styled.div`
    background-color: #FCDA69;
    height: auto;
`
const Container = styled.div`
    width: 90%;
    margin: auto;
    padding: 80px 0 20px;
    display: flex;
    justify-content: space-between;
`
const LeftBox = styled.div`
    width: 60%;
`
const SkillsAndExperienceHead = styled.h2`
	font-size: 67px;
	font-weight: 700;
	width: 60%;
	position: relative;
	@media all and (max-width:1280px){
		width: 60%;
		font-size: 50px;
		font-weight: 700;
    }
	@media all and (max-width:980px){
		width: 60%;
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
		font-size: 38px;
		font-weight: 700;
    }
	@media all and (max-width:480px){
		width: 80%;
		font-size: 30px;
		font-weight: 700;
    }
	@media all and (max-width:360px){
		width: 100%;
		font-size: 27px;
		font-weight: 700;
		margin: 24px auto;
    }
	@media all and (max-width:320px){
		width: 100%;
		font-size: 25px;
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
	font-size: 10px;
	position: absolute;
	top: -30px;
	left: 10px;	
	}
	@media all and (max-width:480px){
	font-size: 8px;
	position: absolute;
	top: -30px;
	left: 10px;	
	}
	@media all and (max-width:360px){
	font-size: 7px;
	position: absolute;
	top: -30px;
	left: 10px;	
	}
`
const Textbox = styled.div`
	width: 90%;
	display: flex;
	margin: 50px 0;
	@media all and (max-width:480px){
		margin: 25px 0;
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
	width: 60%;
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
	@media all and (max-width:320px){
		margin: auto;
		font-size: 9px;
		width: 100%;
    }
    
`
const RightBox = styled.div`
    width: 38%;
    display: flex;
    align-items: center;
    justify-content: center;

`
const SealImg = styled.img`
    display: block;
    width: 50%;
`