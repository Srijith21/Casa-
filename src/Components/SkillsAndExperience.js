import React from 'react'
import styled from 'styled-components'
import wireframe from '../../src/Assets/wire-frame.svg'
import visualIcon from '../../src/Assets/visual-icon.svg'
import uxIcon from '../../src/Assets/ux-icon.svg'
import prototype from '../../src/Assets/prototype.svg'
import artDirection from '../../src/Assets/art-direction.svg'
import userResearch from '../../src/Assets/user-research.svg'

function SkillsAndExperience() {
  return (
    <SkillsAndExperienceContainer>
		<Container>
			<LeftBox>
				<SkillsAndExperienceHead>Skills and Experience
					<SmallKeyword>Experience</SmallKeyword>
				</SkillsAndExperienceHead>
				<Textbox>
					<Line></Line>
					<Text>we help ambitious business like your generate more profites by building awarness,driving web traffic,connecting with customers and growing overall sales</Text>
				</Textbox>
				<Skillhead>Skills</Skillhead>
				<SkillContainerUl>
					<SkillContainerItems>
						<SkillImg src={wireframe}/>
						<SkillTitle>wireframe</SkillTitle>
					</SkillContainerItems>
					<SkillContainerItems>
						<SkillImg src={visualIcon}/>
						<SkillTitle>visualDesign</SkillTitle>
					</SkillContainerItems>
					<SkillContainerItems>
						<SkillImg src={uxIcon}/>
						<SkillTitle>User Experience Design</SkillTitle>
					</SkillContainerItems>
					<SkillContainerItems>
						<SkillImg src={prototype}/>
						<SkillTitle>Prototype</SkillTitle>
					</SkillContainerItems>
					<SkillContainerItems>
						<SkillImg src={artDirection}/>
						<SkillTitle>Art Direction</SkillTitle>
					</SkillContainerItems>
					<SkillContainerItems>
						<SkillImg src={userResearch}/>
						<SkillTitle>User Research</SkillTitle>
					</SkillContainerItems>
				</SkillContainerUl>
			</LeftBox>
			<RightBox>
				<Skillhead>Experience</Skillhead>
				<ExperienceTable>
					<TimePeriod>2019-Present</TimePeriod>
					<ExpHead>
						<ExpTitle>Product Designer</ExpTitle>
						<CompanyName>Amazon Inc</CompanyName>
					</ExpHead>
				</ExperienceTable>
				<ExperienceTable>
					<TimePeriod>2014-2006</TimePeriod>
					<ExpHead>
						<ExpTitle>UI/UX Designer</ExpTitle>
						<CompanyName>Microsoft</CompanyName>
					</ExpHead>
				</ExperienceTable>
				<ExperienceTable>
					<TimePeriod>2014-2006</TimePeriod>
					<ExpHead>
						<ExpTitle>Web UI/UX Designer Designer</ExpTitle>
						<CompanyName>Google</CompanyName>
					</ExpHead>
				</ExperienceTable>
				<ExperienceTable>
					<TimePeriod>2014-2006</TimePeriod>
					<ExpHead>
						<ExpTitle>UI Designer</ExpTitle>
						<CompanyName>Facebook</CompanyName>
					</ExpHead>
				</ExperienceTable>
			</RightBox>
		</Container>
    </SkillsAndExperienceContainer>
  )
}

export default SkillsAndExperience

const SkillsAndExperienceContainer = styled.div`
    background-color: #fff;
    height: auto;
`
const Container = styled.div`
	width: 90%;
	margin: auto;
	padding: 20px 0;
	display: flex;
	justify-content: space-between;
	@media all and (max-width:480px){
		display: flex;
		flex-wrap: wrap;
    }
	@media all and (max-width:360px){
		display: flex;
		flex-wrap: wrap;
    }
	@media all and (max-width:320px){
		display: flex;
		flex-wrap: wrap;
    }
`
const LeftBox = styled.div`
	width: 50%;
	@media all and (max-width:480px){
		width: 100%;
    }
	@media all and (max-width:360px){
		width: 100%;
    }
	@media all and (max-width:320px){
		width: 100%;
    }
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
const Skillhead = styled.h3`
	font-size: 45px;
	margin:10px auto;
	@media all and (max-width:768px){
		font-size: 30px;
    }
`
const SkillContainerUl = styled.ul`
	display: flex;
	align-items:center;
	flex-wrap: wrap;
	width: 90%;
	padding: 0;
	margin: auto;
`
const SkillContainerItems = styled.li`
	width: 33%;
	max-height: 115px;
	text-decoration: none;
	list-style: none;
	margin: 15px auto;
    text-align: center;
	@media all and (max-width:768px){
		width: 45%;
    }
`
const SkillImg = styled.img`
	display: block;
	margin: auto;
	@media all and (max-width:980px){
		width: 60%;
    }
	@media all and (max-width:768px){
		width: 45%;
    }
`
const SkillTitle = styled.span`
	font-size: 18x;
	text-align: center;
	@media all and (max-width:980px){
		font-size: 12px;
    }
	@media all and (max-width:360px){
		font-size: 9px;
    }
`
const RightBox = styled.div`
	width: 50%;
	padding: 100px 0;
	@media all and (max-width:480px){
		width: 100%;
		padding: 30px 0;
    }
	@media all and (max-width:360px){
		width: 100%;
		padding: 30px 0;
    }
`
const ExperienceTable = styled.div`
	display: flex;
    justify-content: space-between;
    border-top: 1px solid #848687d4;
    width: 100%;
    margin: auto;
	padding: 20px 0;
	@media all and (max-width:360px){
        padding: 5px 0;
    }
`
const TimePeriod = styled.div`
	width: 30%;
	font-size: 20px;
	font-weight: 600;
	@media all and (max-width:786px){
		font-size: 16px;
    }
	@media all and (max-width:640px){
		font-size: 13px;
    }
	@media all and (max-width:360px){
		font-size: 10px;
    }
`
const ExpHead = styled.div`
	width: 70%;
	@media all and (max-width:360px){
		font-size: 13px;
		padding:0 5px;
    }
`
const ExpTitle = styled.h4`
	font-size: 34px;
	margin: 15px 0;
	@media all and (max-width:980px){
		font-size: 28px;
    }
	@media all and (max-width:640px){
		font-size: 22px;
    }
	@media all and (max-width:480px){
		font-size: 18px;
		margin: 8px 0;
    }
	@media all and (max-width:360px){
		font-size: 20px;
		margin: 8px 0;
    }
	@media all and (max-width:320px){
		font-size: 17px;
		margin: 8px 0;
    }
`
const CompanyName = styled.p`
	font-size: 18px;
    font-weight: 400;
    color: #716e6e;
    margin: 5px auto;
	@media all and (max-width:480px){
		font-size: 12px;
    }
`