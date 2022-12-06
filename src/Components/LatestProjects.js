import React from 'react'
import styled from 'styled-components'
import ArrowIcon from '../../src/Assets/service-arrow.svg'
import PlantShop from '../../src/Assets/plantshop-landiing-page.jpg'
import Rectangle from '../../src/Assets/Rectangle 7.jpg'
import Rectangle2 from '../../src/Assets/Rectangle 7-1.jpg'
import Seal from '../../src/Assets/view-all-service-seal.svg'

function LatestProjects() {
  return (
    <LatestProject>
        <Container>
            <ProjectBarOne>
                <ProjectHead>Latest Projects</ProjectHead>
                <ProjectDetails>
                    <DetailsTop>
                        <DetailsTopContent>
                            <ContentTitles>Plant Shop Landing page design</ContentTitles>
                            <ContentSmallHead>web/loading page</ContentSmallHead>
                        </DetailsTopContent>
                        <ArrowImageBox src={ArrowIcon}/>
                    </DetailsTop>
                    <DetailsBottom>
                        <BottomImageBox src={PlantShop}/>
                    </DetailsBottom>
                </ProjectDetails>
            </ProjectBarOne>

            <ProjectBarTwo>
                <ProjectDetails>
                    <DetailsTop>
                        <DetailsTopContent>
                            <ContentTitles>VPS Hosting web Design</ContentTitles>
                            <ContentSmallHead>web/loading page</ContentSmallHead>
                        </DetailsTopContent>
                        <ArrowImageBox src={ArrowIcon}/>
                    </DetailsTop>
                    <DetailsBottom>
                        <BottomImageBox src={Rectangle}/>
                    </DetailsBottom>
                </ProjectDetails>
            </ProjectBarTwo>

            <ProjectBarThree>
                <ProjectDetails>
                    <DetailsTop>
                        <DetailsTopContent>
                            <ContentTitles>Book Landing Page Design</ContentTitles>
                            <ContentSmallHead>web/loading page</ContentSmallHead>
                        </DetailsTopContent>
                        <ArrowImageBox src={ArrowIcon}/>
                    </DetailsTop>
                    <DetailsBottom>
                        <BottomImageBox src={Rectangle2}/>
                    </DetailsBottom>
                </ProjectDetails>
            </ProjectBarThree>
            <SealImg src={Seal}/>
        </Container>
    </LatestProject>
  )
}

export default LatestProjects

const LatestProject = styled.div`
    background-color: #FCDA69;
    height: auto;
    padding: 50px 0;
    @media all and (max-width:360px){
        padding: 10px 0;
    }
`
const Container = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    position: relative;
`
const ProjectBarOne = styled.div`
    width: 30%;
`
const ProjectBarTwo = styled.div`
    width: 30%;
    margin-top: 140px;
    @media all and (max-width:360px){
        margin-top: 65px;
    }
`
const ProjectBarThree = styled.div`
    width: 30%;
    margin-top: 70px;
    @media all and (max-width:360px){
        margin-top: 30px;
    }

`
const ProjectHead = styled.h2`
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
		font-size: 25px;
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
const ProjectDetails = styled.div`
    border-top: 1px solid #000;
`
const DetailsTop = styled.div`
    display: flex;
    justify-content: space-between;
`
const DetailsTopContent = styled.div`
    width: 70%;
`
const ContentTitles = styled.h5`
    font-size: 30px;
    padding: 5px 0;
    margin: auto;
    @media all and (max-width:980px){
        font-size: 25px;
    }
    @media all and (max-width:640px){
        font-size: 20px;
    }
    @media all and (max-width:480px){
        font-size: 15px;
    }
    @media all and (max-width:360px){
        font-size: 11px;
    }

`
const ContentSmallHead = styled.p`
    font-size: 15px;
    font-weight: 700;
    @media all and (max-width:980px){
        font-size: 15px;
    }
    @media all and (max-width:768px){
        font-size: 13px;
    }
    @media all and (max-width:640px){
        font-size: 11px;
    }
    @media all and (max-width:480px){
        font-size: 9px;
    }
    @media all and (max-width:480px){
        font-size: 7px;
    }
`
const ArrowImageBox = styled.img`
    width: 20%;
    display: block;
`

const DetailsBottom = styled.div`

`
const BottomImageBox = styled.img`
    display: block;
    width: 100%;
    height: 50%;
`
const SealImg = styled.img`
    width: 20%;
    height: 20%;
    position: absolute;
    right: 10px;
    bottom: 35px;
    @media all and (max-width:980px){
        width: 20%;
        height: 15%;
        position: absolute;
        right: 10px;
        bottom: 10px;
    }
`

