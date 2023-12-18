import styled from 'styled-components';

const LegendBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #00000019;
  max-width: 66%;
  width: 80%;
  margin: 0 auto;
  padding: 24px 12px;
  border-radius: 10px;
  gap: 24px;
  margin-top: 4vh;

  @media (min-width: 1120px) {
    flex-direction: row;
  }
`;

const LegendItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.h3`
  text-align: center;
`;

const LegendImages = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LegendImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100px;

  @media (min-width: 1120px) {
    width: 50px;
  }

  @media (min-width: 1500px) {
    width: 100px;
  }
`;

export {LegendBox, LegendItem, Title, LegendImages, LegendImage, Image};
