import { PageContainer, Title, TitleWrapper } from "../styles/page.style";
import {
  ItemAvatar,
  ItemWrapper,
  ListContainer,
  ListHeader,
  ListHeaderButton,
  ListHeaderWrapper,
  ListSubHeader,
  ListWrapper,
  ItemContainer,
  ItemDetails,
  ItemInfo,
  ItemPhone,
  ItemName,
} from "../styles/list.style";
import { createSvgIcon } from "@mui/material/utils";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

const PlusIcon = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5v15m7.5-7.5h-15"
    />
  </svg>,
  "Plus"
);

export default function List({users}) {
  return (
    <PageContainer>
      <TitleWrapper>
        <Title>List Page</Title>
      </TitleWrapper>

      <ListContainer>
        <ListWrapper>

          <ListHeaderWrapper>
            <ListHeader>Team members</ListHeader>
            <ListSubHeader>You have {users.length} team members.</ListSubHeader>
            <ListHeaderButton>
             <Link to='/add'> <PlusIcon color="primary" /> </Link>
            </ListHeaderButton>
          </ListHeaderWrapper>

          <ItemContainer>
        {users.map((user) => (
            <ItemWrapper key={user.id}>
              <ItemAvatar>
                <Avatar src="/broken-image.jpg" />
              </ItemAvatar>
              <ItemDetails>
                <ItemName> {user.name}</ItemName>
                <ItemPhone>   {user.phone.toString().length > 8 ? user.phone.toString().substring(0, 3) + "-" + user.phone.toString().substring(3, 6) + "-" + user.phone.toString().substring(6, 10) : user.phone }</ItemPhone>
        
                <ItemInfo> {user.email}</ItemInfo>
              </ItemDetails>
            </ItemWrapper>
        ))}
          </ItemContainer>

        </ListWrapper>
      </ListContainer>
      
    </PageContainer>
  );
}
