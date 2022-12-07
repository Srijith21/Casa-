import React from 'react'
import styled from 'styled-components'

import arrowicon from '../../src/Assets/service-arrow.svg'
import Vps2 from '../../src/Assets/vps 8.jpg'
import Vps6 from '../../src/Assets/vps 6.jpg'
import Vps7 from '../../src/Assets/vps 7.jpg'

function DashBoard() {
  return (
    <DashBoardSec>
        <Container>
		<LeftSec>
			<Heading>Dashboard</Heading>
		</LeftSec>
		<RightSec>
			<UlSec>
				<LiSecOne>
					<TopContentBox>
						<TopText>
							<TextHead>VPS Hosting Web Design</TextHead>
							<TextSmallHead>web/loading page</TextSmallHead>
						</TopText>
						<TopImgBox>
							<TopImg src={arrowicon}/>
						</TopImgBox>
					</TopContentBox>
					<ImgContentBox>
						<MainImg src={Vps6}/>
					</ImgContentBox>
					<TopContentBox>
						<TopText>
							<TextHead>VPS Hosting Web Design</TextHead>
							<TextSmallHead>web/loading page</TextSmallHead>
						</TopText>
						<TopImgBox>
							<TopImg src={arrowicon}/>
						</TopImgBox>
					</TopContentBox>
					<ImgContentBox>
						<MainImg src={Vps7}/>
					</ImgContentBox>
				</LiSecOne>
				<LiSecTwo>
					<TopContentBox>
						<TopText>
							<TextHead>VPS Hosting Web Design</TextHead>
							<TextSmallHead>web/loading page</TextSmallHead>
						</TopText>
						<TopImgBox>
							<TopImg src={arrowicon}/>
						</TopImgBox>
					</TopContentBox>
					<ImgContentBox>
						<MainImg src={Vps2}/>
					</ImgContentBox>

					<TopContentBox>
						<TopText>
							<TextHead>VPS Hosting Web Design</TextHead>
							<TextSmallHead>web/loading page</TextSmallHead>
						</TopText>
						<TopImgBox>
							<TopImg src={arrowicon}/>
						</TopImgBox>
					</TopContentBox>
					<ImgContentBox>
						<MainImg src={Vps7}/>
					</ImgContentBox>
				</LiSecTwo>
			</UlSec>
		</RightSec>
      </Container>
    </DashBoardSec>
  )
}

export default DashBoard

const DashBoardSec= styled.div``

const Container =styled.div`
	width: 90%;
	margin: auto;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`
const LeftSec =styled.div`
	width: 25%;
	position: relative;
`
const RightSec =styled.div`
	width: 60%;
`

const Heading =styled.h2`
	font-size: 65px;
	@media all and (max-width:1280px){
		font-size: 62px;
    }
    @media all and (max-width:980px){
		font-size: 55px;
    }
    @media all and (max-width:768px){
		font-size: 50px;
    }
	@media all and (max-width:640px){
		font-size: 45px;
    }
	@media all and (max-width:480px){
		font-size: 35px;
    }
	@media all and (max-width:360px){
		font-size:25px;
    }
	@media all and (max-width:320px){
		font-size: 15px;
    }
`
const UlSec =styled.div`
	display: flex;
	justify-content: space-between;
`
const LiSecOne =styled.div`
	width: 48%;
	margin: auto;
	list-style: none;
	margin-top: 250px;
	padding:0px 5px;
	@media all and (max-width:640px){
		margin-top: 150px;
    }
	@media all and (max-width:360px){
		margin-top: 100px;
    }
	@media all and (max-width:320px){
		margin-top: 80px;
    }
`
const LiSecTwo =styled.div`
	width: 48%;
	margin:auto;
	list-style: none;
	margin-top: 100px;
	padding:0px 5px;
	@media all and (max-width:640px){
		margin-top: 50px;
    }
	@media all and (max-width:360px){
		margin-top: 30px;
    }
	@media all and (max-width:320px){
		margin-top: 30px;
    }
	
`
const TopContentBox =styled.div`
	display: flex;
	justify-content: space-between;
	padding: 10px 0;
	border-top: 1px solid #000;
`
const TopText =styled.div``
const TextHead =styled.h3`
	font-size: 35px;
	margin: 10px auto;
	@media all and (max-width:980px){
		font-size: 28px;
    }
	@media all and (max-width:768px){
		font-size: 25px;
    }
	@media all and (max-width:640px){
		font-size: 20px;
    }
	@media all and (max-width:480px){
		font-size: 14px;
		margin: 5px auto;

    }
	@media all and (max-width:360px){
		font-size: 10px;
    }
	@media all and (max-width:320px){
		font-size: 8px;
		margin: 5px auto;

    }
`
const TextSmallHead =styled.h6`
	font-size: 20px;
	margin: 20px auto;
	@media all and (max-width:768px){
		font-size: 15px;
    }
	@media all and (max-width:640px){
		font-size: 10px;
    }
	@media all and (max-width:360px){
		font-size: 8px;
		margin: 10px auto;

    }
	@media all and (max-width:320px){
		font-size: 5px;
		margin: 10px auto;

    }
	
`
const TopImgBox =styled.span``
const TopImg =styled.img`
	@media all and (max-width:980px){
		width: 100%;
		display: block;
		margin: auto;
    }
	@media all and (max-width:480px){
		width: 70%;
		margin: auto;
		display: block;
    }
`
const ImgContentBox =styled.div`
	margin-bottom: 40px ;

`
const MainImg =styled.img`
	display: block;
	width: 100%;
	height: 100%;
`
