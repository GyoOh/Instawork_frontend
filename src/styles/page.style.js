import styled from "@emotion/styled";

export const PageWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: 100vh;
`;

export const PageContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
max-width: 400px;
height: 100vh;
background-color: #f9f9f9;
`;

export const TitleWrapper = styled.div`
width: 100%;
height: 50px;
background-color: #f9f9f9;
display: flex;
justify-content: center;
align-items: center;
border-bottom: 3px solid #fff;
`;

export const Title = styled.h1`
font-size: 25px;
color: #444;
font-weight: 500;
`;