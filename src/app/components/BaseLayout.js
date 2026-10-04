import styled from "styled-components";

export const BaseLayout = ({ children }) => {
  return (
    <DisplayWrapper>
      <SideBarWrapper></SideBarWrapper>
      <MainContainer>{children}</MainContainer>
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
  width: 100%;
  display: flex;
  background-color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor200
      : theme.darkMode.blackColor200};
  transition: all 0.5s ease-in-out;
`;

const SideBarWrapper = styled.div`
  width: 20%;
`;

const MainContainer = styled.div`
  width: 70%;

  padding: 100px 50px;
`;
