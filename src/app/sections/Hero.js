/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import styled from "styled-components";
import profilePic from "#/diksha.jpg";

export const Hero = () => {
  return (
    <DisplayWrapper>
      <ContentWrapper>
        <MyName>Diksha Dubey</MyName>
        <MyDesc>Cloud & DevOps | Web Developer</MyDesc>
        <MyStory>
          MCA candidate specializing in Cloud Computing with hands-on knowledge
          of AWS, Linux, Docker, Git, CI/CD, networking, and cloud
          infrastructure. Strong foundation in web development using JavaScript,
          React.js, Next.js, Node.js, and REST APIs, with experience building
          and deploying responsive web applications.
        </MyStory>
        <ButtonsWrapper>
          <PrimaryBtn>Download CV</PrimaryBtn>
          <SecondaryBtn>Let's Connect</SecondaryBtn>
        </ButtonsWrapper>
      </ContentWrapper>
      <ImageWrapper>
        <Image
          className="rounded-3"
          src={profilePic}
          alt="Profile Picture"
          width="auto"
          height={260}
        />
      </ImageWrapper>
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
`;

const ContentWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ImageWrapper = styled.div`
  width: 30%;
`;

const MyName = styled.h1`
  line-height: 40px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.globalColors.blackColor
      : theme.globalColors.whiteColor};
  transition: all 0.5s ease-in-out;
`;

const MyDesc = styled.h3`
  line-height: 40px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.greyColor100
      : theme.darkMode.greyColor100};
  transition: all 0.5s ease-in-out;
`;

const MyStory = styled.p`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.greyColor100
      : theme.darkMode.greyColor100};
  transition: all 0.5s ease-in-out;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const PrimaryBtn = styled.button`
  width: 150px;
  height: 40px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  text-decoration: none;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.globalColors.whiteColor
      : theme.globalColors.whiteColor};
  background-color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor300
      : theme.darkMode.blackColor201};
  transition: all 0.5s ease-in-out;

  &:hover {
    transition: background-color 0.5s ease-in-out !important;
    background-color: ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.globalColors.blackColor
        : theme.darkMode.blackColor202};
  }
`;

const SecondaryBtn = styled.button`
  width: 150px;
  height: 40px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border-radius: 10px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};
  background-color: transparent;
  border: 1.5px solid
    ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.whiteColor201
        : theme.darkMode.blackColor201} !important;
  transition: all 0.5s ease-in-out;

  &:hover {
    transition: border 0.5s ease-in-out !important;
    transition-delay: none !important;
    border: 1.5px solid
      ${({ theme }) =>
        theme.currentTheme === "light"
          ? theme.lightMode.greyColor100
          : theme.darkMode.greyColor100} !important;
  }
`;
