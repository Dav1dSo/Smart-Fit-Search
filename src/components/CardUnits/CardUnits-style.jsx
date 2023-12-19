import styled from 'styled-components';

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  max-width: 70%;
  width: 100%;
  margin: 20px auto;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 12px 8px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: 1px 1px 1px 1px rgba(51, 51, 51, 0.15);
  gap: 8px;
  width: 400px;
  height: 400px;
`;


const Divider = styled.div`
  height: 2px;
  width: 100%;
  background-color: #d7d7d7;
`;

const StyledSpan = styled.span`
  font-weight: 700;
  font-size: 14px;
  color: #ff0000; /* Red color */
  &.opened {
    color: #05c405; /* Green color */
  }
`;

const StyledH3 = styled.h3`
  color: #333333; /* Dark grey color */
  font-size: 24px;
  font-weight: bold;
`;

const StyledP = styled.p`
  color: #808080; 
  font-size: 14px;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 24px;
`;

const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  color: #333333; /* Dark grey color */
  font-weight: 500;
  font-size: 12px;

  & b {
    font-size: 16px;
    color: #333333; /* Dark grey color */
  }
`;

const StyledImg = styled.img`
  height: 70px;
`;

export {CardWrapper, CardsContainer, Divider, StyledSpan, StyledH3, StyledP, StyledUl, StyledLi, StyledImg};
