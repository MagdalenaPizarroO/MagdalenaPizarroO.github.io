import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Contact } from "./pages/contact";
import { About } from "./pages/about";
import { Work } from "./pages/work";
import { ContentCon, GradientBackgroundCon } from "./components/AppElements";
import { Footer } from "./components/footer/footer";
import { Navbar } from "./components/navbar/navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <GradientBackgroundCon id="GradientBackgroundCon">
          <Navbar />
          <ContentCon id="ContentCon">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
          </Routes>
          </ContentCon>
          <Footer/>
        </GradientBackgroundCon>
      </BrowserRouter>
    </>
  );
}

export default App;
