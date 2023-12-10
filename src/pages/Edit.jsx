import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  PageContainer,
  PageWrapper,
  TitleWrapper,
  Title,
} from "../styles/page.style";
import { ListContainer, ListWrapper } from "../styles/list.style";
import {
  AddHeader,
  AddHeaderWrapper,
  AddSubHeader,
  ErrorMsg,
  InfoForm,
  InfoInput,
  InfoTitle,
  InfoWrapper,
  RadioInput,
  RadioDiv,
  RadioLabel,
  RadioUnactiveLabel,
  RadioWrapper,
  ButtonDiv,
  EditButtonDiv,
} from "../styles/add.style";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 12,
  padding: "10px 24px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#4E6FEF",
  borderColor: "#0063cc",
  fontFamily: ["Arial", "sans-serif"].join(","),
  "&:hover": {
    backgroundColor: "#5F7CFE",
    borderColor: "#5F6CFE",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#5F7CFE",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

const DeleteButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 12,
    padding: "10px 24px",
    border: "1px solid",
    lineHeight: 1.5,
    color: "#FF0000",
    backgroundColor: "#fff",
    borderColor: "#ddd",
    fontFamily: ["Arial", "sans-serif"].join(","),
    "&:hover": {
        color: "#DD0000",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        boxShadow: "none",
    },
    "&:active": {
        boxShadow: "none",
        color: "#DD0000",
        backgroundColor: "#fff",
        borderColor: "#ccc",
    },
    "&:focus": {
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
});

export default function Edit() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({}); 
  const [role, setRole] = useState("Regular");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [fistNameError, setFirstNameError] = useState(" ");
  const [lastNameError, setLastNameError] = useState(" ");
  const [emailError, setEmailError] = useState(" ");
  const [phoneNumberError, setPhoneNumberError] = useState(" ");

  useEffect(() => {
    (async () => {
      const response = await axios.get(`http://localhost:8000/user/${id}`);
      setUser(response.data);
      setFirstName(response.data.name.split(" ")[0]);
      setLastName(response.data.name.split(" ")[1]);
      setEmail(response.data.email);
      setPhone(response.data.phone);
      setRole(response.data.role);
    })();
  }, [id]);

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const firstNameHandler = (event) => {
    setFirstName(event.target.value);
  };
  const lastNameHandler = (event) => {
    setLastName(event.target.value);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const phoneNumberHandler = (event) => {
    setPhone(event.target.value);
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    if (firstName.length < 1) {
      setFirstNameError("First name is required");
      return;
    } else {
      setFirstNameError(" ");
    }
    if (lastName.length < 1) {
      setLastNameError("Last name is required");
      return;
    } else {
      setLastNameError(" ");
    }
    if (email.length < 1) {
      setEmailError("Email is required");
      return;
    } else if (!email.includes("@")) {
      setEmailError("Email is not valid");
      return;
    } else {
      setEmailError(" ");
    }

    if (phone.length < 10) {
      setPhoneNumberError("Phone number is required");
      return;
    } else {
      setPhoneNumberError(" ");
    }
      try {
          await axios.put(`http://localhost:8000/user/${id}`, {
          name: firstName + " " + lastName,
          phone,
          email,
          role,
        });
        navigate("/", { replace: true });
      } catch (error) {
        console.log(error);
      }
  };

  const deleteHandler = async () => {
    if(user.role === "Admin"){
    try {
        const result = await axios.delete(`http://localhost:8000/user/${id}`);
        navigate("/", { replace: true });
        } catch (error) {
        console.log(error);
        }
    } else {
        alert("You are not allowed to delete this member")
    }
    }
  return (
    <PageWrapper>
      <PageContainer>
        <TitleWrapper>
          <Title> Edit page</Title>
        </TitleWrapper>
        <ListContainer>
          <ListWrapper>
            <AddHeaderWrapper>
              <AddHeader>Edit team member</AddHeader>
              <AddSubHeader>Edit contact info, location and role.</AddSubHeader>
            </AddHeaderWrapper>
            <InfoWrapper>
              <InfoForm onSubmit={submitHandler}>
                <InfoTitle>Info</InfoTitle>
                <InfoInput
                  onChange={firstNameHandler}
                  value={firstName}
                  type="text"
                  placeholder="first name"
                />
                <ErrorMsg>{fistNameError}</ErrorMsg>
                <InfoInput
                  onChange={lastNameHandler}
                  value={lastName}
                  type="text"
                  placeholder="last name"
                />
                <ErrorMsg>{lastNameError}</ErrorMsg>
                <InfoInput
                  onChange={emailHandler}
                  value={email}
                  type="text"
                  placeholder="email"
                />
                <ErrorMsg>{emailError}</ErrorMsg>
                <InfoInput
                  onChange={phoneNumberHandler}
                  value={phone}
                  type="tel"
                  placeholder="phone number"
                />
                <ErrorMsg>{phoneNumberError}</ErrorMsg>
                <InfoTitle>Role</InfoTitle>
                <RadioWrapper>
                  <RadioDiv>
                    {role === "Regular" ? (
                      <RadioLabel>
                        Regular - Can't delete members
                        <RadioInput
                          type="radio"
                          value="Regular"
                          checked={role === "Regular"}
                          onChange={handleChange}
                        />
                      </RadioLabel>
                    ) : (
                      <RadioUnactiveLabel>
                        Regular - Can't delete members
                        <RadioInput
                          type="radio"
                          value="Regular"
                          checked={role === "Regular"}
                          onChange={handleChange}
                        />
                      </RadioUnactiveLabel>
                    )}
                  </RadioDiv>
                  <RadioDiv>
                    {role === "Admin" ? (
                      <RadioLabel>
                        Admin - Can delete members
                        <RadioInput
                          type="radio"
                          value="Admin"
                          checked={role === "Admin"}
                          onChange={handleChange}
                        />
                      </RadioLabel>
                    ) : (
                      <RadioUnactiveLabel>
                        Admin - Can delete members
                        <RadioInput
                          type="radio"
                          value="Admin"
                          checked={role === "Admin"}
                          onChange={handleChange}
                        />
                      </RadioUnactiveLabel>
                    )}
                  </RadioDiv>

                  <EditButtonDiv>
                    <DeleteButton variant="contained" type="button" onClick={()=> deleteHandler()}>
                        Delete
                    </DeleteButton>

                    <BootstrapButton variant="contained" type="submit">
                      Save
                    </BootstrapButton>
                  </EditButtonDiv>
                </RadioWrapper>
              </InfoForm>
            </InfoWrapper>
          </ListWrapper>
        </ListContainer>
      </PageContainer>
    </PageWrapper>
  );
}
