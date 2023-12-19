import {
  CardWrapper,
  CardsContainer,
  Divider,
  StyledH3,
  StyledImg,
  StyledLi,
  StyledP,
  StyledSpan,
  StyledUl,
} from "./CardUnits-style";

const CardUnit = ({ Unit }) => {
    return (
      <>
      <CardsContainer>
        {Unit.map((unit, index) => (
          <CardWrapper key={index}>
            <StyledSpan className={unit.opened ? "opened" : ""}>
              {unit.opened ? "Aberto" : "Fechado"}
            </StyledSpan>
            <StyledH3>{unit.title}</StyledH3>
            <StyledP dangerouslySetInnerHTML={{ __html: `${unit.content}` }}></StyledP>
            <Divider></Divider>
            <StyledUl>
              {unit.mask && (
                <StyledImg
                  src={`src/assets/imgs/${unit.mask}-mask.png`}
                  alt="Mask"
                />
              )}
              {unit.towel && (
                <StyledImg
                  src={`src/assets/imgs/${unit.towel}-towel.png`}
                  alt="Towel"
                />
              )}
              {unit.fountain && (
                <StyledImg
                  src={`src/assets/imgs/${unit.fountain}-fountain.png`}
                  alt="Fountain"
                />
              )}
              {unit.locker_room && (
                <StyledImg
                  src={`src/assets/imgs/${unit.locker_room}-lockerroom.png`}
                  alt="Locker Room"
                />
              )}
            </StyledUl>
            <StyledUl>
              {Array.isArray(unit.schedules) &&
                unit.schedules.map((schedule, index) => (
                  <StyledLi key={index}>
                    <b>{schedule.weekdays}</b>
                    {schedule.hour}
                  </StyledLi>
                ))}
            </StyledUl>
          </CardWrapper>
        ))}
        </CardsContainer>
      </>
    );
  };
  
export default CardUnit;
