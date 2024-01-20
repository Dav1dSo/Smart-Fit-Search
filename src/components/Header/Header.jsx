import { HeaderBox, TextContainer, Heading, Title, HeadingBorder, Description } from "./Header_style";

function Header() {
  return (
    <HeaderBox>
      <TextContainer>
        <Heading>
          <Title>REABERTURA <br/>SMART FIT</Title>
          <HeadingBorder/>
        </Heading>
        <Description>
          O horário de funcionamento das nossas unidades está seguindo os decretos de cada município.
          Por isso, confira aqui se a sua unidade está aberta e as medidas de segurança que estamos seguindo.
        </Description>
      </TextContainer>
    </HeaderBox>
  );
}

export default Header;
