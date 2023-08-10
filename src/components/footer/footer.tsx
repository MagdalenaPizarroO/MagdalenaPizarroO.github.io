import { FooterContainer, FooterLink, RedSpan } from "./FooterElements"

export const Footer = () => {
    return (
        <FooterContainer>
          <>
            <br />
            Developed with <RedSpan>♥︎</RedSpan> by{" "}
            <FooterLink
              href="https://github.com/MagdalenaPizarroO"
              target="_blank"
              rel="noreferrer"
            >
              @Magdis
            </FooterLink>
          </>
        </FooterContainer>
    )
}