import { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  OpenLinksButton,
  NavbarLinkExtended,
  Logo,
} from "./NavbarElements";
import linkedinImg from "../../assets/linkedin-logo.png";

type NavbarProps = boolean;

export const Navbar: React.FC<NavbarProps> = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  const handleLinkClick = () => {
    setExtendNavbar(false);
  };

  return (
    <NavbarContainer $extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/"> Home</NavbarLink>
            <NavbarLink to="/about"> About</NavbarLink>
            <NavbarLink to="/work"> Work</NavbarLink>

            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <NavbarLink to="/contact"> Contact</NavbarLink>
          <a
            href="https://www.linkedin.com/in/magdalena-pizarro-ortega/"
            target="_blank"
            rel="noreferrer"
          >
            <Logo src={linkedinImg}></Logo>
          </a>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/" onClick={handleLinkClick}>
            {" "}
            Home
          </NavbarLinkExtended>
          <NavbarLinkExtended to="/about" onClick={handleLinkClick}>
            {" "}
            About
          </NavbarLinkExtended>
          <NavbarLinkExtended to="/work" onClick={handleLinkClick}>
            {" "}
            Work
          </NavbarLinkExtended>
          <NavbarLinkExtended to="/contact" onClick={handleLinkClick}>
            {" "}
            Contact
          </NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};
