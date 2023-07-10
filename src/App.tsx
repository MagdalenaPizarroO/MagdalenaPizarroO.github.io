import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  BotonesNavegacionCon,
  GradientBackgroundCon,
  PresentacionCon,
} from "./components/AppElements";
import {
  FooterContainer,
  FooterLink,
  RedSpan,
} from "./components/FooterElements";
import Button from "@mui/material/Button";

function App() {
  return (
    <Router>
      <>
        <GradientBackgroundCon>
          <PresentacionCon>
            Hello World!
            <BotonesNavegacionCon>
              <Link to="/about">
                <Button variant="outlined">About</Button>
              </Link>
              <Link to="/work">
                <Button variant="outlined">Work</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outlined">Contact</Button>
              </Link>
            </BotonesNavegacionCon>
          </PresentacionCon>
        </GradientBackgroundCon>

        {/* Footer */}
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
      </>
    </Router>
  );
}

export default App;
