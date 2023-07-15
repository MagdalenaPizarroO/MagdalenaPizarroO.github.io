import { Link } from "react-router-dom"
import { Center, Start, NavbarCon, End, ButtonNavbar } from "./NavbarElements"

export const Navbar = () => {
    return (
        <NavbarCon>
            <Start>
            <Link to="/">
                <ButtonNavbar>Home</ButtonNavbar>
              </Link>
            </Start>
            <Center>
            <Link to="/about">
                <ButtonNavbar>About</ButtonNavbar>
              </Link>
              <Link to="/work">
                <ButtonNavbar>Work</ButtonNavbar>
              </Link>
              <Link to="/contact">
                <ButtonNavbar>Contact</ButtonNavbar>
              </Link>
            </Center>
            <End>
                End
            </End>
        </NavbarCon>
    )
}