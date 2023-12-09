import styled from "@emotion/styled";

export const ListContainer = styled.div`
width: 100%;
height: 100%;
background-color: #f9f9f9;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const ListWrapper = styled.div`
background-color: #fff;
width: calc(100% - 15px);
height: calc(100% - 15px);
`;
export const ListHeaderWrapper = styled.div`
width: calc(100% - 30px);
height: 120px;
display: flex;
flex-direction: column;
justify-content: center;
margin-left: 15px;
margin-right: 15px;
border-bottom: 1px solid #999;
position: relative;
`;
export const ListHeader = styled.div`
font-size: 25px;
`;

export const ListSubHeader = styled.div`
font-size: 15px;
color: #999;
`;
export const ListHeaderButton = styled.div`
position: absolute;
top: 15px;
right: 0;
display: flex;
justify-content: flex-end;
&:hover {
    cursor: pointer;
}
`;

export const ItemContainer = styled.div`
width: 100%;
height: calc(100% - 120px);
overflow-y: scroll;
`;

export const ItemWrapper = styled.div`
width: calc(100% - 30px);
height: 25%;
display: flex;
justify-content: flex-start;
align-items: flex-start;
border-bottom: 1px solid #fff;
margin-left: 15px;
margin-right: 15px;
border-bottom: 1px solid #999;
&:hover {
    cursor: pointer;
}
`;

export const ItemAvatar = styled.div`
width: 80px;
height: 100%;
display: flex;
justify-content: flex-start;
padding-top: 20px;
padding-left: 10px;
`;

export const ItemDetails = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
padding-top: 15px;
`;
export const ItemName = styled.div`
width: 100%;
color: #000;
font-size: 18px;
font-weight: 400;
margin-bottom: 3px;
`;

export const ItemInfo = styled.div`
width: 100%;
color: #999;
font-size: 15px;
margin-bottom: 3px;
`;
export const ItemPhone = styled.div`
width: 100%;
color: #999;
font-size: 15px;
letter-spacing: 2px;
margin-bottom: 3px;
`;