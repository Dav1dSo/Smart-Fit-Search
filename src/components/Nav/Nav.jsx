import HeaderWrap from "./Nav-Styled";
import logo from "./../../assets/imgs/logo.svg";

function Header() {
  return (
    <HeaderWrap>
        <img src={logo} alt="teste" />
    </HeaderWrap>
  );
}

export default Header;
