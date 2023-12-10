import styled from "@emotion/styled";

export const AddHeaderWrapper = styled.div`
width: calc(100% - 30px);
height: 100px;
display: flex;
flex-direction: column;
justify-content: center;
margin-left: 15px;
margin-right: 15px;
border-bottom: 1px solid #ddd;
font-weight: 400;
`;

export const AddHeader = styled.div`
font-size: 25px;
color: #444;
font-weight: 500;
`;

export const AddSubHeader = styled.div`
font-size: 18px;
color: #999;
padding-top: 5px;
padding-bottom: 5px;
margin-bottom: 10px;
`;

export const InfoWrapper = styled.div`
width: calc(100% - 30px);
height: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
margin-left: 15px;
margin-right: 15px;
`;

export const InfoTitle = styled.div`
font-size: 20px;
color: #444;
font-weight: 500;
padding-top: 10px;
margin-bottom: 10px;
`;

export const InfoForm = styled.form`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
`;

export const InfoInput = styled.input`
width: 100%;
height: 40px;
border: 1px solid #ddd;
border-radius: 5px;
padding-left: 10px;
font-size: 15px;
color: #444;
font-weight: 400;
&:focus {
    outline: none;
}
`;
export const RadioWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;

`;
export const RadioDiv = styled.div`
width: 100%;
height: 100%;
height: 40px;
display: flex;
justify-content: flex-start;
padding-bottom: 15px;
margin-bottom: 10px;
border-bottom: 1px solid #ddd;
position: relative;
`;
export const RadioInput = styled.input`
width: 20px;
position: absolute;
top: 0;
right: 0;
`;

export const RadioLabel = styled.label`
font-size: 15px;
color: #444;
font-weight: 500;
`;

export const RadioUnactiveLabel = styled.label`
font-size: 15px;
color: #ddd;
font-weight: 400;
`;
export const ButtonDiv = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: flex-end;
align-items: flex-end;
`;
export const EditButtonDiv = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: flex-end;
`;


export const ErrorMsg = styled.p`
font-size: 10px;
color: #ff0000;
font-weight: 400;
padding-left: 10px;
`;



