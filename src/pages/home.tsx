import { Link } from "react-router-dom";
import {
  BotonesNavegacionCon,
  Button,
  H1Con,
  P,
  PCon,
  PhotoCon,
  PresentacionCon,
} from "../components/home/HomeElements";

export const Home = () => {
  return (
    <>
      <PresentacionCon id="PresentacionCon">
        <H1Con>
          I'm Magdalena Pizarro Ortega, a passionate and dedicated full-stack
          developer.
        </H1Con>
        <PCon>
          <P>
            Please take a moment to browse through my portfolio and explore the
            projects I have worked on. If you have any questions or would like
            to discuss potential collaborations, feel free to reach out to me
            through the contact form.
          </P>
          <P>
            Thank you for visiting, and I look forward to connecting with you!
          </P>
        </PCon>
        <PhotoCon></PhotoCon>
        <BotonesNavegacionCon>
          <Link to="/about">
            <Button>About</Button>
          </Link>
          <Link to="/work">
            <Button>Work</Button>
          </Link>
          <Link to="/contact">
            <Button>Contact</Button>
          </Link>
        </BotonesNavegacionCon>
      </PresentacionCon>
    </>
  );
};
