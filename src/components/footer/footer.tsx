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
              rel="noopener noreferred"
            >
              @Magdis
            </FooterLink>
          </>
        </FooterContainer>
    )
}