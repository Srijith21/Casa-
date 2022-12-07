import React from 'react'
import styled from 'styled-components'
import Flag from '../../src/Assets/flag.svg'
import WhiteArrow from '../../src/Assets/white-arrow.svg'



function EnquiryForm() {
  return (
    <EnquiryForms>
        <Container>
            <EnquiryHeadSec>
                <EnquiryHeading>Enquiry Form
                    <SmallKeyword> Enquiry Form</SmallKeyword>
                </EnquiryHeading>
            </EnquiryHeadSec>
            <EnquiryTop>
                <InputBoxes>
                    <Label>First Name*</Label>
                    <InputContainer>
                        <Input type="text" placeholder='Enter First Name' name='firstname' id='firstname'/>
                    </InputContainer>
                </InputBoxes>
                <InputBoxes>
                    <Label>Last Name*</Label>
                    <InputContainer>
                        <Input type="text" placeholder='Enter last Name' name='lastname' id='lastname'/>
                    </InputContainer>
                </InputBoxes>
                <InputBoxes>
                    <Label>Phone Number*</Label>
                    <InputContainer>
                        <Flagimg src={Flag}/>
                        <CountryCode>+91</CountryCode>
                        <Input type="number" placeholder='Enter Phone Number' name='phonenumber' id='phonenumber'/>
                    </InputContainer>
                </InputBoxes>
                <InputBoxes>
                    <Label>Emial Address*</Label>
                    <InputContainer>
                        <Input type="email" placeholder='Enter Email Address' name='email' id='email'/>
                    </InputContainer>
                </InputBoxes>
            </EnquiryTop>
            <EnquiryBottom>
                <InputBoxes>
                    <Label>Project Categories*</Label>
                    <SelectContainer>
                        <Options disabled value="">Select Your Categories</Options>
                        <Options value="">WebApp</Options>
                        <Options value="">a</Options>
                        <Options value="">b</Options>
                    </SelectContainer>
                </InputBoxes>
                <InputBoxes>
                    <Label>Project Categories*</Label>
                    <SelectContainer>
                        <Options disabled value="">Select Your Categories</Options>
                        <Options value="">WebApp</Options>
                        <Options value="">a</Options>
                        <Options value="">b</Options>
                    </SelectContainer>
                </InputBoxes>
                <TextBox>
                    <Label>Type Here*</Label>
                    <TextArea maxLength={100} id="textarea" placeholder='type here' name="textarea" rows="4" cols="50"></TextArea>
                </TextBox>
            </EnquiryBottom>
            <SubmitButton>
                <FormButton>Next
                    <RightArrow src={WhiteArrow}/>
                </FormButton>
            </SubmitButton>
        </Container>
    </EnquiryForms>
  )
}

export default EnquiryForm

const EnquiryForms = styled.div``
const Container = styled.div`
    width: 90%;
    margin: auto;
`
const EnquiryHeadSec = styled.div`
    text-align: center;
    margin:20px auto;
`
const EnquiryHeading = styled.h3`
    font-size: 40px;
    position: relative;
    @media all and (max-width:480px){
        font-size: 30px;
        margin: 5px auto;
    }
`
const SmallKeyword = styled.h4`
	font-size: 13px;
	color: #8873EF;
	position: absolute;
    text-align: center;
	top: -38px;
	left: 37%;
	transform: rotate(-10deg);
    @media all and (max-width:1280px){
	font-size: 12px;
	position: absolute;
	top: -30px;
	left: 35%;
	}
    @media all and (max-width:980px){
	font-size: 12px;
	position: absolute;
	top: -30px;
	left: 30%;
	}
    @media all and (max-width:768px){
	font-size: 12px;
	position: absolute;
	top: -25px;
	left: 23%;
	}
	@media all and (max-width:640px){
	font-size: 12px;
	position: absolute;
	top: -30px;
	left: 23%;
	}
	@media all and (max-width:480px){
	font-size: 10px;
	position: absolute;
	top: -25px;
	left: 23%;
	}
	@media all and (max-width:360px){
	font-size: 8px;
	position: absolute;
	top: -25px;
	left: 23%;
	}
`

const EnquiryTop = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: auto;
    padding: 40px 0;
    width: 70%;
    @media all and (max-width:768px){
        width: 100%;
    }
    @media all and (max-width:480px){
        width: 100%;
    }
`
const InputBoxes = styled.div`
    width: 45%;
    margin: 20px;
    @media all and (max-width:980px){
        width: 42%;
    }
    @media all and (max-width:768px){
        width: 40%;
    }
    @media all and (max-width:480px){
        width: 100%;
        margin: 0;
    }
`
const Label = styled.label`
    color:#7d7c7c;
    font-size: 18px;
    @media all and (max-width:480px){
        font-size: 15px;
    }
`
const InputContainer = styled.div`
    border: #555 1px solid;
    border-radius: 10px;
    display: flex;
    align-items: center;
    margin: 10px 0;
    &:hover{
        border: #FCDA69 1px solid;
    }
`
const Input = styled.input`
    border: none;
    border-radius: 10px;
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
`
const Flagimg = styled.img`
    width: 5%;
    height: 5%;
    border-radius: 50%;
    margin: auto 5px
`
const CountryCode = styled.span`
font-size: 12px;
`

/* ................................................ */

const EnquiryBottom = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 20px auto;
    padding: 40px 0;
    width: 70%;
    border-top: #555 1px solid;
    @media all and (max-width:980px){
        padding-bottom: 10px;
    }
    @media all and (max-width:768px){
        width: 100%;
    }
    @media all and (max-width:480px){
        width: 100%;
    }

`
const SelectContainer = styled.select`
    display: flex;
    border-radius: 10px;
    width: 100%;
    margin: 10px auto;;
    padding: 20px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
        border: #FCDA69 1px solid;
    }
`
const Options = styled.option`
    border: none;
    border-radius: 10px;
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
`
/* .................................................... */

const TextBox = styled.div`
    width: 100%;
    margin:20px auto;
    
`
const TextArea = styled.textarea`
    display: flex;
    border-radius: 10px;
    width: 100%;
    margin: 10px auto;
    padding: 20px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    &:hover{
        border-color: #FCDA69 ;
    }
    @media all and (max-width:768px){
        width: 95%;
        margin: 7px auto;

    }
`
const SubmitButton = styled.div`
    width: 70%;
    display: flex;
    justify-content: flex-end;
    margin: 0 auto;
`
const FormButton = styled.button`
    display: flex;
    padding: 15px 80px;
    background-color: #000;
    color: #fff;
    border-radius: 10px;
    @media all and (max-width:768px){
        margin: auto;
    }
`
const RightArrow = styled.img`
    width: 50%;
    height: 13px;
    display: block;
    margin-left: 10px;
`
