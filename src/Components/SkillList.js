import React from 'react'
import styled from 'styled-components'

import wireframe from '../../src/Assets/wire-frame.svg'
import visualIcon from '../../src/Assets/visual-icon.svg'
import uxIcon from '../../src/Assets/ux-icon.svg'
import prototype from '../../src/Assets/prototype.svg'
import artDirection from '../../src/Assets/art-direction.svg'
import userResearch from '../../src/Assets/user-research.svg'

function SkillList() {
  return (
    <SkillLists>
        <Container>
            <Skillhead>Skills</Skillhead>
        <SkillContainerUl>
					<SkillContainerItems>
						<SkillImg src={wireframe}/>
						<SkillTitle>Wireframe</SkillTitle>
					</SkillContainerItems>
					<SkillContainerItems>
						<SkillImg src={visualIcon}/>
						<SkillTitle>VisualDesign</SkillTitle>
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
        </Container>
    </SkillLists>
  )
}

export default SkillList

const SkillLists = styled.div``
const Container = styled.div`
    width: 90%;
    margin: auto;
    padding: 80px 0;
    @media all and (max-width:980px){
        padding: 40px 0;
    }
    @media all and (max-width:640px){
        padding: 30px 0;
    }
    @media all and (max-width:480px){
        padding: 20px 0;
    }
    @media all and (max-width:360px){
        padding: 10px 0;
    }
`
const Skillhead = styled.h3`
	font-size: 50px;
    width: 100%;
	margin:10px auto;
    border-bottom: 1px solid #000;


	@media all and (max-width:768px){
		font-size: 30px;
    }
`
const SkillContainerUl = styled.ul`
	display: flex;
	align-items:center;
	flex-wrap: wrap;
	width: 80%;
	padding: 30px 0;
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
		width: 33%;
    }
    @media all and (max-width:480px){
		width: 45%;
    }
`
const SkillImg = styled.img`
	display: block;
	margin: auto;
	@media all and (max-width:980px){
		width: 45%;
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