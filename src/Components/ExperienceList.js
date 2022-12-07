import React from 'react'
import styled from 'styled-components'

function ExperienceList() {
  return (
    <ExperienceLists>
        <Container>
        <RightBox>
				<Skillhead>Experience</Skillhead>
				<ExperienceTable>
					<TimePeriod>2019-Present</TimePeriod>
					<ExpHead>
						<ExpTitle>Product Designer</ExpTitle>
						<CompanyName>Amazon Inc</CompanyName>
                        <Description> 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illum quos earum sint reiciendis! Nam soluta incidunt vel alias facere cumque earum, corrupti modi aliquid aspernatur ab odit error rerum excepturi illum unde tenetur animi, explicabo laborum! Eveniet nisi at voluptatem, ducimus, repellat, totam nobis porro earum deserunt incidunt distinctio
                        </Description>
					</ExpHead>
				</ExperienceTable>
				<ExperienceTable>
					<TimePeriod>2014-2006</TimePeriod>
					<ExpHead>
						<ExpTitle>UI/UX Designer</ExpTitle>
						<CompanyName>Microsoft</CompanyName>
                        <Description> 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illum quos earum sint reiciendis! Nam soluta incidunt vel alias facere cumque earum, corrupti modi aliquid aspernatur ab odit error rerum excepturi illum unde tenetur animi, explicabo laborum! Eveniet nisi at voluptatem, ducimus, repellat, totam nobis porro earum deserunt incidunt distinctio
                        </Description>
					</ExpHead>
				</ExperienceTable>
				<ExperienceTable>
					<TimePeriod>2014-2006</TimePeriod>
					<ExpHead>
						<ExpTitle>Web UI/UX Designer Designer</ExpTitle>
						<CompanyName>Google</CompanyName>
                        <Description> 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illum quos earum sint reiciendis! Nam soluta incidunt vel alias facere cumque earum, corrupti modi aliquid aspernatur ab odit error rerum excepturi illum unde tenetur animi, explicabo laborum! Eveniet nisi at voluptatem, ducimus, repellat, totam nobis porro earum deserunt incidunt distinctio
                        </Description>
					</ExpHead>
				</ExperienceTable>
				<ExperienceTable>
					<TimePeriod>2014-2006</TimePeriod>
					<ExpHead>
						<ExpTitle>UI Designer</ExpTitle>
						<CompanyName>Facebook</CompanyName>
                        <Description> 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illum quos earum sint reiciendis! Nam soluta incidunt vel alias facere cumque earum, corrupti modi aliquid aspernatur ab odit error rerum excepturi illum unde tenetur animi, explicabo laborum! Eveniet nisi at voluptatem, ducimus, repellat, totam nobis porro earum deserunt incidunt distinctio
                        </Description>
					</ExpHead>
				</ExperienceTable>
                <ExperienceTable>
					<TimePeriod>2014-2006</TimePeriod>
					<ExpHead>
						<ExpTitle>3D Designer</ExpTitle>
						<CompanyName>Facebook</CompanyName>
                        <Description> 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illum quos earum sint reiciendis! Nam soluta incidunt vel alias facere cumque earum, corrupti modi aliquid aspernatur ab odit error rerum excepturi illum unde tenetur animi, explicabo laborum! Eveniet nisi at voluptatem, ducimus, repellat, totam nobis porro earum deserunt incidunt distinctio
                        </Description>
					</ExpHead>
				</ExperienceTable>
                <ExperienceTable>
					<TimePeriod>2014-2006</TimePeriod>
					<ExpHead>
						<ExpTitle>Graphic Designer</ExpTitle>
						<CompanyName>Facebook</CompanyName>
                        <Description> 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illum quos earum sint reiciendis! Nam soluta incidunt vel alias facere cumque earum, corrupti modi aliquid aspernatur ab odit error rerum excepturi illum unde tenetur animi, explicabo laborum! Eveniet nisi at voluptatem, ducimus, repellat, totam nobis porro earum deserunt incidunt distinctio
                        </Description>
					</ExpHead>
				</ExperienceTable>
                <ExperienceTable>
					<TimePeriod>2014-2006</TimePeriod>
					<ExpHead>
						<ExpTitle>Motion Designer</ExpTitle>
						<CompanyName>Facebook</CompanyName>
                        <Description> 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illum quos earum sint reiciendis! Nam soluta incidunt vel alias facere cumque earum, corrupti modi aliquid aspernatur ab odit error rerum excepturi illum unde tenetur animi, explicabo laborum! Eveniet nisi at voluptatem, ducimus, repellat, totam nobis porro earum deserunt incidunt distinctio
                        </Description>
					</ExpHead>
				</ExperienceTable>

			</RightBox>
        </Container>
    </ExperienceLists>
  )
}

export default ExperienceList

const ExperienceLists = styled.div``
const Container = styled.div`
    width: 90%;
    margin: auto;
    padding: 10px 0;
`
const Skillhead = styled.h3`
	font-size: 50px;
    width: 100%;
	margin:10px auto;

	@media all and (max-width:768px){
		font-size: 30px;
    }
`

const RightBox = styled.div`
	width: 100%;
    margin: auto;
	padding: 100px 0;
    @media all and (max-width:980px){
		width: 100%;
		padding: 50px 0;
    }
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
	width: 20%;
	font-size: 20px;
	font-weight: 600;
	@media all and (max-width:786px){
		font-size: 16px;
    }
	@media all and (max-width:640px){
		font-size: 13px;
    }
	@media all and (max-width:360px){
		font-size: 8px;
    }
`
const ExpHead = styled.div`
	width: 78%;
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
	    margin: 13px 0;

    }
    @media all and (max-width:768px){
		font-size: 22px;
	    margin: 11px 0;
    }
	@media all and (max-width:640px){
		font-size: 22px;
	    margin: 10px 0;
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
    @media all and (max-width:360px){
		font-size: 10px;
    }
`
const Description = styled.p`
	font-size: 18px;
    font-weight: 200;
    color: #716e6e;
    margin: 5px auto;
    @media all and (max-width:768px){
		font-size: 13px;
        font-weight: 100;
    }
	@media all and (max-width:480px){
		font-size: 12px;
    }
    @media all and (max-width:360px){
		font-size: 10px;
    }
`