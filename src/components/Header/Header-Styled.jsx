import styled from "styled-components";

const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 32px;
`;

const LogoImage = styled.img`
  height: 100px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 5vh;
`;

const Heading = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 24px;
  gap: 14px;
`;

const HeadingBorder = styled.span`
  height: 12px;
  width: 40%;
  background-color: #333333;
`;

const Title = styled.h1`
  font-size: 34px;
  color: #333333;
`;

const Description = styled.p`
  color: #808080;
`;

export {HeaderBox, LogoImage, TextContainer, Heading, HeadingBorder, Title, Description};