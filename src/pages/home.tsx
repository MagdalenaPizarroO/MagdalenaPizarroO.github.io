import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { BotonesNavegacionCon, PresentacionCon } from "../components/AppElements";

export const Home = () => {
  return (
    <>

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


       
      </>
  )
}