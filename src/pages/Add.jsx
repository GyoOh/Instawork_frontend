import { PageWrapper, PageContainer, TitleWrapper, Title } from "../styles/page.style";
import { ListContainer, ListWrapper } from "../styles/list.style";
import { AddHeader, AddHeaderWrapper, AddSubHeader, ButtonDiv, InfoForm, InfoInput, InfoTitle, InfoWrapper, RadioDiv, RadioInput, RadioLabel, RadioUnactiveLabel, RadioWrapper, ErrorMsg } from "../styles/add.style";
import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 12,
    padding: '10px 24px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#4E6FEF',
    borderColor: '#0063cc',
    fontFamily: [
      'Arial',
      'sans-serif',
    ].join(','),
    '&:hover': {
      backgroundColor: '#5F7CFE',
      borderColor: '#5F6CFE',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#5F7CFE',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });
  
export default function Add() {
    const navigate = useNavigate();
    const [role, setRole] = useState('Regular');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [fistNameError, setFirstNameError] = useState(' ');
    const [lastNameError, setLastNameError] = useState(' ');
    const [emailError, setEmailError] = useState(' ');
    const [phoneNumberError, setPhoneNumberError] = useState(' ');
    const handleChange = (event) => {
        setRole(event.target.value);
      };
    const firstNameHandler = (event) => {
        setFirstName(event.target.value);
    }
    const lastNameHandler = (event) => {
        setLastName(event.target.value);
    }
    const emailHandler = (event) => {
        setEmail(event.target.value);
    }
    const phoneNumberHandler = (event) => {
        setPhone(event.target.value);
    }
    const submitHandler = async (event) => {
        event.preventDefault();
        if (firstName.length < 1) {
            setFirstNameError('First name is required');
            return;
        } else {
            setFirstNameError(' ');
        }
        if (lastName.length < 1) {
            setLastNameError('Last name is required');
            return;
        } else {
            setLastNameError(' ');
        }
        if (email.length < 1) {
            setEmailError('Email is required');
            return;
        } else if (!email.includes('@')) {
            setEmailError('Email is not valid');
            return;
        } else {
            setEmailError(' ');
        }

        if (phone.length < 10) {
            setPhoneNumberError('Phone number is required');
            return;
        } else {
            setPhoneNumberError(' ');
        }
            try {
                const result = await axios.post('http://localhost:8000/user', {
                name : firstName + ' ' + lastName,
                phone,
                email,
                role
                })
                navigate('/', { replace: true });
              } catch (error) {
                console.log(error);
              }
    
  }
    
    return (
        <PageWrapper>
       <PageContainer>
        <TitleWrapper>
            <Title> Add page</Title>
        </TitleWrapper>
        <ListContainer>
            <ListWrapper>
                <AddHeaderWrapper>
                    <AddHeader> Add a new team member</AddHeader>
                    <AddSubHeader> Set email, location and role.</AddSubHeader>
                </AddHeaderWrapper>
                <InfoWrapper>
                    <InfoForm onSubmit={submitHandler}>
                    <InfoTitle>Info</InfoTitle>
                    <InfoInput onChange={firstNameHandler} type="text" placeholder="first name"/>
                    <ErrorMsg>{fistNameError}</ErrorMsg>
                    <InfoInput onChange={lastNameHandler} type="text" placeholder="last name"/>
                    <ErrorMsg>{lastNameError}</ErrorMsg>
                    <InfoInput onChange={emailHandler} type="text" placeholder="email"/>
                    <ErrorMsg>{emailError}</ErrorMsg>
                    <InfoInput onChange={phoneNumberHandler} type="tel" placeholder="phone number"/>
                    <ErrorMsg>{phoneNumberError}</ErrorMsg>
                    <InfoTitle>Role</InfoTitle>
                    <RadioWrapper>
                    <RadioDiv>
                    {role === "Regular" ? 
                    <RadioLabel>
                    Regular - Can't delete members
                    <RadioInput type="radio" value="Regular" checked={role === "Regular"} onChange={handleChange}/>
                    </RadioLabel>
                    : 
                    <RadioUnactiveLabel>
                    Regular - Can't delete members
                    <RadioInput type="radio" value="Regular" checked={role === "Regular"} onChange={handleChange}/>
                    </RadioUnactiveLabel>
                    }
                    </RadioDiv>
                    <RadioDiv>
                    {role === "Admin" ?
                    <RadioLabel>
                    Admin - Can delete members
                    <RadioInput type="radio" value="Admin" checked={role === "Admin"} onChange={handleChange}/>
                    </RadioLabel>
                    :
                    <RadioUnactiveLabel>
                    Admin - Can delete members
                    <RadioInput type="radio" value="Admin" checked={role === "Admin"} onChange={handleChange}/>
                    </RadioUnactiveLabel>
                    }
                    </RadioDiv>
                    <ButtonDiv>
                    <BootstrapButton variant="contained" type="submit">
        Save
      </BootstrapButton>
                    </ButtonDiv>
                    </RadioWrapper>
                    </InfoForm>
                </InfoWrapper>
            </ListWrapper>
        </ListContainer>
       </PageContainer>
    </PageWrapper>
    );
}